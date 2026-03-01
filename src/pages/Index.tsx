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
import { ShieldCheck, Zap, Droplets } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>water heater repair beaverton | Beaverton Water Heater Repair Pros</title>
        <meta name="description" content="Professional water heater repair beaverton. Expert tank & tankless water heater repair, replacement, and maintenance. Call (877) 792-1410 for a free estimate in Beaverton, OR." />
        <meta name="keywords" content="water heater repair beaverton, beaverton water heater replacement, tankless water heater beaverton, hot water heater repair beaverton OR, water heater maintenance beaverton" />
        <link rel="canonical" href="https://waterheaterrepairbeaverton.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Beaverton Water Heater Repair Pros",
            "image": "/4.jpeg",
            "@id": "https://waterheaterrepairbeaverton.vercel.app/",
            "url": "https://waterheaterrepairbeaverton.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Beaverton, OR",
              "addressLocality": "Beaverton",
              "addressRegion": "OR",
              "postalCode": "97005",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.4871",
              "longitude": "-122.8037"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Water Heater Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Beaverton Water Heater Repair Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Beaverton, OR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Heater Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tankless Water Heater Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Maintenance" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="water heater repair beaverton | Beaverton Water Heater Repair Pros" />
        <meta property="og:description" content="Expert water heater repair in Beaverton, OR. Professional tank & tankless water heater services. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://waterheaterrepairbeaverton.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              WATER HEATER REPAIR <br />
              <span className="text-white drop-shadow-sm uppercase">in BEAVERTON OR</span>
            </>
          }
          subtitle="Beaverton's trusted specialists in professional water heater repair, replacement, and maintenance. From downtown Beaverton to the surrounding Washington County areas, we restore your hot water fast with advanced diagnostics and certified plumbing expertise."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="BEAVERTON WATER HEATER PROS"
          phone="8777921410"
          features={[
            { icon: ShieldCheck, text: "Certified Repair" },
            { icon: Zap, text: "Same-Day Service" },
            { icon: Droplets, text: "Tank & Tankless" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">How much does pipe leak repair cost in Modesto?</a>
              <a href="https://plumbermontellowi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Best plumber services in Montello WI</a>
              <a href="https://trenchlesssewerrepairscottsdaleaz.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Trenchless sewer repair options in Scottsdale AZ</a>
              <a href="https://moldremediationeauclairewi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Mold remediation specialists in Eau Claire WI</a>
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
