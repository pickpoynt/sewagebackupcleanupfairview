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
import { ShieldCheck, Bug, Zap, Activity, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>No Tent Termite Treatment Brooksville FL (323) 880-1224 | Brooksville No Tent Termite Treatment Pros</title>
        <meta name="description" content="Professional No Tent Termite Treatment Brooksville FL. Call (323) 880-1224. Expert termite control and non-tenting solutions in Brooksville, FL. Safe, effective, and hassle-free termite removal." />
        <meta name="keywords" content="No Tent Termite Treatment Brooksville FL, termite control brooksville fl, non-tenting termite treatment, drywood termite treatment brooksville, local termite exterminator" />
        <link rel="canonical" href="https://notenttermitetreatmentbrooksvillefl.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brooksville No Tent Termite Treatment Pros",
            "image": "/2.jpeg",
            "@id": "https://notenttermitetreatmentbrooksvillefl.vercel.app/",
            "url": "https://notenttermitetreatmentbrooksvillefl.vercel.app/",
            "telephone": "(323) 880-1224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Brooksville",
              "addressRegion": "FL",
              "postalCode": "34601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5553",
              "longitude": "-82.3879"
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
            "serviceType": "No Tent Termite Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Brooksville No Tent Termite Treatment Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Brooksville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Termite Treatment Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "No-Tent Drywood Termite Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Subterranean Termite Control" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Termite Inspections" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Termite Removal" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="No Tent Termite Treatment Brooksville FL (323) 880-1224 | Brooksville No Tent Termite Treatment Pros" />
        <meta property="og:description" content="Expert termite treatment in Brooksville, FL. Professional non-tenting solutions and termite control. Call (323) 880-1224!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notenttermitetreatmentbrooksvillefl.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={<>Advanced <br /><span className="text-indigo-600">No Tent Termite Treatment Brooksville FL</span></>}
          subtitle="Brooksville's most trusted termite specialists. We provide eco-friendly, non-tenting solutions that protect your home without the need for fumigation. Available 24/7 for all your pest emergencies."
          badge="BROOKSVILLE TERMITE PROS"
          phone="3238801224"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: ShieldCheck, text: "No-Tent Guarantee" },
            { icon: Bug, text: "Precision Termite Targeting" },
            { icon: Home, text: "Full Home Protection" }
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
              <a href="https://chipmunkremovalbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Chipmunk Removal Brooksville FL</a>
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
