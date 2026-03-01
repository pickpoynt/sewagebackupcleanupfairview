import { ShieldCheck, Drill, Search, Clock, Zap, Target, Waves, Activity, Radio, Thermometer, Shield } from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Acoustic Leak Detection",
    description: "Our Boonton technicians uses ultra-sensitive sonar equipment to listen for the specific frequency of pressurized water escaping from pipes deep beneath your concrete slab."
  },
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    description: "Infrared technology allows us to see temperature variations under your floor, pinpointing hot water slab leaks in your Boonton home without moving a single piece of furniture."
  },
  {
    icon: Target,
    title: "Precision Pinpointing",
    description: "We don't guess—we verify. Using electronic line tracers and moisture sensors, we find the exact location of the leak to minimize repair invasiveness."
  },
  {
    icon: Drill,
    title: "Localized Slab Repair",
    description: "Once detected, we provide surgical access to the leaking pipe, performing a precision repair and professionally restoring your Boonton property's foundation."
  },
  {
    icon: Shield,
    title: "Pipe Rerouting Services",
    description: "In cases of extensive damage, we offer modern rerouting solutions that bypass the slab entirely, protecting your Boonton home from future foundation leaks."
  },
  {
    icon: Activity,
    title: "Post-Repair Verification",
    description: "We perform a final hydrostatic pressure test on every Boonton project to ensure your entire plumbing system is 100% sound before we leave."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">Slab Leak Detection Specialist Boonton</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Advanced non-invasive technology designed to locate hidden water leaks under concrete foundations. We save Boonton homeowners from catastrophic foundation damage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
