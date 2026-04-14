import { Target, Users, BarChart3, Briefcase, Brain, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const highlights = [
  {
    title: "Real World Projects",
    description: "Work on actual AI implementation scenarios and solve practical problems.",
    icon: Target,
    color: "bg-[#004aad]",
  },
  {
    title: "Expert Mentors",
    description: "Learn from technology veterans with years of experience in AI and Multimedia.",
    icon: Users,
    color: "bg-[#d4af37]",
  },
  {
    title: "Advanced AI Tools",
    description: "Master the latest tools like ChatGPT, Gemini, Midjourney, and more.",
    icon: Brain,
    color: "bg-[#004aad]",
  },
  {
    title: "Nationwide Presence",
    description: "Join a community of thousands of students trained across India.",
    icon: Globe,
    color: "bg-[#d4af37]",
  },
  {
    title: "Career Support",
    description: "Get guidance on how to leverage AI for career growth and freelancing.",
    icon: Briefcase,
    color: "bg-[#004aad]",
  },
  {
    title: "Practical Mastery",
    description: "Focus on hands-on training rather than just theoretical concepts.",
    icon: BarChart3,
    color: "bg-[#d4af37]",
  },
];

export function KeyHighlights() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Why Choose Ii-MAT?
          </h2>
          <p className="text-lg text-slate-600">
            We provide the infrastructure and expertise to turn you into a future-ready AI expert.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-[2rem] overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
