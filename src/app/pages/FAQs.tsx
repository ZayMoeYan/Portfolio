import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { faqs } from "../data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";

export function FAQs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Surgery", "Recovery", "Pricing"];

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#0046FF]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Support and clarity</p>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-black/70">
              Find answers to common questions about plastic surgery, procedures, and recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 border-b border-black/10 bg-white/95 py-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full px-5"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-3xl"
                  >
                    <AccordionTrigger className="text-left text-black transition-colors hover:text-[#0046FF]">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <span className="text-sm font-medium uppercase tracking-[0.14em] text-[#0046FF]">{faq.category}</span>
                        <span className="text-base">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-black/70 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-black/60">No FAQs found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/10 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Need personal guidance</p>
            <h2 className="text-3xl tracking-tight text-black mb-6">
              Still Have Questions?
            </h2>
            <p className="mb-8 leading-relaxed text-black/75">
              Our team is here to help. Schedule a consultation to discuss your specific concerns and goals.
            </p>
            <Link to="/contact">
              <Button className="rounded-full px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-0.5">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}