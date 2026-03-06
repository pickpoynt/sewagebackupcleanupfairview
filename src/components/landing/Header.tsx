import { Phone, Menu, X, Bug, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-slate-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-indigo-500/20"
          : "bg-transparent py-5"
          }`}
      >
        {/* Mobile Sticky click-to-call Header (shown only on mobile) */}
        <div className="md:hidden absolute top-0 left-0 w-full bg-indigo-600 py-1 flex justify-center items-center gap-2">
          <Phone className="w-3 h-3 text-white animate-pulse" />
          <a href="tel:3238801224" className="text-[10px] font-black text-white uppercase tracking-widest text-nowrap">
            Brooksville 24/7 Hotline: (323) 880-1224
          </a>
        </div>

        <div className="container mx-auto px-4 mt-6 md:mt-0">
          <div className="flex items-center justify-between">
            {/* Branding */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40 group-hover:scale-110 transition-all">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <div className="text-nowrap">
                <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                  Brooksville <span className="text-indigo-400">Termite</span>
                </h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">No-Tent Treatment Pros</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Services", "Why Us", "Info", "Contact", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs font-bold text-slate-300 hover:text-indigo-400 uppercase tracking-widest transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Hotline & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right border-r border-white/10 pr-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">24/7 Brooksville Dispatch</p>
                <a href="tel:3238801224" className="text-xl font-black text-white hover:text-indigo-400 transition-colors text-nowrap">
                  (323) 880-1224
                </a>
              </div>
              <Button className="bg-white text-indigo-900 hover:bg-slate-100 font-bold uppercase tracking-widest text-xs px-8 h-12 rounded-xl shadow-xl shadow-white/5 active:scale-95 transition-all text-nowrap" asChild>
                <a href="tel:3238801224">Schedule Now</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
          }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <Bug className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-black text-white uppercase tracking-tighter">Brooksville Termite</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col gap-8 mb-16">
            {["Services", "Why Us", "Info", "Contact", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-4xl font-black text-white hover:text-indigo-500 transition-colors uppercase tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="p-8 bg-indigo-600 rounded-[2rem] text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Brooksville Hotline</p>
            <a href="tel:3238801224" className="text-3xl font-black block mb-6 text-nowrap">(323) 880-1224</a>
            <Button className="w-full bg-white text-indigo-600 h-14 rounded-2xl font-black uppercase tracking-widest shadow-xl text-nowrap">
              Express Dispatch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
