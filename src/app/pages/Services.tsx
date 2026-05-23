import { useState } from "react";
import { motion } from "motion/react";
import { services } from "../data/content";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Clock, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Facial Surgery", "Body Contouring", "Reconstructive Surgery", "Advanced / Rare Cases"];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(s => s.category === selectedCategory);

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
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Our expertise</p>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-black mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-black/70">
              Comprehensive plastic surgery solutions tailored to your unique needs and aesthetic goals.
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
                className={
                  "rounded-full px-5"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="mb-5 h-1 w-16 rounded-full bg-[#0046FF]" />
                  <div className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#0046FF]">{service.category}</div>
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight text-black">{service.title}</h2>
                  
                  <p className="mb-4 leading-relaxed text-black/70">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="mt-1 flex-shrink-0 text-[#0046FF]" size={20} />
                      <div>
                        <p className="mb-1 text-sm font-medium text-black">Procedure Details</p>
                        <p className="text-sm leading-relaxed text-black/70">{service.details}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 flex-shrink-0 text-[#0046FF]" size={20} />
                      <div>
                        <p className="mb-1 text-sm font-medium text-black">Recovery Time</p>
                        <p className="text-sm text-black/70">{service.recovery}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertCircle className="mt-1 flex-shrink-0 text-[#0046FF]" size={20} />
                      <div>
                        <p className="mb-1 text-sm font-medium text-black">Potential Risks</p>
                        <p className="text-sm leading-relaxed text-black/70">{service.risks}</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full rounded-full transition-all duration-300 hover:-translate-y-0.5">
                      Schedule Consultation
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Ready when you are</p>
            <h2 className="text-3xl tracking-tight text-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 leading-relaxed text-black/75">
              Schedule a consultation to discuss your goals and learn more about our procedures.
            </p>
            <Link to="/contact">
              <Button className="rounded-full px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-0.5">
                Book Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
