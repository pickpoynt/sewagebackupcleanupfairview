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
  const primaryKeyword = "Emergency Wasp Nest Removal Wauconda";
  const firmName = "Wauconda Emergency Wasp Nest Removal Pros";
  const phoneNumber = "(323) 880-1224";
  const rawPhone = "3238801224";
  const zipCodes = "60084, 60050, 60073, 60002, 60020, 60041, 60097, 60051";
  const businessCords = { lat: 42.3584, lng: -88.1445 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Local experts providing rapid response for wasp nest removal in Wauconda and surrounding areas, including zip codes ${zipCodes}. Call ${phoneNumber} now for emergency wasp extermination services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://emergencywaspnestremovalwauconda.vercel.app/2.jpeg",
              "@id": "https://emergencywaspnestremovalwauconda.vercel.app/",
              "url": "https://emergencywaspnestremovalwauconda.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fairview Service Center",
                "addressLocality": "Fairview",
                "addressRegion": "UT",
                "postalCode": "84025",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.0347,
                "longitude": -111.9383
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
                "https://emergencywaspnestremovalwauconda.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Emergency Wasp Nest Removal Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Wauconda"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wasp Extermination Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Wasp Nest Extraction"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Yellow Jacket Nest Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hornet & Bee Hive Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Preventive Wasp Control"
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
        title={<span>Emergency Wasp Nest Removal <br /><span className="text-amber-400">Wauconda</span></span>}
        subtitle={`Professional wasp nest removal services for homes and businesses in Wauconda and surrounding areas. Expert technicians specializing in safe removal of wasp nests, yellow jacket colonies, hornet hives, and bee swarms from eaves, decks, trees, and structures. Serving 60084, 60050, 60073, 60002, 60020, 60041, 60097, and 60051. Call ${phoneNumber} for immediate emergency wasp removal.`}
        badge="WAUCONDA EMERGENCY WASP NEST REMOVAL PROS"
        phone={rawPhone}
      />

      {/* Wasp Nest Removal Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Wasp Colony Elimination</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional wasp removal technicians use specialized equipment and techniques to safely remove dangerous wasp nests from your property. We understand the urgency and risks associated with stinging insects.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From aggressive yellow jackets to massive hornet colonies, our team has the expertise to handle any wasp infestation in Wauconda and surrounding Lake County communities quickly and professionally.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete nest removal using safe protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Same-day emergency response for dangerous colonies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Preventive treatments to discourage rebuilding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Family and pet-safe extermination methods</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/1.jpeg" alt="Professional wasp nest removal service in Wauconda" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Guaranteed Results</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency yellow jacket and hornet extraction specialists" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Wasp Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Wauconda and throughout Lake County, our wasp nest removal specialists have developed proven strategies for eliminating even the largest and most dangerous colonies.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just spray the nest—we remove it completely, treat the area, and help prevent future colonies from forming. Our comprehensive approach ensures your property is safe and wasp-free.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Species Identification</h3>
                    <p className="text-slate-600 text-sm">We identify the exact wasp species to apply the most effective removal method.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our treatments protect your family from dangerous stings and prevent structural damage.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Nesting Locations</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Wasps build nests in various locations around your property. Here are the most common situations we handle in Wauconda:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Eaves & Soffits</h3>
                <p className="text-slate-600 mb-4">Wasps love building umbrella-shaped nests under roof overhangs, porches, and decks where they're protected from rain.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Visible paper nests, flying insects near roofline, buzzing sounds</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Ground Nests</h3>
                <p className="text-slate-600 mb-4">Yellow jackets often nest in abandoned rodent burrows in lawns, gardens, and landscape beds creating hidden dangers.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Small holes in ground, increased wasp activity near soil, pets pawing at ground</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Trees & Shrubs</h3>
                <p className="text-slate-600 mb-4">Hornets and wasps frequently build large aerial nests in tree branches, bushes, and dense vegetation near homes.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Large football-sized nests, aggressive flying patterns, visible colony activity</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Wasp nest detection and removal equipment" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency wasp nest removal experts provide comprehensive service throughout Wauconda and all surrounding Lake County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Wauconda", "Lake Zurich", "Barrington", "Island Lake", "Volo", "Ringwood", "Fox Lake", "McHenry"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving all zip codes: <span className="text-indigo-600 font-black">60084, 60050, 60073, 60002, 60020, 60041, 60097, 60051</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Wasp Extermination Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">EPA-Approved Treatments</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Response</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Wasp Nest Removal Questions Section */}
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
                { q: "Who do you call to remove a dead rat?", a: "Call professional wildlife removal services or dead animal removal specialists who have proper equipment and training for safe handling." },
                { q: "Do exterminators get rid of dead rats?", a: "Many pest control companies offer dead rodent removal as part of their services, often including sanitization and deodorization." },
                { q: "How much does it usually cost to get rid of rats?", a: "Rat removal averages $200-$600 for live trapping, while dead removal ranges from $150-$400 per carcass." },
                { q: "Will a dead rat smell go away?", a: "The odor can last 2-4 weeks naturally, but professional deodorization can eliminate it within 24-48 hours." },
                { q: "Will rats leave if they see a dead rat?", a: "Not necessarily. Rats may avoid the immediate area temporarily, but pheromones can actually attract other rats initially." },
                { q: "How long does it take for a dead rat to get maggots?", a: "Maggots can appear within 24-48 hours in warm conditions, accelerating decomposition significantly." },
                { q: "Do I have to pay to get rid of rats?", a: "Yes, professional removal services charge fees for complete rodent removal and sanitization." },
                { q: "How to safely get rid of a dead rat?", a: "Wear gloves and mask, use plastic bags, double-bag the carcass, sanitize the area thoroughly, and wash hands immediately." },
                { q: "What is the hardest pest to get rid of?", a: "Bed bugs, German cockroaches, and rats are among the most difficult pests to completely eliminate." },
                { q: "Does one rat mean an infestation?", a: "Usually yes—rats are social animals. Seeing one often indicates a larger colony nearby." },
                { q: "How long do rat droppings stay toxic?", a: "Fresh droppings pose highest risk, but dried droppings can remain hazardous for months if undisturbed." },
                { q: "How long after a mouse dies does it start to decompose?", a: "Decomposition begins within hours, with noticeable odor typically developing in 2-3 days depending on temperature." },
                { q: "Can you call someone to pick up a dead animal?", a: "Yes! Wildlife removal specialists and some pest control companies provide dead animal pickup and disposal services." },
                { q: "What to do if you accidentally touch a dead rat?", a: "Immediately wash with soap and hot water for at least 20 seconds, then disinfect with alcohol-based sanitizer." },
                { q: "Where do rats hide during the day?", a: "Rats nest in dark, secluded areas like attics, wall voids, crawl spaces, and behind appliances during daylight hours." },
                { q: "What happens if a rat dies in your house?", a: "It creates foul odors, attracts flies and maggots, and poses health risks through bacteria and disease transmission." },
                { q: "Who to call to remove a dead rat?", a: "Contact wildlife removal professionals, pest control companies, or municipal animal services for assistance." },
                { q: "Do pest control companies remove dead rats?", a: "Most full-service pest control companies offer dead rodent removal, sanitization, and deodorization services." },
                { q: "What to do with a dead pet when you can't bury it?", a: "Contact your veterinarian for cremation services or local animal control for proper disposal options." },
                { q: "Does a dead rat deter other rats?", a: "Initially it might, but decomposition pheromones can actually attract scavengers and potentially other rats." },
                { q: "How do you tell how many rats are in your house?", a: "Look for droppings quantity, gnaw marks, grease trails, nesting materials, and listen for scurrying sounds at night." },
                { q: "Do rats only come out at night?", a: "Rats are primarily nocturnal but will venture out during daytime if food is scarce or the nest is disturbed." },
                { q: "How to get rid of a dead rat without touching it?", a: "Use tongs or grabber tools, scoop into plastic bags, or hire professionals who handle biohazardous materials." },
                { q: "What to do if a dead rat is in the yard?", a: "Wear protective gear, use shovel to place in double bags, dispose according to local regulations, and sanitize tools." },
                { q: "How to remove a dead rat from a house?", a: "Locate source of odor, access the area carefully, bag the carcass, sanitize thoroughly, and seal entry points." },
                { q: "What happens if a rat dies in your wall?", a: "Odor permeates through walls, attracts insects, and may require cutting drywall for removal if inaccessible." },
                { q: "How long do flies last after a dead mouse in the house?", a: "Flies can persist for 2-3 weeks as they complete their lifecycle feeding on decomposing remains." },
                { q: "How to humanely get rid of rats without killing them?", a: "Use live traps baited with peanut butter, release at least 2 miles away, and seal all entry points." },
                { q: "How much does it cost to have a dead rat removed from a wall?", a: "Wall removal costs $250-$600 depending on whether drywall needs to be cut and repaired." },
                { q: "How much to remove a dead rat from attic?", a: "Attic removal typically ranges $200-$500 based on accessibility and contamination level." },
                { q: "Will rats leave if they see a dead rat outside?", a: "Outdoor dead rats have less impact, but may temporarily discourage activity in that specific area." },
                { q: "Who do you call to remove a dead rat from property?", a: "Wildlife control operators, pest management professionals, or municipal animal services handle dead rodent removal." }
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
                { name: "Ant Exterminator Fairview", url: "https://antexterminatorfairview.vercel.app/" },
                { name: "Spiders Pest Control Fairview", url: "https://spiderspestcontrolfairview.vercel.app/" },
                { name: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
                { name: "Rodent Control Corvallis Oregon", url: "https://rodentcontrolcorvallisoregon.vercel.app/" }
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
              Serving Ojai Zip Codes: {zipCodes}
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
