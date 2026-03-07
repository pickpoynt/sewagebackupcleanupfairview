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
  const primaryKeyword = "Spiders Pest Control Fairview";
  const firmName = "Fairview Spider Pest Control Pros";
  const phoneNumber = "(323) 880-1224";
  const rawPhone = "3238801224";
  const zipCodes = "84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, 84095";
  const businessCords = { lat: 41.0347, lng: -111.9383 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Local experts providing rapid response for spider infestations in Fairview and surrounding areas, including zip codes ${zipCodes}. Call ${phoneNumber} now for expert spider control services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://spiderspestcontrolfairview.vercel.app/2.jpeg",
              "@id": "https://spiderspestcontrolfairview.vercel.app/",
              "url": "https://spiderspestcontrolfairview.vercel.app/",
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
                "https://spiderspestcontrolfairview.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Spider Pest Control Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Fairview"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Spider Control Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Spider Extermination"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Spider Control"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brown Recluse Spider Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Black Widow Spider Treatment"
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
        title={<span>Spider Pest Control <br /><span className="text-amber-400">Fairview</span></span>}
        subtitle={`Professional spider extermination services for homes and businesses in Fairview and surrounding areas. Expert technicians specializing in brown recluse spiders, black widows, cellar spiders, and all spider species. Serving 84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, and 84095. Call ${phoneNumber} for immediate spider control solutions.`}
        badge="FAIRVIEW SPIDER PEST CONTROL PROS"
        phone={rawPhone}
      />

      {/* Spider Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Spider Colony Elimination</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional spider extermination technicians use advanced methods to locate and eliminate spider infestations at their source. We understand that different spider species require different treatment approaches.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From dangerous brown recluse spiders to venomous black widows, our team has the expertise to handle any spider infestation in Fairview and surrounding Utah communities safely and effectively.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete spider elimination using proven methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Safe treatments for families and pets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Preventive barrier protection around your property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Follow-up inspections to ensure spider-free results</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/1.jpeg" alt="Professional spider extermination service in Fairview" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Guaranteed Results</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Brown recluse and black widow treatment specialists" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Spider Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Fairview and throughout Utah County, our spider extermination specialists have developed proven strategies for eliminating even the most stubborn spider problems.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just treat the symptoms—we find the nesting areas and eliminate spiders comprehensively, including egg sacs, to prevent future infestations. Our approach ensures long-lasting protection for your home or business.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Species Identification</h3>
                    <p className="text-slate-600 text-sm">We identify the exact spider species to apply the most effective treatment method.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our treatments protect your family from venomous spiders and prevent webs.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Spider Species</span> in Fairview</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Understanding the type of spider invading your property is crucial for effective elimination. Here are the most common spiders we treat in Utah:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Brown Recluse Spiders</h3>
                <p className="text-slate-600 mb-4">Venomous spiders with violin-shaped markings. Their bites can cause serious medical issues requiring immediate attention. Professional removal is essential.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Violin marking on back, hidden locations, nighttime activity, bite marks</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Black Widow Spiders</h3>
                <p className="text-slate-600 mb-4">Highly venomous spiders with distinctive red hourglass markings. They require immediate professional treatment due to dangerous venom.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Red hourglass marking, messy webs in dark areas, shiny black appearance</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Cellar Spiders</h3>
                <p className="text-slate-600 mb-4">Long-legged spiders commonly found in basements and crawl spaces. While not dangerous, they indicate moisture issues and create unsightly webs.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Long thin legs, messy webs in corners, damp areas, high populations</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Spider identification and treatment" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our spider extermination experts provide comprehensive service throughout Fairview and all surrounding Utah communities. No matter where you're located in our service area, we're ready to eliminate your spider problem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Fairview", "Mount Pleasant", "Ephraim", "Moroni", "Fountain Green", "Spring City", "Wales", "Sterling"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving all zip codes: <span className="text-indigo-600 font-black">84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, 84095</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Spider Control Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">EPA-Approved Treatments</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Spider Control Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Spider Control <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about spider extermination, treatment costs, and prevention strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does it cost to get pest control for spiders?", a: "Spider pest control typically costs between $150-$400 depending on the severity of infestation and property size." },
                { q: "How much does it cost to remove a spider?", a: "Individual spider removal ranges from $100-$250, but whole-house treatment is more cost-effective for infestations." },
                { q: "Will pest control get rid of spiders?", a: "Yes! Professional pest control uses targeted treatments to eliminate spiders and prevent future infestations effectively." },
                { q: "What is the hardest pest to get rid of?", a: "Bed bugs, German cockroaches, and certain spiders like brown recluses rank as the most difficult pests to eliminate." },
                { q: "What's the worst month for spiders?", a: "September and October are peak spider months when males search for mates and spiders seek warm shelter." },
                { q: "Is it worth spraying for spiders?", a: "Absolutely! Professional spraying creates barriers that eliminate existing spiders and prevent new ones from entering." },
                { q: "What keeps spiders away permanently?", a: "Regular professional treatments, sealing entry points, reducing moisture, and eliminating prey insects keep spiders away." },
                { q: "What gets rid of spiders quickly?", a: "Professional pesticide sprays work fastest, killing spiders on contact and providing residual protection." },
                { q: "Do it yourself spider extermination?", a: "DIY methods can help minor problems, but professional treatment is needed for venomous spiders or severe infestations." },
                { q: "What time of year is best to spray for spiders?", a: "Early spring and fall are ideal, but immediate treatment is recommended whenever spiders are discovered." },
                { q: "Why shouldn't you squish a spider?", a: "Squishing female spiders can release egg sacs, spreading hundreds of baby spiders and worsening the problem." },
                { q: "How much does Orkin charge to get rid of spiders?", a: "Orkin typically charges $150-$350 for spider treatments, though prices vary by location and severity." },
                { q: "What do house spiders hate the most?", a: "Spiders dislike strong scents like peppermint oil, citrus, vinegar, and professional pesticide residues." },
                { q: "Is it hard to get rid of spiders in your house?", a: "Difficulty varies by species. Common spiders are easier, while venomous species require professional intervention." },
                { q: "How to lure spiders out of hiding?", a: "Sticky traps placed along walls and corners can catch wandering spiders, but professional treatment is more effective." },
                { q: "When should I call an exterminator for spiders?", a: "Call immediately if you spot venomous spiders, notice many spiders indoors, or find multiple egg sacs." },
                { q: "How does an exterminator get rid of spiders?", a: "Exterminators use integrated pest management: inspection, targeted spraying, web removal, and preventive barriers." },
                { q: "How much does it cost to spray a house for spiders?", a: "Whole-house spider spraying averages $200-$450 depending on square footage and treatment type." },
                { q: "Is it worth getting an exterminator for spiders?", a: "Yes—professionals provide safer, more effective, longer-lasting results especially for dangerous species." },
                { q: "How to keep spiders away permanently?", a: "Combine regular professional treatments with exclusion work, moisture control, and landscape maintenance." },
                { q: "How to get rid of a spider quickly?", a: "Vacuum them up or use approved spider spray for immediate results, then call professionals for prevention." },
                { q: "Does spraying your house for spiders work?", a: "Yes! Professional sprays kill on contact and create lasting barriers that prevent reinfestation." },
                { q: "How long does pest control keep spiders away?", a: "Professional treatments typically last 30-90 days, with quarterly maintenance recommended for best results." },
                { q: "What is the best pest control for spiders?", a: "Pyrethroid-based professional treatments combined with exclusion and sanitation provide the best spider control." },
                { q: "What do spiders hate in the house?", a: "Spiders hate clean environments, sealed cracks, reduced lighting (which attracts prey), and pesticide barriers." },
                { q: "Does it hurt a spider to remove its web?", a: "No, removing webs doesn't harm spiders but disrupts their hunting and encourages them to relocate." },
                { q: "Should I get rid of spiders at home?", a: "Yes, especially venomous species. Even harmless spiders indicate other pest problems attracting them as prey." },
                { q: "How much does Orkin charge to spray for spiders?", a: "Orkin spider spray services average $175-$375 based on property size and infestation level." },
                { q: "Should you pick up a house spider?", a: "Never handle spiders directly, especially unidentified species. Use proper tools or call professionals." },
                { q: "Should I call an exterminator for spiders?", a: "Yes for venomous species, recurring problems, or large infestations. Professionals ensure safe, complete elimination." },
                { q: "How do exterminators get rid of spiders?", a: "Through comprehensive inspection, targeted chemical treatments, web removal, and creating protective barriers." },
                { q: "Can you permanently get rid of spiders?", a: "With ongoing maintenance treatments and proper exclusion, you can maintain a spider-free environment long-term." },
                { q: "How to get rid of house spiders?", a: "Remove webs, seal entry points, reduce clutter, control humidity, and schedule professional treatments." },
                { q: "Can you call someone to remove a spider?", a: "Yes! Pest control professionals can safely remove and treat for spiders, especially dangerous species." }
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
                { name: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
                { name: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
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
              Serving Fairview Zip Codes: {zipCodes}
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
              This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </section>
      
      <FloatingCallButton phone={rawPhone} />
    </div>
  );
};

export default Index;
