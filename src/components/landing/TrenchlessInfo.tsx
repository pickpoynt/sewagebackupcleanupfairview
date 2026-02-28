import { ShieldCheck, Zap, Droplets, MapPin, Search, Hammer, Clock, Bug, Home, Target, Activity } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: Search,
            title: "Spider Biology & Habits",
            desc: "Why understanding brown recluses is essential: These spiders prefer dark, undisturbed areas like Nashville attics and crawl spaces."
        },
        {
            icon: Target,
            title: "Cracks vs. Crevices",
            desc: "Understanding entry points: Nashville homes often have tiny gaps in siding or foundations where spiders enter to hunt and nest."
        },
        {
            icon: ShieldCheck,
            title: "Safe Residual Barriers",
            desc: "How we seal out spiders: Our specialized treatments create a long-lasting barrier that eliminates spiders as they move through your home."
        },
        {
            icon: MapPin,
            title: "Nashville Infestation Experts",
            desc: "Navigating Nashville's spider hotspots: From historic homes to new developments, we handle brown recluse infestations of all sizes."
        },
        {
            icon: Clock,
            title: "Rapid Removal Cycles",
            desc: "Managing elimination in TN humidity: We use specialized treatments that maintain their effectiveness even in the Nashville summer heat."
        },
        {
            icon: Activity,
            title: "Infestation Certification",
            desc: "Verification via expert inspection: We provide thorough before-and-after documentation so you can be sure your home is safe."
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
                            Nashville Service Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            Leading <span className="text-indigo-600">brown recluse pest control nashville</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                In the humid environment of Nashville, brown recluse spiders often find refuge in residential attics, closets, and storage areas. Our targeted pest control technology eliminates these dangerous pests, providing a secure solution for Tennessee's most prestigious properties.
                            </p>
                            <p>
                                Whether you're dealing with a single sighting or a multi-year infestation, our specialized residues and entry-point sealing methods offer a permanent fix without the worry of recurring populations in Nashville.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">Nashville Area Ready</h4>
                                    <p className="text-xs text-slate-500">Specialized equipment for TN Homes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">24-Hour Removal</h4>
                                    <p className="text-xs text-slate-500">Rapid response across Nashville</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Brown Recluse Spider Control in Nashville"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Spider Control <span className="text-indigo-600">Expertise Center</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Nashville homeowners exploring brown recluse extermination options.
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
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Need a Spider Consultation?</h3>
                                <p className="text-slate-400 font-medium italic">Our Nashville technicians provide expert inspections and written removal plans.</p>
                            </div>
                            <a
                                href="tel:3238801224"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
                            >
                                (323) 880-1224
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
