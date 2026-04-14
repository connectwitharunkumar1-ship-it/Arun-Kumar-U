import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const faculty = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist",
    experience: "12+ Years Experience",
    bio: "Former Lead Researcher at Google Brain, specializing in Deep Learning and Computer Vision.",
    image: "https://picsum.photos/seed/sarah/400/400",
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Data Scientist",
    experience: "10+ Years Experience",
    bio: "Expert in NLP and Large Language Models. Previously worked at Meta and OpenAI.",
    image: "https://picsum.photos/seed/michael/400/400",
  },
  {
    name: "Dr. Amit Patel",
    role: "ML Engineer",
    experience: "8+ Years Experience",
    bio: "Specializes in MLOps and scaling AI systems. Lead Engineer at a top Silicon Valley startup.",
    image: "https://picsum.photos/seed/amit/400/400",
  },
  {
    name: "Elena Volkov",
    role: "AI Ethics Consultant",
    experience: "9+ Years Experience",
    bio: "Focuses on responsible AI and bias mitigation in algorithms. Advisor to several Fortune 500 companies.",
    image: "https://picsum.photos/seed/elena/400/400",
  },
];

export function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-lg text-slate-600">
            Learn from industry veterans who have built and scaled AI systems at the world's leading tech companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">{member.experience}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
