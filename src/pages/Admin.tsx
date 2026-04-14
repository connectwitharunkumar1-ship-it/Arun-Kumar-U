import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Users, FileText, ArrowLeft, LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { db, auth, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  createdAt: any;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const unsubscribeLeads = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Lead[];
      setLeads(leadsData);
      setError(null);
    }, (err) => {
      setError("Access Denied: You must be an admin to view this data.");
      handleFirestoreError(err, OperationType.LIST, "leads");
    });

    return () => unsubscribeLeads();
  }, [user]);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const logout = () => signOut(auth);

  const exportData = () => {
    const csv = [
      ["ID", "Name", "Email", "Phone", "Source", "Date"],
      ...leads.map(l => [
        l.id, 
        l.name, 
        l.email, 
        l.phone, 
        l.source, 
        l.createdAt?.toDate ? l.createdAt.toDate().toLocaleString() : "N/A"
      ])
    ].map(e => e.join(",")).join("\n");
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "leads.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center rounded-[2.5rem] shadow-xl border-none">
          <div className="flex justify-center mb-8">
            <div className="text-4xl font-serif font-bold text-[#004aad]">Ii-MAT</div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Admin Access</h1>
          <p className="text-slate-600 mb-8">Please sign in with your authorized Google account to access the dashboard.</p>
          <Button onClick={login} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 rounded-xl font-bold text-lg flex gap-2">
            <LogIn className="w-5 h-5" />
            Sign in with Google
          </Button>
          <Link to="/" className="inline-block mt-6 text-slate-400 hover:text-blue-600 font-medium transition-colors">
            Back to Website
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-slate-500 text-sm">Logged in as {user.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button onClick={exportData} variant="outline" className="border-slate-200 flex gap-2 rounded-xl">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <Button onClick={logout} variant="ghost" className="text-slate-500 hover:text-red-600 flex gap-2 rounded-xl">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        {error ? (
          <Card className="bg-red-50 border-red-100 p-8 text-center rounded-3xl mb-8">
            <p className="text-red-600 font-medium">{error}</p>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-3xl border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Leads</CardTitle>
                  <Users className="w-4 h-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{leads.length}</div>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">Brochure Downloads</CardTitle>
                  <FileText className="w-4 h-4 text-indigo-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{leads.filter(l => l.source === "Brochure").length}</div>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">Contact Inquiries</CardTitle>
                  <Users className="w-4 h-4 text-cyan-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{leads.filter(l => l.source === "Contact").length}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-sm overflow-hidden rounded-3xl">
              <CardHeader className="bg-white border-b border-slate-100">
                <CardTitle>Recent Leads</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-slate-50/50">
                        <TableHead className="px-6">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead className="text-right px-6">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-12 text-slate-400">
                            No leads found yet.
                          </TableCell>
                        </TableRow>
                      ) : (
                        leads.map((lead) => (
                          <TableRow key={lead.id} className="hover:bg-slate-50 transition-colors">
                            <TableCell className="font-medium px-6">{lead.name}</TableCell>
                            <TableCell>{lead.email}</TableCell>
                            <TableCell>{lead.phone}</TableCell>
                            <TableCell>
                              <Badge variant={lead.source === "Brochure" ? "default" : "secondary"} className={lead.source === "Brochure" ? "bg-blue-100 text-blue-700 hover:bg-blue-100 border-none" : "bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none"}>
                                {lead.source}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-slate-500 text-right px-6">
                              {lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleDateString() : "N/A"}
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
