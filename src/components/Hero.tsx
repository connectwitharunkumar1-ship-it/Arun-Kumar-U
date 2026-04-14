import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#004aad]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-4 max-w-4xl">
            Indian Institute of Multimedia and Animation Technology (Ii-MAT)
          </h1>
          
          <p className="text-2xl lg:text-3xl font-medium text-[#004aad] mb-10 italic">
            "We create the future AI experts"
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#004aad] hover:bg-[#003366] text-white px-10 py-8 rounded-full text-xl font-bold shadow-xl shadow-blue-100 transition-all hover:scale-105"
            >
              Explore AI Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
