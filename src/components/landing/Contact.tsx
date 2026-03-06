import { Phone, MapPin, Clock, ShieldCheck, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch text-nowrap">

          <div className="text-nowrap text-nowrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold shadow-sm text-nowrap">
              <Zap className="w-4 h-4 text-nowrap" />
              Direct Brooksville Dispatch
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight text-nowrap text-nowrap">
              Secure Your Termite <br />
              <span className="text-indigo-600">Technical Inspection</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium text-nowrap">
              Contact our Brooksville master technicians immediately for rapid <br /> diagnostic response. Available 24/7 for all structural threats.
            </p>

            <div className="grid gap-6 text-nowrap">
              {[
                { icon: Phone, label: "24/7 HOTLINE", value: "(323) 880-1224", sub: "Priority Dispatch Line", href: "tel:3238801224" },
                { icon: MapPin, label: "HEADQUARTERS", value: "Brooksville, FL 34601", sub: "Hernando Service Hub" },
                { icon: Clock, label: "OPERATIONS", value: "24 Hours / 7 Days", sub: "Always Available for Brooksville" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group text-nowrap">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors text-nowrap text-nowrap">
                    <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors text-nowrap" />
                  </div>
                  <div className="text-nowrap">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-nowrap">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-black text-slate-900 block hover:text-indigo-600 transition-colors text-nowrap">{item.value}</a>
                    ) : (
                      <p className="text-xl font-black text-slate-900 text-nowrap">{item.value}</p>
                    )}
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-tight mt-1 text-nowrap">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl shadow-indigo-900/10 border border-slate-100 relative text-nowrap">
            <div className="absolute top-0 right-12 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl -translate-y-16 text-nowrap" />
            <form className="space-y-6 relative z-10 text-nowrap text-nowrap">
              <div className="grid sm:grid-cols-2 gap-6 text-nowrap">
                <div className="space-y-2 text-nowrap">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-nowrap text-nowrap">Full Name</label>
                  <Input placeholder="Technical Contact" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-indigo-500 text-nowrap" />
                </div>
                <div className="space-y-2 text-nowrap">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-nowrap text-nowrap">Brooksville Phone</label>
                  <Input placeholder="(323) 880-1224" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-indigo-500 text-nowrap text-nowrap" />
                </div>
              </div>
              <div className="space-y-2 text-nowrap">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-nowrap text-nowrap">Service Protocol</label>
                <Input placeholder="No-Tent Treatment / Inspection / Soil Barrier" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-indigo-500 text-nowrap text-nowrap" />
              </div>
              <div className="space-y-2 text-nowrap">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-nowrap text-nowrap">Issue Description</label>
                <Textarea placeholder="Describe the termite activity details..." className="min-h-[150px] rounded-[2rem] bg-slate-50 border-slate-100 focus:bg-white focus:ring-indigo-500 text-nowrap" />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl shadow-indigo-900/30 active:scale-95 transition-all text-nowrap" type="button">
                <Send className="w-5 h-5 mr-3 text-nowrap" />
                Deploy Specialist
              </Button>
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 text-nowrap">
                <ShieldCheck className="w-4 h-4 text-emerald-500 text-nowrap text-nowrap" />
                Florida Technical Privacy Guaranteed
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className="mt-24 h-[400px] w-full grayscale opacity-40 hover:grayscale-0 transition-all duration-1000 overflow-hidden relative text-nowrap">
        <img
          src="/3.jpeg"
          alt="Brooksville Service Area"
          className="w-full h-full object-cover text-nowrap text-nowrap"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 text-nowrap" />
      </div>
    </section>
  );
};

export default Contact;
