import { ShieldCheck, Zap, DollarSign, Award, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Technical Extraction Units",
    description: "Our Kaysville technical team consists of specialists with intense structural and stinging insect behavior training.",
    icon: Award
  },
  {
    title: "Emergency Crisis Dispatch",
    description: "We guarantee an immediate response for urgent wasp and hornet infestations, ensuring your family's safety.",
    icon: Zap
  },
  {
    title: "Aerial Neutralization",
    description: "Advanced knockdown protocols for high-altitude nests and structural infestation sites. No unexpected dispatch fees.",
    icon: DollarSign
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                The Kaysville Standard
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                Why Kaysville Trusts <br />
                <span className="text-indigo-600">Our Wasp Experts</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium">
                We've built our reputation on precision terminal removal and rapid stinging insect stabilization. When Kaysville families need help, they call the Pros.
              </p>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-indigo-600 transition-colors">
                      <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight uppercase">{feature.title}</h3>
                      <p className="text-slate-600 text-sm font-medium italic">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div>
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2">Ready to assist Kaysville</p>
                    <a href="tel:3238801224" className="text-3xl font-black hover:text-indigo-400 transition-colors">(323) 880-1224</a>
                  </div>
                  <Button className="bg-white text-indigo-900 hover:bg-slate-100 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all text-nowrap" asChild>
                    <a href="tel:3238801224">Get Dispatch</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-0">
            <div className="absolute inset-0 bg-indigo-600/20 rounded-[3rem] rotate-3" />
            <img
              src="/2.jpeg"
              alt="Kaysville Professional Wasp Removal"
              className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl brightness-90 contrast-110 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-12 -left-12 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 uppercase">100%</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest uppercase">Neutralization Rate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
