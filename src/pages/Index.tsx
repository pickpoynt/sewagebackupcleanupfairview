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
        <title>brown recluse pest control nashville | Nashville Brown Recluse Pest Control Pros</title>
        <meta name="description" content="Professional brown recluse pest control nashville. Expert spider extermination, infestation removal, and prevention. Call (323) 880-1224 for a free estimate in Nashville, TN." />
        <meta name="keywords" content="brown recluse pest control nashville, Nashville spider extermination, brown recluse removal Nashville, pest control Tennessee, spider infestation Nashville" />
        <link rel="canonical" href="https://brownreclusepestcontrolnashville.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nashville Brown Recluse Pest Control Pros",
            "image": "/4.jpeg",
            "@id": "https://brownreclusepestcontrolnashville.vercel.app/",
            "url": "https://brownreclusepestcontrolnashville.vercel.app/",
            "telephone": "(323) 880-1224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nashville, TN",
              "addressLocality": "Nashville",
              "addressRegion": "TN",
              "postalCode": "37201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1627",
              "longitude": "-86.7816"
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
            "serviceType": "Brown Recluse Pest Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nashville Brown Recluse Pest Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nashville, TN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spider Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brown Recluse Extermination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spider Inspection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pest Prevention" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole House Spraying" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="brown recluse pest control nashville | Nashville Brown Recluse Pest Control Pros" />
        <meta property="og:description" content="Expert brown recluse pest control in Nashville, TN. Professional spider extermination and long-term prevention. Call (323) 880-1224!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brownreclusepestcontrolnashville.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              BROWN RECLUSE PEST CONTROL <br />
              <span className="text-white drop-shadow-sm uppercase">in NASHVILLE TN</span>
            </>
          }
          subtitle="Nashville's designated specialists in professional brown recluse spider extermination and infestation prevention. From downtown Nashville to the surrounding Tennessee areas, we protect your home with advanced pest control technology."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="NASHVILLE BROWN RECLUSE PROS"
          phone="(323) 880-1224"
          features={[
            { icon: ShieldCheck, text: "Expert Spider Control" },
            { icon: Zap, text: "Rapid Removal" },
            { icon: Droplets, text: "Safe & Effective Sprays" }
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
              <a href="https://pestcontrolbatonrouge.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">How much is an exterminator for brown recluse spiders?</a>
              <a href="https://trenchlesssewerrepairscottsdaleaz.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Can exterminators get rid of brown recluse spiders?</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Should I call an exterminator if I see one brown recluse?</a>
              <a href="https://toxicblackmoldcleanupgulfbreeze.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Are brown recluse spiders in Nashville, Tennessee?</a>
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
