import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function LeadCaptureBanner() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to start your AI journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of learners who have transformed their careers with our industry-leading AI program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-8 rounded-2xl text-xl font-bold shadow-xl"
              >
                Get Brochure
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white/30 text-white hover:bg-white/10 px-10 py-8 rounded-2xl text-xl font-bold backdrop-blur-sm"
              >
                Talk to Counselor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
