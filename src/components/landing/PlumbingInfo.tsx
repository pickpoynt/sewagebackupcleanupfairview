import { ShieldCheck, Zap, Droplets, Clock, Hammer, Shield } from "lucide-react";

const PlumbingInfo = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Marquette County Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">The Montello <span className="text-indigo-600">Plumbing Standard</span></h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                            From the historic Granite Quarry to the Fox River banks, Montello Plumbing Pros delivers specialized hydraulic solutions tailored for Wisconsin's extreme climate.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none mb-20">
                        <div className="grid md:grid-cols-2 gap-12 font-medium text-slate-600 leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Montello, WI is more than just a picturesque location; its unique geography as the county seat of Marquette County brings specific plumbing challenges. With historical roots tracing back to Father Marquette's exploration in 1673, the aging infrastructure in "Mont et L'eau" requires seasoned experts who understand both historic preservation and modern efficiency.
                                </p>
                                <p>
                                    Our team specializes in winter-proofing systems against Wisconsin's brutal -35°F record lows. We don't just fix leaks; we engineer solutions that survive the Fox River's thermal fluctuations and protect the integrity of Montello's architectural heritage.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Whether you are dealing with a silent leak in an 1800s quarry-era home or require advanced water filtration near Buffalo Lake, our "135 Rule" compliant technicians ensure every joint and seal meets the highest statewide standards.
                                </p>
                                <p>
                                    We prioritize your home's sanitary safety. From kitchen sink installations that meet stringent municipal codes to complex sewer lateral inspections, Montello Plumbing Pros remains the gold standard for Marquette County residential and commercial hydraulic integrity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight border-b border-indigo-100 pb-4">Expert Plumbing Knowledge Base</h3>
                        <div className="grid gap-8">
                            {[
                                { q: "What do local plumbers charge per hour?", a: "Typical rates for licensed professionals in rural Wisconsin range from $75 to $150 per hour, depending on the complexity of the job and emergency status." },
                                { q: "How much does a plumber charge per hour in Wisconsin?", a: "In areas like Marquette County, expect a median of $95/hour, though specialized master plumbers may command higher premiums for complex system restorations." },
                                { q: "Can plumbers make $100 an hour?", a: "Yes, licensed master plumbers with their own equipment in Wisconsin often bill $100+ an hour to cover labor, overhead, and insurance." },
                                { q: "Do plumbers give a free estimate?", a: "Most reputable firms like ours provide free initial estimates, though complex diagnostic work requiring tools may involve a standard service fee." },
                                { q: "Is it cheaper to DIY or hire a plumber?", a: "While DIY seems cheaper upfront, hiring a pro prevents catastrophic water damage and ensures compliance with Wisconsin State Plumbing Codes." },
                                { q: "Are you supposed to tip a plumber?", a: "Tipping is not expected, but appreciated for exceptional service or emergency work performed during extreme Wisconsin winter conditions." },
                                { q: "How to negotiate a plumber's rate?", a: "Ask for a flat rate for predictable jobs like heater installs, or look for off-peak scheduling discounts for non-emergency repairs." },
                                { q: "What's the most expensive part of a bathroom remodel?", a: "Labor and moving existing plumbing lines (hydraulic reconfiguration) typically represent the largest investment in a remodel." },
                                { q: "Is $28 an hour good in Wisconsin?", a: "For an apprentice plumber, $28 is a strong starting wage; journey-level and master plumbers earn significantly more." },
                                { q: "How not to get ripped off by a plumber?", a: "Always verify Wisconsin DSPS licensing, ask for a written quote, and ensure they have local references in Montello or Marquette County." },
                                { q: "What is the 135 rule in plumbing?", a: "This refers to the standard calculation for pipe slopes and venting ratios to ensure proper gravity-fed drainage without trap siphonage." },
                                { q: "Is it okay to negotiate plumber costs?", a: "Yes, especially on large-scale projects like whole-house repiping or commercial installations where bulk pricing can be applied." },
                                { q: "How to tell if your plumber is overcharging you?", a: "Compare the quote with regional averages and ensure every itemized cost reflects actual materials used and documented man-hours." },
                                { q: "What is a normal call-out charge for a plumber?", a: "Standard dispatch fees in central Wisconsin range from $49 to $99, often waived if you proceed with the suggested repair." },
                                { q: "What are common hidden plumbing costs?", a: "Behind-wall pipe corrosion discovery, non-standard fitting requirements, and restoration of tile or drywall after access is gained." },
                                { q: "How much is $70,000 a year per hour?", a: "Based on a standard 2,080-hour work year, $70,000 equates to approximately $33.65 per hour." },
                                { q: "What jobs pay $400 an hour?", a: "Specialized master plumbers providing emergency 'midnight' forensic hydraulics or industrial pipe congelation can reach these rates in rare scenarios." },
                                { q: "What trade makes $100,000 a year?", a: "Licensed Master Plumbers and Plumbing Contractors in Wisconsin frequently exceed the six-figure mark through expertise and business ownership." }
                            ].map((item, i) => (
                                <div key={i} className="group italic border-l-2 border-indigo-200 pl-6 hover:border-indigo-600 transition-colors">
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">{item.q}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlumbingInfo;
