import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ProgramOverview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              About Ii-MAT
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                The Indian Institute of Multimedia and Animation Technology (Ii-MAT) has developed a robust training infrastructure to meet the growing demand for skilled professionals in the animation, multimedia, and technology sectors.
              </p>
              <p>
                With a nationwide presence, Ii-MAT has successfully trained thousands of students across India, empowering them with the creative and technical expertise required for successful careers in the global digital economy.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Our Leadership Team</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">Manjunath.K</p>
                  <p className="text-xs text-slate-500">Founder</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">Usha Manjunath</p>
                  <p className="text-xs text-slate-500">Co-Founder</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">Rudresh</p>
                  <p className="text-xs text-slate-500">Head of Operations</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">Arun Kumar U</p>
                  <p className="text-xs text-slate-500">Project Manager</p>
                </div>
              </div>
            </div>
            <Button 
              variant="outline"
              className="border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white px-8 py-6 rounded-full font-bold flex gap-2"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://picsum.photos/seed/iimat-campus/800/600"
                alt="Ii-MAT Campus"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-90">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
