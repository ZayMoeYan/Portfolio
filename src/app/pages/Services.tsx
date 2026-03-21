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
              Our Services
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Comprehensive plastic surgery solutions tailored to your unique needs and aesthetic goals.
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

      {/* Services Grid */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8 hover:bg-[#415a77] transition-all duration-300 h-full">
                  <div className="text-sm text-[#778da9] mb-3">{service.category}</div>
                  <h2 className="text-2xl text-[#e0e1dd] mb-4">{service.title}</h2>
                  
                  <p className="text-[#778da9] mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="text-[#778da9] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-[#e0e1dd] text-sm mb-1">Procedure Details</p>
                        <p className="text-[#778da9] text-sm leading-relaxed">{service.details}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-[#778da9] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-[#e0e1dd] text-sm mb-1">Recovery Time</p>
                        <p className="text-[#778da9] text-sm">{service.recovery}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-[#778da9] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-[#e0e1dd] text-sm mb-1">Potential Risks</p>
                        <p className="text-[#778da9] text-sm leading-relaxed">{service.risks}</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-[#1b263b] hover:bg-[#778da9] text-[#e0e1dd] transition-all duration-300">
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
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-[#778da9] mb-8 leading-relaxed">
              Schedule a consultation to discuss your goals and learn more about our procedures.
            </p>
            <Link to="/contact">
              <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                Book Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
