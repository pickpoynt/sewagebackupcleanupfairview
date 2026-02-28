import { ShieldCheck, Drill, Search, Clock, Zap, Hammer, Bug, Home, Shield, Activity, Target, Waves } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Brown Recluse Removal",
    description: "Our Nashville specialists provide professional spider extermination using targeted treatments to safeguard your Tennessee property's integrity."
  },
  {
    icon: Search,
    title: "Detailed Spider Inspection",
    description: "We deploy advanced inspection techniques to find hidden nests and entry points in your Nashville home permanently."
  },
  {
    icon: Waves,
    title: "Whole House Spraying",
    description: "Spider infestations require thorough attention. We offer comprehensive spraying across the Nashville area to eliminate pests and protect your family."
  },
  {
    icon: Shield,
    title: "Pest Prevention",
    description: "Long-term solutions allow us to pinpoint entry points and apply barriers without ever compromising the safety of your living space."
  },
  {
    icon: Target,
    title: "Exterior Barriers",
    description: "Professional-grade exterior treatments remove harborages and prevent spiders from entering, prepping your home for a pest-free environment."
  },
  {
    icon: Activity,
    title: "Infestation Treatment",
    description: "Minimize risk with our specialized residential-grade removal solutions for Nashville homes and crawl spaces."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">brown recluse pest control nashville</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Specialized spider removal and prevention solutions designed for Nashville's unique climate. We protect your Tennessee home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
