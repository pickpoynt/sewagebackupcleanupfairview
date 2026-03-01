import { ShieldCheck, Drill, Search, Clock, Zap, Hammer, Flame, Home, Shield, Activity, Target, Waves } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Water Heater Repair",
    description: "Our Beaverton specialists diagnose and repair all water heater issues — from pilot light failures and thermostat malfunctions to sediment buildup and pressure relief valve problems."
  },
  {
    icon: Search,
    title: "Diagnostic Inspection",
    description: "We deploy advanced inspection techniques to identify the root cause of your water heater problem quickly, saving you time and money in Beaverton, OR."
  },
  {
    icon: Waves,
    title: "Tankless Water Heater Service",
    description: "Tankless systems require specialized expertise. We service, descale, and repair all major tankless water heater brands across the Beaverton and Washington County area."
  },
  {
    icon: Shield,
    title: "Water Heater Replacement",
    description: "When repair isn't cost-effective, we provide fast, professional water heater replacement with same-day installation available throughout Beaverton."
  },
  {
    icon: Target,
    title: "Annual Maintenance",
    description: "Extend your water heater's lifespan with our professional annual flush, anode rod inspection, and full system tune-up — the Beaverton homeowner's best investment."
  },
  {
    icon: Activity,
    title: "Emergency Hot Water Repair",
    description: "No hot water is a household emergency. Our Beaverton team offers rapid-response emergency water heater repair 24/7 across Washington County."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">water heater repair beaverton</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Specialized water heater repair and replacement solutions designed for Beaverton's hard water conditions. We protect your Oregon home's comfort.
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
