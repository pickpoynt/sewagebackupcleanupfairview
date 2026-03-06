import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bug, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much is it to hire an exterminator for wasps?",
    answer: "The cost for professional wasp removal typically ranges from $150 to $500 depending on the nest's location, size, and the species of wasp involved. High-altitude or structural nesting may increase the technical dispatch cost."
  },
  {
    question: "Are professional wasp removal services worth it?",
    answer: "Absolutely. Professionals possess the equipment and chemical protocols required to neutralize an entire colony in one visit, preventing multiple stings and recurring infestations that DIY methods often miss."
  },
  {
    question: "How do professionals get rid of wasp nests?",
    answer: "Technicians use high-pressure aerosol injections, residual dust treatments, or localized freezing agents to eliminate active wasps before physically removing the nest and treating the area to prevent pheromone-based returns."
  },
  {
    question: "Who do you call to get rid of wasp nest near me?",
    answer: "You should call a specialized emergency wasp removal service like Brooksville Wasp Pros at (323) 880-1224. General pest control may not offer the same 24/7 rapid response for stinging insects."
  },
  {
    question: "What does WD-40 do to wasps?",
    answer: "WD-40 can kill wasps on contact by clogging their breathing pores, but it is not a structural solution. It lacks residual control and can be flammable and messy on home surfaces."
  },
  {
    question: "Will wasps come back if you remove their nest?",
    answer: "If the nest is removed without professional residual treatment, wasps may attempt to rebuild in the same area due to lingering pheromones. We apply specialized barriers to ensure they don't return."
  },
  {
    question: "How do I permanently get rid of wasps?",
    answer: "Permanent control requires identifying all potential nesting sites and applying professional-grade repellent barriers. Maintaining a regular perimeter protocol is the most effective long-term solution."
  },
  {
    question: "When should I call an exterminator for wasps?",
    answer: "Call immediately if a nest is located near entry points, if you notice active wasps inside your living space, or if you suspect a nest is inside your walls or attic."
  },
  {
    question: "Can I remove a wasp nest myself?",
    answer: "It is not recommended. Wasps are highly aggressive when defending their colony. Without proper protective gear and technical knowledge, you risk severe allergic reactions and multiple stings."
  },
  {
    question: "Why is wasp removal so expensive?",
    answer: "The cost reflects the risk, specialized protective equipment, and industrial-grade chemicals required to safely and effectively eliminate a colony. Emergency response times also factor into the dispatch fee."
  },
  {
    question: "What is the best month to get rid of a wasp nest?",
    answer: "The best time is early spring (April/May) when the queen is just starting the colony. However, our emergency units provide effective removal regardless of the month or nest size."
  },
  {
    question: "How does an exterminator get rid of wasps?",
    answer: "Exterminators use a multi-phase technical protocol: identification of species, targeted chemical elimination, manual nest extraction, and finally, residual site treatment."
  },
  {
    question: "Where do wasps go at night if they don't have a nest?",
    answer: "Wasps without a nest will seek shelter in dense foliage, under eaves, or within structural gaps. They are generally less active at night, making it an ideal time for certain technical removal phases."
  },
  {
    question: "What do wasps absolutely hate?",
    answer: "Wasps are repelled by certain scents like peppermint, eucalyptus, and clove. They also avoid areas that have been treated with professional residual termiticides and repellents."
  },
  {
    question: "Do wasps return to the same nest every year?",
    answer: "Most species do not reuse old nests, but they are highly likely to return to the same general location if the area isn't professionally cleaned and deactivated of nesting pheromones."
  },
  {
    question: "What month will wasps go away?",
    answer: "In Brooksville, wasp activity typically declines in late autumn as temperatures drop and the colony workers die off, though queens search for overwintering spots during this time."
  },
  {
    question: "What is considered an infestation of wasps?",
    answer: "An infestation is defined by the presence of at least one active colony or frequent wasp sightings within or immediately adjacent to a structure."
  },
  {
    question: "What month are wasps most aggressive?",
    answer: "Wasps are most aggressive in late summer (August and September) as their food sources decline and they shift toward defending the colony's final productive cycle."
  },
  {
    question: "What time do wasps go to bed?",
    answer: "Wasps returning to the nest as the sun sets are usually settled by dusk and remain inactive until dawn, depending on ambient light and temperature."
  },
  {
    question: "Do wasps come back for revenge?",
    answer: "Wasps don't feel 'revenge,' but they release alarm pheromones when threatened that signals other nearby wasps to attack, which can feel like a coordinated retaliation."
  },
  {
    question: "What is the lifespan of a wasp?",
    answer: "Worker wasps typically live 12-22 days, while queens can live for up to a year, spending most of it in hibernation during the colder months."
  },
  {
    question: "How do you encourage wasps to leave?",
    answer: "Minimal infestations can be discouraged by removing food sources and using essential oil repellents, but active nests require professional mechanical removal for safety."
  },
  {
    question: "Will wasps sting you while you sleep?",
    answer: "Only if you inadvertently disturb a wasp that has entered your sleeping area. Wasps do not actively hunt humans for stinging while they sleep."
  },
  {
    question: "Are wasps out at 10pm?",
    answer: "Unless there is strong artificial light or it is exceptionally warm, wasps remain inside or on the surface of their nest at 10pm."
  },
  {
    question: "What is the hardest infestation to get rid of?",
    answer: "Stinging insect infestations within wall voids or attic insulation are the most technically challenging and require professional tracking and structural extraction."
  },
  {
    question: "How many wasps are generally in a nest?",
    answer: "A mature paper wasp nest may have 20-30 wasps, while a yellow jacket or hornet nest can house thousands of active colony members."
  },
  {
    question: "What kills wasps immediately?",
    answer: "Contact aerosols and professional-grade freezing agents are designed to neutralize a wasp instantly, preventing the release of alarm pheromones."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="max-w-3xl mx-auto text-center mb-16 text-nowrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-indigo-600 mb-6 uppercase tracking-[0.2em] text-[10px] font-bold">
            <HelpCircle className="w-4 h-4" />
            Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight text-nowrap">
            Wasp Removal <span className="text-indigo-600">Technical Briefing</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
            Critical infrastructure data for Brooksville residents regarding <br /> stinging insect elimination and perimeter security.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-nowrap text-nowrap">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-100 bg-slate-50 rounded-2xl px-6 data-[state=open]:border-indigo-200 data-[state=open]:shadow-xl data-[state=open]:shadow-indigo-900/5 transition-all">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6 uppercase tracking-tight text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 italic font-medium text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-slate-950 rounded-[2.5rem] border border-white/5 relative overflow-hidden text-nowrap">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-nowrap">
              <div className="text-nowrap text-nowrap">
                <h4 className="text-white text-xl font-black mb-2 uppercase tracking-tight">Need Immediate Extraction?</h4>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic text-nowrap">24/7 Brooksville Emergency Response Team</p>
              </div>
              <a href="tel:3238801224" className="flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-16 rounded-2xl transition-all shadow-xl shadow-indigo-900/40 text-nowrap">
                <Phone className="w-5 h-5 text-nowrap" />
                <span className="font-black text-lg text-nowrap">(323) 880-1224</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
