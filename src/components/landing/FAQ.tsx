import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, DollarSign, Target, Radio, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Home, Activity, Wrench, Shield, Waves, LucideIcon } from "lucide-react";

const faqs = [
  {
    icon: Search,
    question: "How much does a leak detection specialist cost?",
    answer: "Boonton specialists typically charge between $250 and $550 for a professional residential leak detection session, depending on the complexity of the slab."
  },
  {
    icon: DollarSign,
    question: "How much does it cost to have a leak detected?",
    answer: "Most local Boonton services offer a flat rate for initial acoustic and thermal detection, usually starting around $299 for single-family homes."
  },
  {
    icon: AlertCircle,
    question: "Is a slab leak expensive to fix?",
    answer: "Repair costs range from $1,500 to $5,000+. The cost is highly dependent on whether you choose direct access repair or a localized reroute in Boonton."
  },
  {
    icon: Radio,
    question: "How to detect water leak under concrete slab?",
    answer: "Professional detection in Boonton involves electronic amplification, tracer gases, and infrared thermal imaging to see heat plumes under the foundation."
  },
  {
    icon: ShieldCheck,
    question: "Does home insurance cover leak detection?",
    answer: "Often, yes. While the pipe repair itself might not be covered, the 'cost of access' (leak detection and opening the slab) frequently is in Boonton policies."
  },
  {
    icon: Search,
    question: "How do plumbers find hidden leaks?",
    answer: "Standard Boonton plumbers may guess, but specialists use high-frequency sonar and line-tracing technology to find the leak with zero demolition."
  },
  {
    icon: FileText,
    question: "Will insurance pay for a slab leak?",
    answer: "Most Boonton insurers pay for the resulting water damage and the access costs, but the actual plumbing pipe repair is typically the homeowner's responsibility."
  },
  {
    icon: Wrench,
    question: "How do plumbers fix a slab leak?",
    answer: "Common methods in Boonton include 'spot repair' (jackhammering a small area) or 'rerouting' (bypassing the underground pipe with new lines in the walls)."
  },
  {
    icon: Clock,
    question: "How urgent is a slab leak?",
    answer: "Extremely urgent. Continuous water flow erodes the soil under your Boonton home, leading to foundation cracks, settlement, and structural failure."
  },
  {
    icon: Activity,
    question: "How common are slab leaks?",
    answer: "In Boonton homes built before 1990, slab leaks are very common due to decaying copper pipes and aggressive NJ soil minerals."
  },
  {
    icon: DollarSign,
    question: "Will insurance pay out for water damage?",
    answer: "Yes, provided the leak was 'sudden and accidental' and not due to decades of neglected maintenance in your Boonton property."
  },
  {
    icon: Hammer,
    question: "How much does it cost to replace pipes under concrete slab?",
    answer: "Replacing several linear feet of pipe can cost $2,000-$4,500. A full reroute of the kitchen or bath loop is often more cost-effective long-term."
  },
  {
    icon: Search,
    question: "How much will a plumber charge to find a leak?",
    answer: "Expect a professional detection service in Boonton to charge a service fee of $300-$500 for a thorough foundation assessment."
  },
  {
    icon: ShieldCheck,
    question: "Does home insurance cover water leaks?",
    answer: "Standard Boonton policies cover 'sudden' leaks. They rarely cover slow, long-term leaks that occurred due to poor maintenance or age."
  },
  {
    icon: Target,
    question: "What is the best DIY leak detection method?",
    answer: "The meter test: Turn off all water in your Boonton home and check the main water meter. If the dial is still spinning, you have an active leak."
  },
  {
    icon: Info,
    question: "Are slab leaks covered by a home warranty?",
    answer: "Many Boonton home warranties cover the repair and detection of slab leaks, though limits and deductibles usually apply."
  },
  {
    icon: TrendingUp,
    question: "Is it worth going through insurance for water damage?",
    answer: "If damage exceeds your deductible, yes. Slab leaks often cause hidden mold and structural settlement that requires professional remediation."
  },
  {
    icon: Thermometer,
    question: "How to check if you have a slab leak?",
    answer: "Watch for warm spots on the floor, higher than normal water bills, sound of running water when off, or unexplained damp spots in your Boonton home."
  },
  {
    icon: Home,
    question: "Will homeowners cover a slab leak?",
    answer: "Coverage varies by carrier in Boonton. Most 'Open Perils' policies cover the access and the damage, but not the physical copper pipe fix."
  },
  {
    icon: Search,
    question: "What are the signs of a hidden slab leak?",
    answer: "A spinning water meter, low water pressure, mold on baseboards, or a hot water heater that never stops running in your Boonton residence."
  },
  {
    icon: Clock,
    question: "How long do slab leaks take to repair?",
    answer: "Detection takes 1-3 hours. The physical repair or reroute for a Boonton home typically takes 1 to 2 days to complete fully."
  },
  {
    icon: Shield,
    question: "What is the best way to fix a slab leak?",
    answer: "For older Boonton homes, a reroute (bypassing the slab) is the most permanent and least invasive solution for future-proofing."
  },
  {
    icon: Info,
    question: "How common is a slab leak?",
    answer: "Statistics show that homes with older copper plumbing have a 25% chance of developing a slab leak over a 20-year period."
  },
  {
    icon: Zap,
    question: "Should I repipe instead of repairing a slab leak?",
    answer: "If your Boonton home has had more than one slab leak, a full repipe is highly recommended to prevent recurring foundation damage."
  },
  {
    icon: DollarSign,
    question: "How much to charge for leak detection?",
    answer: "Specialists in the Morris County area typically bill a flat fee of $350 for standard residential foundation leak locating."
  },
  {
    icon: Waves,
    question: "What is the best solution for slab leakage?",
    answer: "Precision detection followed by a modern PEX reroute is the industry-standard solution for permanent Boonton home protection."
  },
  {
    icon: AlertCircle,
    question: "What are the long-term costs of ignoring a slab leak?",
    answer: "Ignoring a leak leads to foundation heave, mold growth, warped floors, and eventual structural condemnation of your Boonton property."
  }
];

const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-indigo-200 transition-all group h-full relative overflow-hidden">
    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter leading-tight relative z-10">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic relative z-10">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Leak Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Slab Leak <span className="text-indigo-600 border-b-4 border-indigo-600/20">Detection FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential information for Boonton homeowners about foundation leaks, insurance coverage, and professional detection methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Still have foundation questions?</p>
          <a href="tel:8777921410" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight">
            <Phone className="w-6 h-6" />
            (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
