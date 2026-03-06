import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "Can you treat for termites without tenting?",
    answer: "Yes, non-tenting treatments are highly effective for many termite infestations. We use specialized liquid localized treatments and orange oil-based solutions that target termites directly without requiring you to move out of your home."
  },
  {
    question: "What is the average cost to tent a house for termites in Florida?",
    answer: "The average cost for termite tenting in Florida typically ranges from $1,200 to $3,500, depending on the square footage of the home and the severity of the infestation. No-tent treatments are often a more cost-effective alternative."
  },
  {
    question: "Can I treat drywood termites myself?",
    answer: "DIY termite treatment is rarely successful because drywood termites live deep inside wood structures. Professional equipment and specialized termiticides are required to ensure the entire colony is eliminated."
  },
  {
    question: "How much does Terminix charge to tent a house?",
    answer: "Major national brands like Terminix often charge based on the linear footage and volume of the home. Prices typically start around $1,500 and can go much higher for larger properties."
  },
  {
    question: "What is the alternative to tenting a house for termites?",
    answer: "Alternatives include localized chemical spot treatments, orange oil treatments, heat treatments, and baiting systems. Our no-tent approach uses advanced liquid termiticides that penetrate wood and eliminate colonies from within."
  },
  {
    question: "Is tenting or non-tenting better?",
    answer: "Tenting is exhaustive for the entire structure but inconvenient. Non-tenting is better for localized infestations, allows you to stay in your home, and is often much more eco-friendly and safe for family and pets."
  },
  {
    question: "How many years does termite tenting last?",
    answer: "Tenting only kills the termites currently in the house; it offers no residual protection. Once the gas dissipates, termites can return immediately. Preventive treatments are necessary for long-term protection."
  },
  {
    question: "How much does Orkin charge for termite treatment?",
    answer: "Orkin's pricing is customized for each home, typically starting at $1,000 for basic treatments and increasing significantly for full structural fumigation."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Termites and bedbugs are widely considered the hardest pests to exterminate because they hide deep within structural elements or fabrics and reproduce rapidly."
  },
  {
    question: "What is a termite's worst enemy?",
    answer: "In nature, ants are the primary enemy of termites. In residential pest control, professional termiticides like Termidor and Sentricon baiting systems are their biggest threats."
  },
  {
    question: "Do termites come back after tenting?",
    answer: "Yes, termites can re-infest a home within weeks of tenting if no preventative barriers or soil treatments are maintained, as tenting provides zero residual protection."
  },
  {
    question: "What is the biggest enemy of termites?",
    answer: "The biggest enemy is professional intervention. Liquid termiticides that use a 'transfer effect' allow termites to unknowingly carry the poison back to the queen, destroying the entire colony."
  },
  {
    question: "Can you get rid of drywood termites without tenting?",
    answer: "Absolutely. We specialize in precision injections and wood surface treatments that kill drywood termites on contact and provide lasting residual protection."
  },
  {
    question: "How serious is a drywood termite infestation?",
    answer: "A drywood termite infestation is very serious because it can compromise the structural integrity of your home's framing, flooring, and support beams over time."
  },
  {
    question: "What attracts drywood termites to a home?",
    answer: "Drywood termites are attracted to exposed wood, moisture, and lights. They often enter homes through attic vents or cracks in window frames during swarming season."
  },
  {
    question: "What is the alternative to fumigation for termites?",
    answer: "Localized spot treatments, borate treatments, and orange oil are the primary alternatives. These methods focus on elite-grade chemical targeting rather than gassing the entire structure."
  },
  {
    question: "What do termites hate the most?",
    answer: "Termites hate sunlight, lack of moisture, and the smell of cedarwood and orange oil. They are also highly sensitive to the chemicals found in professional-grade termiticides."
  },
  {
    question: "Can a termite-infested house be saved?",
    answer: "Yes, almost any termite-infested house can be saved if the damage is caught early enough. We can eliminate the infestation and recommend structural repairs to restore the home's integrity."
  },
  {
    question: "How much does sentricon cost per year?",
    answer: "Sentricon systems typically cost between $250 and $500 per year for monitoring and maintenance, following an initial installation fee."
  },
  {
    question: "Does tentless termite treatment work?",
    answer: "Yes, tentless treatment is highly effective when used correctly. It relies on the precision of the technician to identify and treat all active galleries with professional-grade chemicals."
  },
  {
    question: "Do you have to wash your clothes after your house is tented for termites?",
    answer: "While the gas used in tenting is designed to leave no residue, most professionals recommend washing clothes and bedding as a precaution to remove any potential dust or odors."
  },
  {
    question: "Are drywood termites hard to get rid of?",
    answer: "They are more challenging than subterranean termites because they live entirely within wood. However, with our advanced no-tent techniques, we can eliminate them with high success rates."
  },
  {
    question: "How to get rid of drywood termites naturally in house?",
    answer: "Natural methods like orange oil (D-limonene) and borate salts are effective for localized areas. Exposure to sunlight and extreme temperatures can also kill them, though these are hard to apply to an entire house."
  },
  {
    question: "What kills termites immediately?",
    answer: "Direct contact with professional-grade pesticides, heat treatments (above 120°F), and certain botanical extracts like orange oil kill termites almost instantly on contact."
  },
  {
    question: "Do drywood termites come back after tenting?",
    answer: "Yes, because tenting gas has no residual life. Preventative wood treatments are the only way to ensure they do not return after an initial extermination."
  },
  {
    question: "What is the safest termite treatment?",
    answer: "Non-toxic baiting systems and borate-based wood treatments are generally considered the safest for residents, as they have low mammalian toxicity and are environmentally targeted."
  },
  {
    question: "What is the hardest pest to exterminate?",
    answer: "Drywood termites rank at the top of the list along with bedbugs and certain species of cockroaches due to their ability to hide and survive in inaccessible areas."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="grid lg:grid-cols-2 gap-16 items-start text-nowrap">

          <div className="text-nowrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold text-nowrap">
              <HelpCircle className="w-4 h-4" />
              Expert Knowledge Base
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight text-nowrap uppercase">
              Termite <span className="text-indigo-600">Intelligence</span> <br />
              & Local Expert FAQ
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium text-nowrap">
              We believe in transparency and empowering Brooksville <br /> residents with the knowledge they need to make <br /> informed decisions about their home's protection.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-nowrap">
              <div className="flex items-center gap-4 mb-6 text-nowrap">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Have more questions?</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Our Brooksville techs are ready</p>
                </div>
              </div>
              <a href="tel:3238801224" className="text-3xl font-black text-indigo-600 block mb-8 hover:opacity-80 transition-opacity text-nowrap uppercase">(323) 880-1224</a>
              <Button className="w-full bg-slate-900 hover:bg-indigo-600 text-white h-14 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all text-nowrap" asChild>
                <a href="tel:3238801224">Ask a Specialist</a>
              </Button>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-slate-50 rounded-3xl px-8 transition-all hover:bg-indigo-50/50 data-[state=open]:bg-indigo-50 data-[state=open]:shadow-xl data-[state=open]:shadow-indigo-900/5"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-left text-slate-900 font-bold text-lg uppercase tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-6 font-medium italic">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
