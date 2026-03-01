import { ShieldCheck, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Beaverton Water Heater Safety
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                  Restore Your Hot Water <br />
                  <span className="text-indigo-600 border-b-4 border-indigo-600/20">water heater repair beaverton</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
                  Professional Beaverton water heater specialists ready to repair or replace your tank and tankless systems. Urgent response available for leaks, no-heat emergencies, and pilot light failures.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1 text-nowrap">WATER HEATER HOTLINE</p>
                  <a href="tel:8777921410" className="text-xl font-bold text-slate-900">(877) 792-1410</a>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">BEAVERTON EXPERTS</p>
                  <p className="text-sm font-bold text-slate-900 uppercase">Beaverton, OR 97005</p>
                </div>
              </div>

              <div className="space-y-6 text-nowrap">
                <div className="flex items-center gap-4 text-slate-600 font-bold uppercase tracking-tight text-xs">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>Service Area: Beaverton • Hillsboro • Aloha • Tigard • Cedar Mill</span>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative group">
              <div className="absolute inset-0 bg-indigo-600/[0.02] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight relative z-10">Request a Water Heater Assessment</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="Your Name" className="h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium focus:ring-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input placeholder="Your Number" className="h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium focus:ring-indigo-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Type</label>
                  <select className="w-full h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Water Heater Repair</option>
                    <option>Water Heater Replacement</option>
                    <option>Tankless Water Heater Service</option>
                    <option>Annual Maintenance & Flush</option>
                    <option>Emergency Hot Water Repair</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Water Heater Issue Details</label>
                  <Textarea placeholder="Describe the issue — no hot water, leaking, strange noises, pilot light out, error codes on your Beaverton tankless unit..." className="min-h-[150px] rounded-3xl bg-slate-50 border-slate-100 p-6 font-medium focus:ring-indigo-500" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-indigo-900/20 transition-all hover:gap-4">
                  Submit Request <Send className="w-5 h-5" />
                </Button>
                <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest pt-4 italic">
                  Rapid Water Heater Response Guaranteed in Beaverton, OR
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
