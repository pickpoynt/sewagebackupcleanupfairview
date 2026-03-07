import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { ShieldCheck, Bug, Home, Zap } from "lucide-react";

const Index = () => {
  const primaryKeyword = "Dead Rat Smell Removal Cohoes";
  const firmName = "Cohoes Dead Rat Smell Removal Pros";
  const phoneNumber = "(323) 880-1224";
  const rawPhone = "3238801224";
  const zipCodes = "12047, 12189, 12065, 12019, 12033, 12054, 12077, 12110, 12121, 12144, 12159, 12188, 12201, 12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12212";
  const businessCords = { lat: 42.7742, lng: -73.7004 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Expert technicians providing rapid dead rodent odor elimination in Cohoes and surrounding areas including zip codes ${zipCodes}. Call ${phoneNumber} now for emergency sanitization services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://deadratsmellremovalservicecohoes.vercel.app/2.jpeg",
              "@id": "https://deadratsmellremovalservicecohoes.vercel.app/",
              "url": "https://deadratsmellremovalservicecohoes.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street Service Center",
                "addressLocality": "Cohoes",
                "addressRegion": "NY",
                "postalCode": "12047",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": ${businessCords.lat},
                "longitude": ${businessCords.lng}
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://deadratsmellremovalservicecohoes.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Dead Rat Smell Removal Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Cohoes"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dead Rodent Odor Elimination Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dead Rodent Location & Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Attic & Wall Cavity Extraction"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sanitization & Deodorization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Structural Odor Elimination"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Header />
      <Hero
        title={<span>Dead Rat Smell Removal <br /><span className="text-amber-400">Cohoes</span></span>}
        subtitle={`Professional dead rat odor elimination services for homes and businesses in Cohoes. Expert technicians specializing in locating and removing deceased rodents, complete sanitization, and permanent odor elimination from attics, walls, and crawl spaces. Serving 12047, 12189, 12065, 12019, 12033, 12054, 12077, 12110, 12121, 12144, 12159, 12188, and all Albany County areas. Call ${phoneNumber} for immediate emergency dead rat removal.`}
        badge="COHOES DEAD RAT SMELL REMOVAL PROS"
        phone={rawPhone}
      />

      {/* Dead Rat Smell Removal Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Dead Rodent Location & Removal</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional dead rat removal technicians use specialized equipment and techniques to safely locate and remove deceased rodents from your property. We understand the urgency and health risks associated with decomposing animals.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From attics to wall cavities, our team has the expertise to handle any dead rodent situation in Cohoes and surrounding Albany County communities quickly and professionally, ensuring complete sanitization and odor elimination.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete carcass removal using biohazard protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Same-day emergency response for severe odor problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Industrial-grade deodorization and antimicrobial treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Family and pet-safe sanitization methods</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/1.jpeg" alt="Professional dead rat removal service in Cohoes" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Odor Elimination Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency dead rodent extraction and attic sanitization specialists" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Dead Rat Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Cohoes and throughout Albany County, our dead rodent removal specialists have developed proven strategies for eliminating even the most persistent odors from decomposing rats and mice.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just remove the carcass—we sanitize the area thoroughly, apply industrial enzymatic cleaners, and help prevent future infestations. Our comprehensive approach ensures your home is safe and odor-free.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Precise Location Services</h3>
                    <p className="text-slate-600 text-sm">We use advanced detection methods to find dead rodents hidden in walls, attics, and crawl spaces.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our treatments eliminate health hazards and prevent structural damage from decomposition fluids.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Dead Rodent Locations</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Rats and mice die in various locations around your property. Here are the most common situations we handle in Cohoes:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Attics & Insulation</h3>
                <p className="text-slate-600 mb-4">Rats often die in attics where they nest in insulation, creating severe odors that permeate throughout the entire house.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Strong ammonia smell, stains on ceiling, flies near roof vents</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Wall Voids & Cavities</h3>
                <p className="text-slate-600 mb-4">Mice frequently die inside wall voids after being poisoned or trapped, causing concentrated foul odors within rooms.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Localized strong odor, discoloration on drywall, buzzing sounds from flies</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Crawl Spaces & Basements</h3>
                <p className="text-slate-600 mb-4">Rodents commonly perish in crawl spaces and basement areas where they seek shelter, creating musty decomposition smells.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Ground-level odor intensity, increased insect activity, visible carcasses</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Dead rodent detection and removal equipment" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency dead rat smell removal experts provide comprehensive service throughout Cohoes and all surrounding Albany County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Cohoes", "Waterford", "Green Island", "Watervliet", "Troy", "Albany", "Latham", "Troy"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving all zip codes: <span className="text-indigo-600 font-black">{zipCodes}</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Dead Rodent Removal Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Biohazard-Certified Technicians</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Response</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Dead Rat Removal Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Dead Rat Removal <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about dead rodent removal, costs, safety protocols, and odor elimination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does it cost to have a dead rat removed?", a: "Professional dead rat removal typically costs between $150-$400 depending on location accessibility and extent of sanitization needed." },
                { q: "How do you get rid of dead rat smell?", a: "Professional removal involves locating the source, removing the carcass, applying enzymatic cleaners, and using industrial deodorizers to neutralize odors permanently." },
                { q: "How long does it take for the smell of a dead rat to go away?", a: "The odor can last 2-4 weeks naturally, but professional deodorization can eliminate it within 24-48 hours." },
                { q: "How to get rid of breathing in dead rat smell?", a: "Avoid the area, wear N95 masks, ventilate the space, and call professionals immediately for proper removal and air purification." },
                { q: "Will rats leave if they see a dead rat?", a: "Not necessarily. Rats may avoid the immediate area temporarily, but pheromones can actually attract other rats initially." },
                { q: "Who to call to remove a dead rat?", a: "Call professional wildlife removal services or dead animal removal specialists who have proper equipment and training for safe handling." },
                { q: "What are the dangers of inhaling dead rat smell?", a: "Decomposing rats release harmful bacteria, pathogens, and toxins that can cause respiratory issues, nausea, headaches, and potential disease transmission." },
                { q: "What will mask the smell of a dead rat?", a: "While vinegar, baking soda, or coffee grounds may temporarily mask odors, only professional enzymatic cleaners can truly eliminate them." },
                { q: "What is the best air freshener to get rid of dead mouse smell?", a: "Air fresheners only mask temporarily. Use ozone generators, activated charcoal, or professional-grade odor eliminators for actual neutralization." },
                { q: "What time of year are rats most active?", a: "Rats are most active in fall and winter when they seek warm shelter indoors, though indoor infestations can occur year-round." },
                { q: "How long does it take for a dead rat to get maggots?", a: "Maggots can appear within 24-48 hours in warm conditions, accelerating decomposition significantly." },
                { q: "Do exterminators get rid of dead rats?", a: "Many pest control companies offer dead rodent removal as part of their services, often including sanitization and deodorization." },
                { q: "How long does dead rat smell make you sick?", a: "Exposure can cause temporary symptoms like nausea and headaches. Remove the source immediately and ventilate the area thoroughly." },
                { q: "How to get rid of dead rat smell fast?", a: "Call professionals immediately. They use industrial enzymes, ozone treatment, and antimicrobial sprays for rapid odor elimination." },
                { q: "Does dead rat smell attract other rats?", a: "Initially yes—decomposition pheromones can attract scavengers and potentially other rats before repelling them." },
                { q: "How to ventilate a room with dead rat smell?", a: "Open all windows, use fans to create cross-ventilation, run air purifiers with HEPA and carbon filters, and avoid recirculating HVAC." },
                { q: "How long after a rat dies do you get flies?", a: "Flies can detect and arrive within hours, laying eggs that hatch into maggots within 24 hours in warm conditions." },
                { q: "How do professionals remove the smell?", a: "Technicians locate and remove the carcass, apply enzymatic digesters, use ozone generators, and treat with antimicrobial agents." },
                { q: "How long until a dead rat stops stinking?", a: "Natural decomposition odor lasts 2-4 weeks, but professional treatment can eliminate smells in 1-2 days." },
                { q: "What absorbs dead animal smell?", a: "Activated charcoal, baking soda, and zeolite absorb odors temporarily, while enzymatic cleaners break down odor-causing compounds." },
                { q: "Is a dead rat a health hazard?", a: "Yes—decomposing rats harbor dangerous pathogens like hantavirus, leptospirosis, and salmonella that pose serious health risks." },
                { q: "Does 1 rat mean more?", a: "Usually yes—rats are social animals. Seeing one (dead or alive) often indicates a larger colony nearby." },
                { q: "Is it worth getting an exterminator for rats?", a: "Absolutely—professionals eliminate current infestations, seal entry points, and prevent future problems, saving money long-term." },
                { q: "Do I have to pay to get rid of rats?", a: "Yes, professional removal services charge fees for complete rodent removal, sanitization, and exclusion work." },
                { q: "Will the smell of a dead mouse go away?", a: "Eventually yes, but it takes 2-4 weeks naturally. Professional treatment eliminates it within 24-48 hours." },
                { q: "What to do if a rat dies in my wall?", a: "Call professionals immediately. They may need to cut drywall for access, remove the carcass, sanitize, and deodorize the cavity." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Network Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Regional <span className="text-indigo-600">Service Network</span></h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { name: "Emergency Wasp Removal Ojai", url: "https://emergencydeadratremovalojai-viea.vercel.app/" },
                { name: "Rodent Control Corvallis Oregon", url: "https://rodentcontrolcorvallisoregon.vercel.app/" },
                { name: "Wildlife Removal Douglasville GA", url: "https://wildliferemovaldouglasvillega.vercel.app/" },
                { name: "Tick Control Service Brooksville FL", url: "https://tickcontrolservicebrooksvillefl.vercel.app/" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="px-6 py-3 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest border border-slate-100 shadow-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="mt-12 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Serving Cohoes Zip Codes: {zipCodes}
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
      
      {/* Disclaimer Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
              This site is a complimentary service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </section>
      
      <FloatingCallButton phone={rawPhone} />
    </div>
  );
};

export default Index;
