import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, Award, Info, CheckCircle, AlertCircle, TrendingUp, DollarSign, Home, Waves, Activity, Wrench, FileText, Scissors, Target, LucideIcon } from "lucide-react";

const faqs = [
  {
    icon: DollarSign,
    question: "How much should it cost to have a water heater replaced?",
    answer: "Water heater replacement in Beaverton typically costs $800–$2,500 installed, depending on the unit type. Tank water heaters are cheaper upfront; tankless units cost more but last longer and save on energy bills."
  },
  {
    icon: HelpCircle,
    question: "Is it worth it to repair a hot water heater?",
    answer: "If the unit is under 10 years old, repair is usually worth it. For units older than that, replacement is often more cost-effective — especially in Beaverton where hard water accelerates wear."
  },
  {
    icon: AlertCircle,
    question: "What is the most common problem with a hot water heater?",
    answer: "The most common issues are sediment buildup from hard water, a failed heating element, a faulty thermostat, or a worn-out anode rod — all of which our Beaverton team repairs daily."
  },
  {
    icon: Award,
    question: "Who offers the best water heater repair?",
    answer: "Beaverton Water Heater Repair Pros offers certified, licensed, and insured service with same-day availability, transparent pricing, and a 100% satisfaction guarantee across Washington County."
  },
  {
    icon: Home,
    question: "How much does Home Depot charge to replace a water heater?",
    answer: "Home Depot's installation fees typically range from $300–$600 on top of the unit cost. However, their scheduling is often slow. Our Beaverton team offers competitive pricing with faster same-day service."
  },
  {
    icon: Clock,
    question: "What is the life expectancy of a water heater?",
    answer: "Traditional tank water heaters last 8–12 years; tankless units last 15–20 years. Beaverton's hard water can shorten tank lifespan if annual flushing and anode rod maintenance are neglected."
  },
  {
    icon: Activity,
    question: "What are the first signs of a water heater going bad?",
    answer: "Warning signs include rumbling noises, rust-colored water, inconsistent hot water, water pooling around the base, and unusually high energy bills — call us in Beaverton before it becomes an emergency."
  },
  {
    icon: DollarSign,
    question: "What is the average labor cost to install a 50 gallon gas water heater?",
    answer: "Labor for a 50-gallon gas water heater installation in the Beaverton area typically runs $200–$500, depending on complexity, access, and whether gas line modifications are needed."
  },
  {
    icon: ShieldCheck,
    question: "Will homeowners insurance cover a broken water heater?",
    answer: "Usually not for wear-and-tear failure, but if your water heater causes sudden water damage due to a burst, your homeowners policy may cover the resulting damage. Always check with your insurer."
  },
  {
    icon: Waves,
    question: "What happens if you never flush your water heater?",
    answer: "Skipping annual flushes allows sediment to harden at the tank bottom, reducing efficiency, increasing energy costs, and eventually causing premature tank failure — a very common issue in Beaverton's hard water zones."
  },
  {
    icon: Target,
    question: "What brand of water heater lasts the longest?",
    answer: "Brands like Rheem, AO Smith, and Navien consistently rank highest for longevity. Our Beaverton technicians work with all major brands and can recommend the best fit for your OR home's water quality."
  },
  {
    icon: Wrench,
    question: "Can I repair a water heater myself?",
    answer: "Minor fixes like relighting a pilot light are DIY-safe, but replacing elements, thermostats, or gas components requires a licensed plumber in Oregon. Incorrect repairs can void warranties and create safety hazards."
  },
  {
    icon: DollarSign,
    question: "What does a plumber charge to replace a hot water heater?",
    answer: "Plumber labor for water heater replacement in the Beaverton area typically ranges from $150–$450. Our Beaverton Water Heater Repair Pros offer competitive all-in pricing with no hidden fees."
  },
  {
    icon: FileText,
    question: "Are there tax credits for new water heaters?",
    answer: "Yes! ENERGY STAR-certified heat pump water heaters and certain tankless models qualify for federal tax credits of up to 30% (capped at $600). Ask our Beaverton team for qualifying units."
  },
  {
    icon: TrendingUp,
    question: "What is the average price for a 50 gallon hot water heater?",
    answer: "A 50-gallon tank water heater in 2024 costs $500–$1,200 for the unit itself. Total installed cost in Beaverton with labor runs $900–$1,800 depending on the brand and site conditions."
  },
  {
    icon: Home,
    question: "How much does Lowe's charge to put in a hot water tank?",
    answer: "Lowe's installation packages typically cost $199–$399 on top of the unit price. Their lead times can be 1–2 weeks. Our Beaverton pros offer same-day or next-day service at comparable prices."
  },
  {
    icon: Info,
    question: "What is the common reason for a water heater not working?",
    answer: "The most frequent culprits are a tripped circuit breaker, a failed heating element, a faulty thermostat, or a clogged burner on gas units. Our Beaverton team diagnoses these in under an hour."
  },
  {
    icon: Home,
    question: "How much does Home Depot charge to change out a water heater?",
    answer: "Home Depot's total cost to swap a water heater averages $1,200–$2,500 installed, including the unit. Scheduling is slower and customer service is inconsistent compared to a dedicated local Beaverton specialist."
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
            Beaverton <span className="text-indigo-600">Water Heater FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Everything you need to know about water heater repair in Beaverton. Have more questions? Call our experts at (877) 792-1410.
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
