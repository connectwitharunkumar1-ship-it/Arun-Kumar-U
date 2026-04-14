import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <div className="text-2xl font-serif font-bold text-white">Ii-MAT</div>
              <div className="text-[10px] font-serif font-medium text-slate-400 uppercase tracking-widest">Indian Institute</div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering the next generation of AI professionals through industry-led education and hands-on experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-[#d4af37] transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
              <li><a href="/admin" className="hover:text-[#d4af37] transition-colors">Admin Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Courses</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#courses" className="hover:text-[#d4af37] transition-colors">10-Hour AI Tools</a></li>
              <li><a href="#courses" className="hover:text-[#d4af37] transition-colors">50-Hour Advanced AI</a></li>
              <li><a href="#courses" className="hover:text-[#d4af37] transition-colors">Real World Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>info@iimat.in</li>
              <li>+91-7411772001</li>
              <li>No.98, Ground Floor, Peenya, Bangalore - 560058</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 Indian Institute of Multimedia and Animation Technology (Ii-MAT). All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
