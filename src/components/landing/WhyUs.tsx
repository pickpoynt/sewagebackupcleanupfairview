import { ShieldCheck, Clock, Award, Hammer, Droplets, Shield, Search, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Oregon Hard Water Experts",
    description: "Beaverton's hard water accelerates sediment buildup and corrosion. Our targeted treatments address root causes and extend your water heater's operational life."
  },
  {
    icon: Zap,
    title: "Same-Day Repair Service",
    description: "From anode rod replacement to complete tankless descaling, we use professional-grade tools that restore hot water fast — often the same day you call."
  },
  {
    icon: Award,
    title: "Beaverton Certified",
    description: "Fully licensed and insured specifically for residential plumbing and water heater repair in Oregon. Your Beaverton home is in expert hands."
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guarantee",
    description: "We don't consider the job complete until your hot water is fully restored. We stand behind our water heater repair and replacement work — guaranteed."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Water Heater</span> <br />
            Experts in Beaverton OR
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Beaverton and the surrounding Washington County communities with specialized, certified water heater repair and replacement services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Water Heater Repair in Beaverton OR"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Hot Water Restored Guarantee in Beaverton</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Fast Hot Water Restoration",
                desc: "Our certified technicians diagnose and fix water heater problems quickly — from faulty thermostats to failed heating elements — so your Beaverton home is comfortable again."
              },
              {
                title: "Oregon Climate Expertise",
                desc: "We understand how Beaverton's Pacific Northwest climate and hard water conditions create specific challenges for water heater performance and longevity."
              },
              {
                title: "Transparent Pricing",
                desc: "No surprise fees. We provide upfront estimates before any work begins, so Beaverton homeowners always know exactly what they're paying for."
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
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">No hot water? Call now!</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Beaverton's Best</h4>
                </div>
                <a
                  href="tel:8777921410"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (877) 792-1410
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
