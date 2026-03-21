import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { services, blogs, reviews, caseHighlights } from "../data/content";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ReviewsCarousel } from "../components/ReviewsCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will contact you shortly!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#415a77] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#778da9] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#e0e1dd] mb-6 leading-tight">
                Dr. Alex Morrison
              </h1>
              <p className="text-xl sm:text-2xl text-[#778da9] mb-4">
                Board-Certified Plastic Surgeon
              </p>
              <p className="text-lg text-[#778da9] mb-8 max-w-xl">
                Precision. Aesthetics. Confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Book Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 px-8 py-6 text-lg transition-all duration-300">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczODk4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Alex Morrison"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
          >
            <div className="bg-[#1b263b]/80 backdrop-blur-sm rounded-xl p-6 border border-[#415a77]/30">
              <Award className="text-[#778da9] mb-3" size={32} />
              <p className="text-3xl text-[#e0e1dd] mb-2">15+</p>
              <p className="text-[#778da9]">Years Experience</p>
            </div>
            <div className="bg-[#1b263b]/80 backdrop-blur-sm rounded-xl p-6 border border-[#415a77]/30">
              <Users className="text-[#778da9] mb-3" size={32} />
              <p className="text-3xl text-[#e0e1dd] mb-2">5000+</p>
              <p className="text-[#778da9]">Satisfied Patients</p>
            </div>
            <div className="bg-[#1b263b]/80 backdrop-blur-sm rounded-xl p-6 border border-[#415a77]/30">
              <Clock className="text-[#778da9] mb-3" size={32} />
              <p className="text-3xl text-[#e0e1dd] mb-2">98%</p>
              <p className="text-[#778da9]">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzczODUwMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Dr. Morrison"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-6">
                Excellence in Plastic Surgery
              </h2>
              <p className="text-[#778da9] mb-6 leading-relaxed">
                With over 15 years of experience and advanced training from world-renowned institutions, 
                Dr. Alex Morrison combines surgical precision with artistic vision to deliver exceptional, 
                natural-looking results.
              </p>
              <p className="text-[#778da9] mb-8 leading-relaxed">
                Specializing in both aesthetic and reconstructive procedures, Dr. Morrison has helped 
                thousands of patients achieve their aesthetic goals while maintaining the highest standards 
                of safety and care.
              </p>
              <Link to="/about">
                <Button className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] transition-all duration-300 hover:scale-105">
                  Learn More About Dr. Morrison
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Our Services
            </h2>
            <p className="text-[#778da9] max-w-2xl mx-auto">
              Comprehensive plastic surgery solutions tailored to your unique needs and aesthetic goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 hover:bg-[#415a77] transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                  <div className="text-sm text-[#778da9] mb-2">{service.category}</div>
                  <h3 className="text-xl text-[#e0e1dd] mb-3">{service.title}</h3>
                  <p className="text-[#778da9] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-[#778da9] hover:text-[#e0e1dd] text-sm inline-flex items-center transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 transition-all duration-300">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Case Highlights
            </h2>
            <p className="text-[#778da9] max-w-2xl mx-auto">
              Successfully completed complex procedures with exceptional outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 hover:bg-[#415a77] transition-all duration-300 hover:scale-105 h-full">
                  <div className="aspect-video bg-[#1b263b] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-[#778da9] text-sm">Case Study</span>
                  </div>
                  <div className="text-sm text-[#778da9] mb-2">{highlight.category}</div>
                  <h3 className="text-lg text-[#e0e1dd] mb-2">{highlight.title}</h3>
                  <p className="text-[#778da9] text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Latest Insights
            </h2>
            <p className="text-[#778da9] max-w-2xl mx-auto">
              Expert advice and educational content about plastic surgery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blogs/${blog.id}`}>
                  <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 hover:bg-[#415a77] transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center gap-2 text-sm text-[#778da9] mb-3">
                      <span>{blog.category}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl text-[#e0e1dd] mb-3">{blog.title}</h3>
                    <p className="text-[#778da9] text-sm leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="text-[#778da9] hover:text-[#e0e1dd] text-sm inline-flex items-center transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blogs">
              <Button variant="outline" className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 transition-all duration-300">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Patient Reviews
            </h2>
            <p className="text-[#778da9] max-w-2xl mx-auto">
              Read what our patients have to say about their experience.
            </p>
          </motion.div>

          <ReviewsCarousel reviews={reviews} />

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 transition-all duration-300">
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#778da9]">
              Quick answers to common questions about plastic surgery.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#415a77]/30 border-[#778da9]/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-[#e0e1dd] hover:text-[#778da9] transition-colors">
                  {/* @ts-ignore */}
                  {window.faqs?.[index]?.question || "Loading..."}
                </AccordionTrigger>
                <AccordionContent className="text-[#778da9] leading-relaxed">
                  {/* @ts-ignore */}
                  {window.faqs?.[index]?.answer || ""}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link to="/faqs">
              <Button variant="outline" className="border-[#778da9] text-[#778da9] hover:bg-[#415a77]/20 transition-all duration-300">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-[#e0e1dd] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#778da9]">
              Have questions? Send us a message and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#0d1b2a] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#0d1b2a] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-[#0d1b2a] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
            />
            <div className="text-center">
              <Button type="submit" className="bg-[#415a77] hover:bg-[#778da9] text-[#e0e1dd] px-8 transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

// Make FAQs available for preview
if (typeof window !== "undefined") {
  // @ts-ignore
  window.faqs = [
    {
      question: "How do I know if I'm a good candidate for plastic surgery?",
      answer: "Good candidates are in good overall health, have realistic expectations, and are motivated to improve their appearance. During your consultation, we'll evaluate your medical history, discuss your goals, and determine if surgery is right for you.",
    },
    {
      question: "How long does surgery typically take?",
      answer: "Surgery duration varies by procedure. Simple procedures like eyelid surgery may take 1-2 hours, while more complex surgeries like a facelift or tummy tuck can take 3-5 hours.",
    },
    {
      question: "How long is the recovery period?",
      answer: "Recovery varies by procedure. Minor procedures may require only a few days off work, while major surgeries might need 2-3 weeks. We provide detailed recovery instructions and timeline expectations.",
    },
    {
      question: "When will I see my final results?",
      answer: "Initial results are visible once swelling subsides, usually within a few weeks. However, final results can take 6-12 months as tissues settle and scars mature.",
    },
  ];
}
