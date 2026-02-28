import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PlumbingInfo from "@/components/landing/PlumbingInfo";
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
        <title>plumber montello wi | Montello Plumbing Pros</title>
        <meta name="description" content="Professional plumber montello wi. Expert plumbing repairs, drain cleaning, and water heater services. Call 8777921410 for a free estimate in Montello, WI." />
        <meta name="keywords" content="plumber montello wi, Montello plumbing, emergency plumber Montello WI, drain cleaning Montello, water heater repair Montello" />
        <link rel="canonical" href="https://plumbermontellowi.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montello Plumbing Pros",
            "image": "/3.jpeg",
            "@id": "https://plumbermontellowi.vercel.app/",
            "url": "https://plumbermontellowi.vercel.app/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "100 Church St",
              "addressLocality": "Montello",
              "addressRegion": "WI",
              "postalCode": "53949",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.7919",
              "longitude": "-89.3297"
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
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montello Plumbing Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Montello, WI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Repairs" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frozen Pipe Repair" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="plumber montello wi | Montello Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in Montello, WI. Professional repairs, drain cleaning, and water heater services for Marquette County homes. Call 8777921410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumbermontellowi.vercel.app/" />
        <meta property="og:image" content="/3.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              PLUMBER <br />
              <span className="text-white drop-shadow-sm uppercase">in MONTELLO WI</span>
            </>
          }
          subtitle="Montello's designated specialists in professional plumbing and emergency repairs. From the banks of the Fox River to the historic granite quarry town, we protect your property from leaks, blockages, and winter freeze damage with expert precision."
          image="/3.jpeg"
          overlayImage="/4.jpeg"
          badge="MONTELLO PLUMBING PROS"
          phone="8777921410"
          features={[
            { icon: ShieldCheck, text: "Licensed & Insured" },
            { icon: Zap, text: "Rapid Response" },
            { icon: Droplets, text: "Advanced Leak Detection" }
          ]}
        />
        <Services />
        <WhyUs />
        <PlumbingInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Leaking Pipe Repair Modesto</a>
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Wildlife Removal Gastonia NC</a>
              <a href="https://toxicblackmoldcleanupgulfbreeze.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Toxic Black Mold Cleanup Gulf Breeze</a>
              <a href="https://pestcontrolbatonrouge.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest Control Baton Rouge</a>
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
