import { ShieldCheck, Search, Activity, Droplets, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Emergency Pipe Repair",
    description: "Our Montello specialists provide professional 24/7 emergency pipe repair and burst protection to safeguard your Marquette County home's integrity."
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Comprehensive acoustic inspections designed to identify hidden leaks in historic granite quarry-era homes before they become costly floods."
  },
  {
    icon: Activity,
    title: "Drain Cleaning",
    description: "We deploy advanced hydro-jetting techniques to clear tree roots and scale from your Montello property's main lines permanently."
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Plumbing failures require immediate attention. We offer fast response in the town of Montello to halt water damage and begin repairs."
  },
  {
    icon: Droplets,
    title: "Water Heaters",
    description: "Expert installation and maintenance of high-efficiency water heaters, ensuring reliable hot water during Wisconsin's brutal winter months."
  },
  {
    icon: ShieldCheck,
    title: "Frozen Pipe Thawing",
    description: "Safe, professional electronic thawing services for frozen lines, preventing ruptures and restoring flow to your Marquette County property."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">plumber montello wi</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Specialized hydraulic repair and installation solutions designed for Montello's unique seasonal demands. We protect your historic Marquette County property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
