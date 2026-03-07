import { ShieldCheck, Zap, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Certified Dead Rodent Specialists",
    description: "Expert technicians with specialized training in biohazard cleanup, odor elimination, and safe carcass removal.",
    icon: ShieldCheck
  },
  {
    title: "Fast Response Time",
    description: "Quick scheduling and prompt service to address dead rodent odors before they permeate your entire property.",
    icon: Zap
  },
  {
    title: "Proven Odor Elimination Methods",
    description: "Advanced enzymatic cleaners, ozone treatment, and antimicrobial sprays that permanently eliminate odors at the source.",
    icon: Bug
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">
              Why Cohoes Trusts <br /><span className="text-indigo-600">Our Dead Rat Experts</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium border-l-4 border-indigo-600 pl-6">
              When decomposing rodents create health hazards in your home, you need experienced professionals who understand biohazard cleanup and odor elimination. Our Cohoes specialists provide comprehensive removal and sanitization services.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-600 hover:bg-slate-900 hover:text-white transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed italic font-medium group-hover:text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-12 bg-indigo-600 text-white h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all" asChild>
              <a href="tel:3238801224">Call Now</a>
            </Button>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-indigo-600/10 rounded-[3rem] -rotate-3 blur-2xl group-hover:rotate-0 transition-transform duration-700" />
            <img
              src="/3.jpeg"
              alt="Cohoes Professional Dead Rat Removal Service"
              className="relative rounded-[3.5rem] shadow-2xl transition-transform group-hover:scale-[1.02] duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
