import { motion } from "motion/react";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  { label: "Placement Rate", value: "95%", icon: Award },
  { label: "Avg Salary Hike", value: "65%", icon: TrendingUp },
  { label: "Hiring Partners", value: "200+", icon: Building2 },
  { label: "Alumni Network", value: "5000+", icon: Users },
];

const roles = [
  { title: "AI Engineer", salary: "$120k - $180k" },
  { title: "Data Scientist", salary: "$110k - $165k" },
  { title: "ML Engineer", salary: "$130k - $190k" },
  { title: "NLP Specialist", salary: "$115k - $175k" },
];

export function CareerOutcomes() {
  return (
    <section id="careers" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Career Outcomes
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Our graduates are working at top-tier companies, solving complex problems and leading AI initiatives. We provide the support you need to land your dream role.
            </p>

            <div className="space-y-6 mb-10">
              {roles.map((role) => (
                <div key={role.title} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900">{role.title}</span>
                  <span className="text-blue-600 font-bold">{role.salary}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <stat.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center">Top Hiring Partners</h3>
              <div className="grid grid-cols-2 gap-8 opacity-80 grayscale invert">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="Partner" className="h-8 mx-auto" referrerPolicy="no-referrer" />
              </div>
              <div className="mt-12 text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-slate-400 text-sm">Companies hiring our graduates</p>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
