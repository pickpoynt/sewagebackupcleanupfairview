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
import { ShieldCheck, Zap, Droplets, Target, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>slab leak detection specialist boonton (877) 792-1410 | Boonton Slab Leak Detection Pros</title>
        <meta name="description" content="Professional slab leak detection specialist boonton. (877) 792-1410. Expert thermal imaging, acoustic detection, and precision slab leak repair in Boonton, NJ." />
        <meta name="keywords" content="slab leak detection specialist boonton, boonton NJ slab leak repair, water leak detection Boonton, concrete slab leak Boonton, foundation leak repair Boonton NJ" />
        <link rel="canonical" href="https://slableakdetectionspecialistboonton.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Boonton Slab Leak Detection Pros",
            "image": "/4.jpeg",
            "@id": "https://slableakdetectionspecialistboonton.vercel.app/",
            "url": "https://slableakdetectionspecialistboonton.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Boonton, NJ",
              "addressLocality": "Boonton",
              "addressRegion": "NJ",
              "postalCode": "07005",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.9032",
              "longitude": "-74.4074"
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
            "serviceType": "Slab Leak Detection and Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Boonton Slab Leak Detection Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Boonton, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leak Detection Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acoustic Leak Detection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermal Imaging Leak Detection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Slab Leak Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foundation Water Leak Detection" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="slab leak detection specialist boonton (877) 792-1410 | Boonton Slab Leak Detection Pros" />
        <meta property="og:description" content="Expert slab leak detection in Boonton, NJ. Professional thermal imaging and acoustic detection. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slableakdetectionspecialistboonton.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              SLAB LEAK DETECTION <br />
              <span className="text-white drop-shadow-sm uppercase">in BOONTON NJ</span>
            </>
          }
          subtitle="Boonton's premier specialists in precision slab leak detection and non-invasive repair. Using advanced acoustic technology and thermal imaging, we locate underground water leaks with surgical accuracy to protect your Boonton home's foundation."
          image="/4.jpeg"
          overlayImage="/2.jpeg"
          badge="BOONTON SLAB LEAK EXPERTS"
          phone="8777921410"
          features={[
            { icon: Search, text: "Acoustic Detection" },
            { icon: Target, text: "Precision Locating" },
            { icon: ShieldCheck, text: "Non-Invasive Repair" }
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
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pipe leak repair cost in Modesto</a>
              <a href="https://castironpipereplacementboonton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Boonton cast iron pipe replacement</a>
              <a href="https://trenchlesssewerrepairscottsdaleaz.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Sewer repair options in Scottsdale AZ</a>
              <a href="https://waterheaterrepairbeaverton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Water heater repair Beaverton OR</a>
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
