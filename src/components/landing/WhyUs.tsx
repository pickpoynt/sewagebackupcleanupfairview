import { ShieldCheck, Clock, Award, Hammer, Bug, Shield, Search, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Bug,
    title: "Eco-Safe Efficiency",
    description: "Why risk your family's safety with generic sprays? Our targeted methods eliminate brown recluses from the source, saving time and worry."
  },
  {
    icon: Zap,
    title: "Next-Gen Treatments",
    description: "From specialized residuals to deep-crevice dusts, we use industrial-grade materials that provide a multi-month barrier against spiders."
  },
  {
    icon: Award,
    title: "Nashville Certified",
    description: "Fully licensed and insured specifically for residential pest control in Tennessee. Your Nashville home is in expert hands."
  },
  {
    icon: ShieldCheck,
    title: "Infestation Guarantee",
    description: "We don't consider the job complete until your home is 100% spider-free. We stand by our extermination and prevention work for life."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Brown Recluse</span> <br />
            Experts in Nashville TN
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Nashville and the surrounding Tennessee communities with specialized, targeted brown recluse extermination and home protection services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Brown Recluse Pest Control in Nashville TN"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Spider-Free Guarantee in Nashville</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Safe Home Protection",
                desc: "Our targeted technology eliminates the need for invasive over-spraying, keeping your family and pets perfectly safe."
              },
              {
                title: "TN Climate Expertise",
                desc: "We understand how Nashville's humid climate and seasonal shifts create specific challenges for brown recluse spider management."
              },
              {
                title: "Accelerated Service",
                desc: "Our technicians implement rapid-action treatments and specialized detection systems, ensuring that your home is secure in hours."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Ready to fix your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Nashville's Best</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
