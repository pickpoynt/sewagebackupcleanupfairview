import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { Zap, ShieldCheck, Bug, Home } from "lucide-react";

const Index = () => {
  const primaryKeyword = "Emergency Wasp Removal Brooksville FL";
  const firmName = "Brooksville Emergency Wasp Removal Pros";
  const phoneNumber = "(323) 880-1224";
  const businessCords = { lat: 28.5553, lng: -82.3879 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} {phoneNumber} | {firmName}</title>
        <meta name="description" content="Fast, reliable emergency wasp and hornet nest removal in Brooksville, FL. Available 24/7 for immediate structural protection and family safety." />
        <meta name="keywords" content="emergency wasp removal brooksville fl, hornet nest removal, wasp exterminator, yellow jacket removal hernando county" />
        <link rel="canonical" href="https://emergencywaspremovalbrooksvillefl.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content={`${primaryKeyword} | ${firmName}`} />
        <meta property="og:description" content="Expert wasp and hornet removal services in Brooksville. Protect your family with our rapid response emergency units." />
        <meta property="og:url" content="https://emergencywaspremovalbrooksvillefl.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://emergencywaspremovalbrooksvillefl.vercel.app/2.jpeg",
            "@id": "https://emergencywaspremovalbrooksvillefl.vercel.app/",
            "url": "https://emergencywaspremovalbrooksvillefl.vercel.app/",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Brooksville",
              "addressLocality": "Brooksville",
              "addressRegion": "FL",
              "postalCode": "34601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": businessCords.lat,
              "longitude": businessCords.lng
            },
            "areaServed": "Brooksville, FL",
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
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Wasp Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Brooksville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wasp Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hornet Nest Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Yellow Jacket Elimination"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={<>Advanced <br /><span className="text-indigo-600">{primaryKeyword}</span></>}
          subtitle="Brooksville's leading wasp control specialists. We provide rapid-response, mechanical and chemical solutions that secure your property without delay. Available 24/7 for all stinging insect emergencies."
          badge="BROOKSVILLE WASP PROS"
          phone="3238801224"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: ShieldCheck, text: "Rapid Response Guarantee" },
            { icon: Bug, text: "Elite Nest Targeting" },
            { icon: Home, text: "Full Perimeter Safety" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4 text-nowrap">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://notenttermitetreatmentbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">No Tent Termite Treatment Brooksville FL</a>
              <a href="https://raccooncontrolsouthwestranches.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Raccoon Control Southwest Ranches</a>
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Wildlife Removal Gastonia NC</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Wildlife Removal Douglasville GA</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
