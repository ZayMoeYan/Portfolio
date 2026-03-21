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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl text-[#e0e1dd] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about plastic surgery, procedures, and recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#1b263b] sticky top-20 z-40 border-b border-[#415a77]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd]"
                    : "border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-[#0d1b2a]">
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
                    className="bg-[#415a77]/30 border-[#778da9]/20 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-[#e0e1dd] hover:text-[#778da9] transition-colors text-left">
                      <div>
                        <span className="text-sm text-[#778da9] mr-3">{faq.category}</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#778da9] leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#778da9] text-lg">No FAQs found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-[#778da9] mb-8 leading-relaxed">
              Our team is here to help. Schedule a consultation to discuss your specific concerns and goals.
            </p>
            <Link to="/contact">
              <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}