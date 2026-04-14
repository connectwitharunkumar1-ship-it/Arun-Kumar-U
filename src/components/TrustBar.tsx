import { motion } from "motion/react";

const partners = [
  { 
    name: "BSNL", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/BSNL_logo.svg/2560px-BSNL_logo.svg.png",
    description: "Telecom Partner"
  },
  { 
    name: "Skill India", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Skill_India_logo.svg/1200px-Skill_India_logo.svg.png",
    description: "Skill Development"
  },
  { 
    name: "Ministry of Tourism", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ministry_of_Tourism_India.svg/1200px-Ministry_of_Tourism_India.svg.png",
    description: "Govt. of India"
  },
  { 
    name: "PM Daksh", 
    logo: "https://pmdaksh.dosje.gov.in/images/logo.png",
    description: "Training Partner"
  },
  { 
    name: "PM Vikas", 
    logo: "https://www.pmkvyofficial.org/assets/images/logo.png",
    description: "PMKVY Scheme"
  },
];

export function TrustBar() {
  return (
    <section id="partners" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
            Recognitions & Affiliations
          </h2>
          <p className="text-2xl font-serif font-bold text-slate-900">
            Associated with Leading Government Initiatives & Organizations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center group"
            >
              <div className="h-20 w-full flex items-center justify-center mb-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all group-hover:shadow-md group-hover:-translate-y-1">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden font-bold text-slate-400 text-center text-xs">
                  {partner.name}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-slate-900 text-sm">{partner.name}</div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{partner.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
