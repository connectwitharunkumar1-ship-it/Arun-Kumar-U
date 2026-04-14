import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { FileDown, CheckCircle } from "lucide-react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function BrochureDownload() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      source: "Brochure",
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "leads"), leadData);
      setIsSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "leads");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="brochure" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
            <div className="grid md:grid-cols-2">
              <div className="bg-slate-900 p-12 text-white flex flex-col justify-center">
                <FileDown className="w-16 h-16 text-blue-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  Download Course Brochure
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Get detailed information about the curriculum, projects, faculty, and placement assistance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">Full Curriculum Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">Project Case Studies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">Fee Structure & Scholarships</span>
                  </div>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">Your download should start automatically. We've also sent a copy to your email.</p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-xl"
                    >
                      Download Again
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="brochure-name">Full Name</Label>
                      <Input
                        id="brochure-name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="py-6 rounded-xl border-slate-200 focus:ring-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brochure-email">Email Address</Label>
                      <Input
                        id="brochure-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="py-6 rounded-xl border-slate-200 focus:ring-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brochure-phone">Phone Number</Label>
                      <Input
                        id="brochure-phone"
                        name="phone"
                        placeholder="+1 234 567 890"
                        required
                        className="py-6 rounded-xl border-slate-200 focus:ring-blue-600"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 rounded-xl font-bold text-lg shadow-lg shadow-blue-100"
                    >
                      {isLoading ? "Processing..." : "Download Now"}
                    </Button>
                    <p className="text-xs text-center text-slate-400">
                      By clicking download, you agree to our Terms and Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
