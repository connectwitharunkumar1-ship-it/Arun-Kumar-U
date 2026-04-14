import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can enroll in this program?",
    answer: "This program is designed for students, working professionals, and anyone interested in building a career in AI. While a basic understanding of mathematics is helpful, we cover everything from the ground up.",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No prior coding experience is required. We start with a comprehensive module on Python for AI to ensure everyone is on the same page before moving to advanced topics.",
  },
  {
    question: "What is the duration of the course?",
    answer: "The course duration is 6 months, which includes live sessions, hands-on projects, and a capstone project.",
  },
  {
    question: "Is placement assistance guaranteed?",
    answer: "We provide 100% placement assistance, which includes resume building, mock interviews, and direct referrals to our 200+ hiring partners. While we don't 'guarantee' a job, we ensure you are fully prepared and connected to opportunities.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer: "You will master Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, LangChain, OpenAI API, and various vector databases.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our AI Certification program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-2xl px-6 overflow-hidden bg-white"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left font-bold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
