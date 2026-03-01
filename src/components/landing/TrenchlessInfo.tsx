import { ShieldCheck, Zap, Droplets, MapPin, Search, Radio, Thermometer, Target, Activity, Shield, Home } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: Radio,
            title: "Electronic Amplification",
            desc: "How we hear the leak: Our specialized Boonton equipment amplifies the sound of pressurized water escaping from a pipe, filtering out background noise like NJ traffic or wind."
        },
        {
            icon: Thermometer,
            title: "Thermal Signature Mapping",
            desc: "Visualizing the heat: Hot water leaks under Boonton concrete create a distinct thermal plume. We map this signature to find the source without any demolition."
        },
        {
            icon: Target,
            title: "Precision Pipe Tracing",
            desc: "Mapping the path: We introduce a safe electrical signal into your Boonton property's plumbing to trace the exact layout of pipes buried beneath your slab foundation."
        },
        {
            icon: Search,
            title: "Video Pipe Assessment",
            desc: "Visual evidence: We use high-definition sewer cameras to inspect the internal condition of your Boonton drains, checking for cracks or structural failures in cast iron or PVC."
        },
        {
            icon: Droplets,
            title: "Pressure Isolation",
            desc: "Isolating the problem: We perform section-by-section pressure tests to determine which loop of your Boonton home's plumbing is currently losing water."
        },
        {
            icon: Activity,
            title: "Forensic Leak Reporting",
            desc: "Expert documentation: Every Boonton detection project includes a comprehensive report with digital photos and findings for your insurance and records."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Boonton Area Leak Specialist
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            Advanced <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20">Slab Leak Detection Boonton</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                A hidden slab leak in Boonton can cause thousands in hidden foundation damage before you even see a wet spot on your carpet. Our specialized technology find these leaks in minutes, not hours, using acoustic and thermal sensors that penetrate 12 inches of concrete.
                            </p>
                            <p>
                                We specialize in Boonton's unique residential landscape—from historic homes with aging cast iron to modern Morris County developments. We provide the forensic evidence needed to trigger your homeowners insurance and protect your property.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Insured Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Morrison County Approved</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Same Day Detection</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Rapid Response Boonton</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Precision Slab Leak Detection in Boonton"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Detection <span className="text-indigo-600 border-b-4 border-indigo-600/20">Expertise Center</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical technical information for Boonton homeowners dealing with slab foundation water leaks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-bold italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative border border-indigo-500/20 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Emergency Leak Inspection?</h3>
                                <p className="text-slate-400 font-medium italic">Our Boonton specialists use infrared tech to locate your leak TODAY.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
                                (877) 792-1410
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
