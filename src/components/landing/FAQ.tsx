import { Bug, Phone, HelpCircle, Zap } from "lucide-react";

const faqs = [
  {
    question: "How much does an exterminator cost to remove a wasp nest?",
    answer: "Costs typically range from $150 to $500 depending on the size and accessibility of the nest. In Kaysville, specialized technical extractions for large or high-altitude nests may require custom equipment and protocols."
  },
  {
    question: "What kills wasp nests instantly?",
    answer: "Professional-grade knockdown aerosols containing pyrethroids or carbamates are used for instant immobilization and neutralization of active wasp colonies."
  },
  {
    question: "How much does Terminix charge to remove a wasp nest?",
    answer: "Larger national chains often have standardized pricing starting around $200-$300, but local Kaysville specialists often provide more tailored and rapid emergency dispatch services."
  },
  {
    question: "What is the best month to get rid of a wasp nest?",
    answer: "Early spring, typically April or May, is the optimal time for intervention as queens are just starting colonies. Early removal prevents massive summer infestations."
  },
  {
    question: "How to get rid of wasp nest for free?",
    answer: "While DIY methods exist, they are extremely dangerous. We recommend professional technical inspection to avoid severe stinging incidents and medical emergencies."
  },
  {
    question: "What does WD-40 do to wasps?",
    answer: "WD-40 can kill wasps on contact by suffocating them, but it is not a professional-grade insecticide and should not be used for significant nest neutralisation."
  },
  {
    question: "Will wasps come back if you destroy their nest?",
    answer: "Individual wasps may return to the site for a few days. Professional extraction includes pheromone neutralization to ensure the site is not identified for future nesting."
  },
  {
    question: "What do wasps absolutely hate?",
    answer: "Wasps are repelled by specific volatile oils like peppermint and technical-grade repellent applications used in our perimeter defense protocols."
  },
  {
    question: "How to get rid of massive wasp nest?",
    answer: "Massive nests require high-pressure chemical intervention and full-suit tactical extraction to ensure safety and total colony elimination."
  },
  {
    question: "What happens if you don't get rid of a wasp nest?",
    answer: "The colony will expand rapidly throughout the summer, increasing the risk of structural damage and multiple-sting incidents for residents and pets."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Aggressive stinging insects like Bald-faced hornets and subterranean yellow jackets are among the most technically difficult and dangerous pests to remove without professional gear."
  },
  {
    question: "Who is cheaper, Terminix or Orkin?",
    answer: "Prices vary, but our Kaysville-specific technical units prioritize rapid dispatch and technical efficacy over national corporate pricing structures."
  },
  {
    question: "What happens if you block the entrance to a wasp's nest?",
    answer: "Never block the entrance. Wasps will chew through drywall or other structural materials to find a new exit, often leading them directly inside your home."
  },
  {
    question: "How long will wasps stay in a nest?",
    answer: "Most colonies in Kaysville remain active from late spring until the first hard freeze in late autumn, when the workers eventually die off."
  },
  {
    question: "What smell do wasps hate?",
    answer: "Wasps have a sensitive olfactory system and are repelled by peppermint, eucalyptus, and professional-grade deterrent chemicals used in our sealing process."
  },
  {
    question: "What month are wasps most aggressive?",
    answer: "Wasps are most aggressive in late August and September as the colony reaches maximum size and food sources become scarce."
  },
  {
    question: "Should you leave old wasp nests up?",
    answer: "While most wasps don't reuse old nests, the physical structure can attract other pests. Professional removal and sanitization of the site are recommended."
  },
  {
    question: "Will wasps come out if I spray their nest at night?",
    answer: "Wasps are less active at night, but they will still defend the nest aggressively if disturbed. Night-time technical extraction is often preferred for safety."
  },
  {
    question: "Will wasps return to a nest next year?",
    answer: "No, they typically build a new nest each year, but if the site is favorable, a new queen may choose the same location unless deterrents are applied."
  },
  {
    question: "What happens if you knock a wasp nest down?",
    answer: "Knocking down an active nest will trigger an immediate and highly aggressive swarm. This should never be attempted without professional-grade protective gear."
  },
  {
    question: "What month do wasps go away?",
    answer: "In the Kaysville area, wasp activity usually ceases after several hard freezes, typically in late October or November."
  },
  {
    question: "What happens if I don't remove a wasp nest?",
    answer: "The risk of accidental disturbance increases as the nest grows, and the site becomes a beacon for future nesting queens the following season."
  },
  {
    question: "Do wasps stay in nest over winter?",
    answer: "No, worker wasps die. Only young mated queens survive the winter by hibernating in protected locations, usually away from the old nest."
  },
  {
    question: "Do wasps return to a sprayed nest?",
    answer: "Active wasps will die, and scouting wasps will be repelled by the residual chemicals. Professional service includes removing the physical remains to discourage other pests."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 mb-6 uppercase tracking-[0.2em] text-[10px] font-bold uppercase">
            <Zap className="w-4 h-4" />
            PEOPLE ALSO ASK
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            NESTS <span className="text-indigo-500">INTEL HUB</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-12"></div>
          <p className="text-slate-400 text-lg italic font-medium">
            Technical data and strategic answers for Kaysville residents facing stinging insect crises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all group"
            >
              <h3 className="text-indigo-400 font-black text-[13px] uppercase tracking-[0.1em] mb-4 group-hover:text-indigo-300 transition-colors">
                {faq.question}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-medium italic">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="p-10 bg-indigo-600 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-900/40 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Need Wasp Removal?</h4>
            <p className="text-indigo-100 mb-8 font-bold italic">24/7 Kaysville Technical Dispatch Units Standing By</p>
            <a href="tel:3238801224" className="inline-flex items-center gap-4 bg-white text-indigo-600 px-10 h-16 rounded-2xl font-black transition-all hover:scale-105 shadow-xl">
              <Phone className="w-6 h-6" />
              <span className="text-xl">(323) 880-1224</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
