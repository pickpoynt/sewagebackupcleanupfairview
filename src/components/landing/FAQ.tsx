import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, Award, Info, CheckCircle, AlertCircle, TrendingUp, DollarSign, Home, Waves, Activity, Wrench, FileText, Scissors, Target, LucideIcon } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "Is trenchless sewer repair worth it?",
    answer: "Yes, it's highly worth it for preserving landscaping and saving long-term costs on Restoration."
  },
  {
    icon: AlertCircle,
    question: "What are the disadvantages of trenchless pipe lining?",
    answer: "The main disadvantage is that it cannot fix pipes that have completely collapsed or have significant back-grade issues."
  },
  {
    icon: DollarSign,
    question: "Will insurance pay for a new sewer line?",
    answer: "Coverage varies by policy, but standard homeowners insurance typically only covers sudden, accidental damage, not wear and tear."
  },
  {
    icon: Clock,
    question: "How long does a trenchless sewer line last?",
    answer: "Most trenchless liners and HDPE pipes are rated for a 50-year lifespan, often lasting much longer."
  },
  {
    icon: TrendingUp,
    question: "What is the average cost to repair a sewer line?",
    answer: "Costs vary based on length and depth, but trenchless repairs typically range from $4,000 to $12,000."
  },
  {
    icon: Droplets,
    question: "What's the best way to completely clean out a sewer line?",
    answer: "Hydro-jetting is the most effective method, using high-pressure water to clear scale, grease, and roots."
  },
  {
    icon: Info,
    question: "Why is PVC not allowed in homes?",
    answer: "PVC is often restricted for interior drain lines in some jurisdictions due to fire safety concerns and noise levels."
  },
  {
    icon: Target,
    question: "Why is pipe relining so expensive?",
    answer: "The cost reflects specialized equipment, high-grade resin materials, and the expert training required for the process."
  },
  {
    icon: Home,
    question: "What's better, a French drain or a trench drain?",
    answer: "French drains are best for groundwater issues, while trench drains are designed for surface water runoff."
  },
  {
    icon: FileText,
    question: "Can you sell a house with cast iron pipes?",
    answer: "Yes, but many buyers will request a sewer scope, and older pipes can sometimes complicate financing or insurance."
  },
  {
    icon: Search,
    question: "What are four signs that your sewer line is broken?",
    answer: "Signs include frequent backups, slow drains, sewage smells, and unusually lush patches of grass."
  },
  {
    icon: Activity,
    question: "Do 100 year old houses have lead pipes?",
    answer: "Many older homes originally had lead service lines or lead solder, which should be inspected and replaced."
  },
  {
    icon: ShieldCheck,
    question: "Will homeowners cover sewer line replacement?",
    answer: "Usually not unless you have a specific service line endorsement added to your property insurance."
  },
  {
    icon: Wrench,
    question: "Are trenchless sewer repairs worth it?",
    answer: "Absolutely, they save your yard and provide a permanent solution without the mess of excavation."
  },
  {
    icon: HelpCircle,
    question: "Who is responsible for a broken sewer pipe?",
    answer: "Homeowners are generally responsible for the line from the house to the city main connection."
  },
  {
    icon: Droplets,
    question: "What is the healthiest pipe for drinking water?",
    answer: "Copper and PEX are currently considered the best options for modern residential water delivery."
  },
  {
    icon: CheckCircle,
    question: "What is better, PVC or PEX?",
    answer: "PEX is better for water supply due to flexibility and freeze resistance, while PVC is standard for drainage."
  },
  {
    icon: AlertCircle,
    question: "Will boiling water hurt PVC pipes?",
    answer: "Constant exposure to boiling water can soften or damage PVC over time; it's best to let water cool slightly."
  },
  {
    icon: TrendingUp,
    question: "What decreases property value the most?",
    answer: "Major structural issues, including failing sewer lines, can significantly decrease a property's market value."
  },
  {
    icon: Clock,
    question: "What year did plumbers stop using cast iron pipes?",
    answer: "The transition to PVC began in the 1960s, and cast iron was mostly phased out of residential use by the 1980s."
  },
  {
    icon: Award,
    question: "Are old bathtubs worth anything?",
    answer: "Antique cast iron clawfoot tubs can be quite valuable to restorers and collectors if they are in good condition."
  }
];


const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group h-full">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            Expert Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Nashville <span className="text-indigo-600">Spider Control FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Everything you need to know about Nashville brown recluse pest control. Have more questions? Call our experts at (323) 880-1224.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
