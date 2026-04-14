import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Clock, CheckCircle2, Zap, Trophy } from "lucide-react";

const courses = [
  {
    id: "c1",
    title: "Powerful AI Tools & Real-World Usage",
    duration: "10 Hours",
    description: "Master the most essential AI tools for immediate productivity and real-world application.",
    tools: [
      { name: "ChatGPT", use: "content, coding, learning" },
      { name: "Gemini", use: "research, reasoning" },
      { name: "Canva AI", use: "design" },
      { name: "Notion AI", use: "productivity" },
      { name: "Perplexity AI", use: "research" },
      { name: "Midjourney / DALL·E", use: "image generation" },
      { name: "Runway ML / Pictory", use: "video" },
      { name: "Grammarly AI", use: "writing" },
      { name: "Zapier AI", use: "automation" },
    ],
    features: ["Real World Projects", "Hands-on Training", "Tool Certification"],
    color: "blue"
  },
  {
    id: "c2",
    title: "AI Tools Revolution – Advanced Program",
    duration: "50 Hours",
    description: "Deep dive into AI tool ecosystems and complex workflows for professional mastery.",
    focus: "Deep AI tool understanding & Real-world workflows",
    useCases: ["Students", "Freelancers", "Businesses", "Content creators"],
    topics: ["Productivity", "Automation", "Creativity"],
    features: ["Real World Projects", "Advanced Workflows", "Industry Certification"],
    color: "gold"
  }
];

export function Curriculum() {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Our AI Courses
          </h2>
          <p className="text-lg text-slate-600">
            Choose the program that fits your goals. From quick tool mastery to advanced professional workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-2 ${
                course.color === 'gold' ? 'border-[#d4af37]/20 shadow-[#d4af37]/5' : 'border-[#004aad]/10 shadow-[#004aad]/5'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${course.color === 'gold' ? 'bg-[#d4af37]/10 text-[#d4af37]' : 'bg-[#004aad]/10 text-[#004aad]'}`}>
                  {course.id === 'c1' ? <Zap className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                </div>
                <Badge className={`${course.color === 'gold' ? 'bg-[#d4af37] hover:bg-[#b8962e]' : 'bg-[#004aad] hover:bg-[#003366]'} text-white px-4 py-1 rounded-full flex gap-2`}>
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </Badge>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {course.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {course.description}
              </p>

              {course.tools && (
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Tools & Usage:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.tools.map((tool) => (
                      <div key={tool.name} className="flex flex-col p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-bold text-slate-900 text-sm">{tool.name}</span>
                        <span className="text-xs text-slate-500">→ {tool.use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {course.focus && (
                <div className="mb-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Program Focus:</h4>
                    <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      {course.focus}
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.useCases?.map((u) => (
                          <Badge key={u} variant="secondary" className="bg-white border-slate-200 text-slate-600">
                            {u}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Core Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics?.map((t) => (
                          <Badge key={t} variant="outline" className="border-[#d4af37] text-[#d4af37]">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                {course.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
