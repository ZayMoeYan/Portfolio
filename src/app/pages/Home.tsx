import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Award, Users, Clock, ImageDownIcon, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ReviewsCarousel } from "../components/ReviewsCarousel";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useEffect, useState } from "react";
import { useCMS } from "../../hooks/useCMS";
import { supabase } from "../../lib/supabase";
import data from '../../data/certificates.json';
import { ImageWithFallback } from "../components/imageFallBack/ImageWithFallback";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Home() {
  const { data: homeData } = useCMS("home");
  const { data: servicesData } = useCMS("services");
  const { data: reviewsData } = useCMS("reviews");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<{ imageUrl: string; title: string } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await supabase.from("contact_inquiries").insert({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    setSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#0046FF]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#0046FF]">
                {homeData.hero.badge}
              </p>
              <h1 className="mb-6 text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
                {homeData.hero.title}
              </h1>
              <p className="mb-6 max-w-xl text-lg leading-relaxed text-black/75 sm:text-xl">
                {homeData.hero.subtitle}
              </p>
             
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="rounded-full px-8 py-6 text-base shadow-[0_14px_30px_rgba(0,70,255,0.24)] transition-all duration-300 hover:-translate-y-0.5">
                    {homeData.hero.cta_primary}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base transition-all duration-300 hover:-translate-y-0.5">
                    {homeData.hero.cta_secondary}
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-black/60">
                {homeData.hero.trust_badges.map((badge, i) => (
                  <span key={i} className="rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">{badge}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                <img
                  src={homeData.hero.image || "https://i.pinimg.com/736x/7d/be/c0/7dbec043a172b1706712bcebb5cb816e.jpg"}
                  alt={homeData.hero.title}
                  className="h-[520px] w-full rounded-[1.5rem] object-cover sm:h-[620px]"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-black/85 p-4 text-white backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#0046FF]">Private consultation</p>
                  <p className="mt-1 text-lg font-medium">Discreet, precise, and tailored surgical planning</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Award className="mb-3 text-[#0046FF]" size={32} />
              <p className="mb-2 text-3xl font-semibold tracking-tight text-black">15+</p>
              <p className="text-black/65">Years Experience</p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Users className="mb-3 text-[#0046FF]" size={32} />
              <p className="mb-2 text-3xl font-semibold tracking-tight text-black">5000+</p>
              <p className="text-black/65">Satisfied Patients</p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Clock className="mb-3 text-[#0046FF]" size={32} />
              <p className="mb-2 text-3xl font-semibold tracking-tight text-black">98%</p>
              <p className="text-black/65">Customer Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-white">
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
                className="h-[500px] w-full rounded-[2rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">About the practice</p>
              <h2 className="mb-6 text-3xl tracking-tight text-black sm:text-4xl">
                Excellence in Plastic Surgery
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-black/70">
                With over 15 years of experience and advanced training from world-renowned institutions, 
                Dr. Alex Morrison combines surgical precision with artistic vision to deliver exceptional, 
                natural-looking results.
              </p>
              <p className="mb-8 max-w-2xl leading-relaxed text-black/70">
                Specializing in both aesthetic and reconstructive procedures, Dr. Morrison has helped 
                thousands of patients achieve their aesthetic goals while maintaining the highest standards 
                of safety and care.
              </p>
              <Link to="/about">
                <Button className="rounded-full transition-all duration-300 hover:-translate-y-0.5">
                  Learn More About Dr. Morrison
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">What we offer</p>
            <h2 className="mb-4 text-3xl tracking-tight text-black sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-black/75">
              Comprehensive plastic surgery solutions tailored to your unique needs and aesthetic goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicesData.services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border border-white/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="mb-4 h-1 w-16 rounded-full bg-[#0046FF]" />
                  <div className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-[#0046FF]">{service.category}</div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-black">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-black/70">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-flex items-center text-sm text-[#0046FF] transition-colors hover:text-black">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="rounded-full transition-all duration-300 hover:-translate-y-0.5">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Certificates</p>
            <h2 className="mb-4 text-3xl tracking-tight text-black sm:text-4xl">
              Certificates
            </h2>
            <p className="mx-auto max-w-2xl text-black/70">
              Dr. Thurain Moe Myint Win's commitment to excellence is reflected in his extensive certifications and affiliations with leading medical organizations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.certificates.map((cert: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                onClick={() =>
                  setSelectedCertificate({
                    imageUrl: cert.image_url,
                    title: `Certificate ${index + 1}`,
                  })
                }
              >
                <ImageWithFallback
                  src={cert.image_url}
                  className="w-full h-55 rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-4 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md">
                    <ImageDownIcon size={16} />
                    View Image
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >
          <button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={selectedCertificate.imageUrl}
              className="max-h-[82vh] w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-center text-sm font-medium tracking-wide text-white sm:text-base">
              {selectedCertificate.title}
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <section className="py-24 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Real patient feedback</p>
            <h2 className="mb-4 text-3xl tracking-tight text-black sm:text-4xl">
              Patient Reviews
            </h2>
            <p className="mx-auto max-w-2xl text-black/70">
              Read what our patients have to say about their experience.
            </p>
          </motion.div>

          <ReviewsCarousel reviews={reviewsData.reviews} />

          <div className="text-center mt-20">
            <Link to="/reviews">
              <Button variant="outline" className="rounded-full transition-all duration-300 hover:-translate-y-0.5">
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Start the conversation</p>
            <h2 className="mb-4 text-3xl tracking-tight text-black sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-black/70">
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
                className=""
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className=""
              />
            </div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className=""
            />
            {submitSuccess && (
              <p className="rounded-lg bg-green-50 py-3 text-center text-sm font-medium text-green-700">
                Thank you! We'll be in touch shortly.
              </p>
            )}
            <div className="text-center">
              <Button type="submit" disabled={submitting} className="rounded-full px-8 transition-all duration-300 hover:-translate-y-0.5">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
