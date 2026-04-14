import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Customer Support Bot",
    description: "A RAG-based chatbot that handles customer queries using company documentation.",
    tech: ["LangChain", "OpenAI", "Pinecone"],
    image: "https://picsum.photos/seed/chatbot/600/400",
  },
  {
    title: "Medical Image Classifier",
    description: "Deep learning model to detect anomalies in X-ray and MRI scans with 98% accuracy.",
    tech: ["PyTorch", "CNN", "FastAPI"],
    image: "https://picsum.photos/seed/medical/600/400",
  },
  {
    title: "Stock Market Predictor",
    description: "Time-series forecasting model using LSTMs to predict market trends.",
    tech: ["TensorFlow", "Pandas", "Scikit-learn"],
    image: "https://picsum.photos/seed/stock/600/400",
  },
  {
    title: "E-commerce Recommender",
    description: "Personalized product recommendation engine based on user behavior.",
    tech: ["Collaborative Filtering", "Python", "SQL"],
    image: "https://picsum.photos/seed/ecommerce/600/400",
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Industry Projects
          </h2>
          <p className="text-lg text-slate-600">
            Build a professional portfolio with projects that showcase your skills to potential employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group bg-white">
                <div className="grid sm:grid-cols-2">
                  <div className="relative overflow-hidden h-64 sm:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-slate-100 text-slate-600 border-none">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
                        <Github className="w-4 h-4" /> Code
                      </button>
                      <button className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
