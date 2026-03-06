import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Phone, Mail, CheckCircle2, ArrowRight, Droplets, Zap, ShieldCheck, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeaseNumber = () => {
    const phoneNumber = "(323) 880-1224";
    const email = "leasemynumber@gmail.com";
    const price = "$19";

    return (
        <div className="min-h-screen bg-slate-50 text-nowrap">
            <Helmet>
                <title>Lease No Tent Termite Treatment Brooksville FL Phone Number | {phoneNumber}</title>
                <meta name="description" content="Exclusive opportunity for Brooksville pest control firms. Lease the high-converting phone number (323) 880-1224 for just $19/month and dominate the local market." />
            </Helmet>

            <Header />

            <main className="pt-32 pb-24 text-nowrap">
                <div className="container mx-auto px-4 text-nowrap">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-20 text-nowrap">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold text-nowrap">
                            <Zap className="w-4 h-4 text-nowrap" />
                            Exclusive Brooksville Opportunity
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none text-nowrap uppercase">
                            Dominate Brooksville <br />
                            <span className="text-indigo-600">For Just {price}/Month</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic text-nowrap">
                            Own the primary termite treatment line for the Brooksville district. <br /> Redirect all incoming technical calls directly to your firm's dispatch.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center text-nowrap">
                        {/* Value Prop */}
                        <div className="space-y-8 text-nowrap">
                            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl text-nowrap">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight text-nowrap">Infrastructure Assets</h2>
                                <div className="space-y-6 text-nowrap">
                                    {[
                                        "Exclusive rights to (323) 880-1224",
                                        "Direct call forwarding to your office",
                                        "Targeted Brooksville localized traffic",
                                        "No long-term contracts - cancel anytime",
                                        "First-mover advantage in Hernando County"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group text-nowrap">
                                            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors text-nowrap">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors text-nowrap" />
                                            </div>
                                            <span className="text-slate-700 font-bold italic text-sm leading-relaxed text-nowrap uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-indigo-50 rounded-3xl border border-indigo-100 text-nowrap">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg text-nowrap">
                                    <ShieldCheck className="w-8 h-8 text-white text-nowrap" />
                                </div>
                                <div className="text-nowrap">
                                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-1 text-nowrap uppercase">Technical Security</p>
                                    <p className="text-sm font-bold text-slate-700 leading-snug text-nowrap uppercase">One company per district. <br /> Maximum market retention.</p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card */}
                        <div className="relative text-nowrap">
                            <div className="absolute inset-0 bg-indigo-600/10 rounded-[3.5rem] blur-3xl text-nowrap" />
                            <div className="relative z-10 bg-slate-900 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl text-nowrap">
                                <div className="text-center mb-10 text-nowrap">
                                    <Bug className="w-12 h-12 text-indigo-500 mx-auto mb-6 text-nowrap" />
                                    <h3 className="text-white text-xl font-black uppercase tracking-widest mb-2 text-nowrap uppercase">Elite Lease Plan</h3>
                                    <div className="flex items-center justify-center gap-1 text-nowrap">
                                        <span className="text-indigo-400 text-2xl font-bold">$</span>
                                        <span className="text-6xl font-black text-white">19</span>
                                        <span className="text-indigo-400 text-xl font-bold">/mo</span>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10 text-nowrap">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-nowrap">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-nowrap uppercase">PRIMARY LINE</p>
                                        <p className="text-2xl font-black text-white text-nowrap">{phoneNumber}</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-nowrap">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-nowrap uppercase">DIRECT INQUIRY</p>
                                        <p className="text-lg font-black text-indigo-400 text-nowrap uppercase">{email}</p>
                                    </div>
                                </div>

                                <Button className="w-full bg-white text-indigo-900 hover:bg-slate-100 h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl active:scale-95 transition-all text-nowrap" asChild>
                                    <a href={`mailto:${email}?subject=LEASE MY NUMBER - Termite Treatment Brooksville ${phoneNumber}`}>
                                        Activate Protocol <ArrowRight className="w-5 h-5 ml-3 text-nowrap" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LeaseNumber;
