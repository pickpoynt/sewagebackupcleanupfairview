import { ShieldCheck, Zap, Droplets, MapPin, Search, Hammer, Clock, Flame, Home, Target, Activity } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: Search,
            title: "Sediment & Mineral Buildup",
            desc: "Why flushing your water heater matters: Beaverton's hard water causes rapid sediment accumulation that reduces efficiency and shortens tank lifespan significantly."
        },
        {
            icon: Target,
            title: "Anode Rod Inspection",
            desc: "The sacrificial anode rod prevents tank corrosion. In Beaverton's mineral-rich water, these rods deplete faster and should be inspected every 2–3 years."
        },
        {
            icon: ShieldCheck,
            title: "Temperature & Pressure Relief",
            desc: "How we keep your system safe: The T&P valve is a critical safety device. We test and replace faulty valves to protect your Beaverton home from dangerous pressure buildup."
        },
        {
            icon: MapPin,
            title: "Beaverton Water Heater Experts",
            desc: "Navigating Washington County's plumbing codes: We handle all permit requirements and code compliance for water heater installations and replacements in Beaverton, OR."
        },
        {
            icon: Clock,
            title: "Rapid Response Repairs",
            desc: "Managing emergency repairs in the Pacific Northwest: We use specialized diagnostic tools that pinpoint water heater failures fast, minimizing cold-water downtime."
        },
        {
            icon: Activity,
            title: "Post-Repair Certification",
            desc: "Quality verification after every job: We test water temperature, pressure, and all safety systems before we leave, so you're confident your Beaverton system is fully operational."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Beaverton Service Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            Leading <span className="text-indigo-600">water heater repair beaverton</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                In the Pacific Northwest climate of Beaverton, Oregon, water heaters face unique challenges from hard water mineral deposits, fluctuating temperatures, and high usage demands. Our specialized repair technology diagnoses and fixes these issues, providing a reliable, long-term solution for Washington County's homeowners.
                            </p>
                            <p>
                                Whether you're dealing with a leaking tank, a pilot light that won't stay lit, or a tankless unit throwing error codes, our certified Beaverton technicians provide a permanent fix without the guesswork or recurring repair cycles.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">Beaverton Area Ready</h4>
                                    <p className="text-xs text-slate-500">Specialized expertise for OR Homes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">Same-Day Repair</h4>
                                    <p className="text-xs text-slate-500">Rapid response across Beaverton</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Water Heater Repair Experts in Beaverton OR"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Water Heater <span className="text-indigo-600">Expert Knowledge Base</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Beaverton homeowners exploring water heater repair and replacement options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Need a Water Heater Consultation?</h3>
                                <p className="text-slate-400 font-medium italic">Our Beaverton technicians provide expert diagnostics and written repair or replacement plans.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
                            >
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
