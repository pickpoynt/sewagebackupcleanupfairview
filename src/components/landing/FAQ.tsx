import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer 24/7 plumbing help in Montello?",
    answer: "Yes, we provide round-the-clock emergency plumbing services in Montello and throughout Marquette County. Whether it's a burst pipe at midnight or a failing water heater on a Sunday, our rapid response team is ready to help."
  },
  {
    question: "How much does a plumber cost in Montello WI?",
    answer: "Plumbing costs in Montello vary depending on the service. Standard small repairs typically range from $150 to $350. For larger projects like water heater installations or whole-house repiping, we provide free, detailed estimates."
  },
  {
    question: "How do I prevent my pipes from freezing in the winter?",
    answer: "Given Wisconsin's extreme winters, we recommend insulating all exposed pipes in crawlspaces or attics, keeping your thermostat at at least 55°F, and allowing faucets to drip slightly during record-breaking cold snaps."
  },
  {
    question: "Does Montello Plumbing Pros give free estimates?",
    answer: "We offer free over-the-phone estimates for common plumbing issues. For more complex diagnostics requiring on-site inspection, a standard service fee may apply, which is often credited toward your repair."
  },
  {
    question: "How often should I have my drains cleaned?",
    answer: "In Marquette County, we recommend a professional drain cleaning every 18 to 24 months to prevent major blockages from tree roots or mineral buildup, especially in older historic homes."
  },
  {
    question: "What is the best way to detect a hidden pipe leak?",
    answer: "If you notice a sudden spike in your water bill or damp spots on walls, it's time for professional leak detection. We use ultrasonic and thermal imaging technology to pinpoint leaks without unnecessary demolition."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Plumbing <span className="text-indigo-600">in Montello WI FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about professional plumbing repairs, emergency costs, and local hydraulic challenges in Montello, Wisconsin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
