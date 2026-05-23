import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const aboutMe = {
    name: "Dr. Thurain Moe Myint Win",
    title: "Breast and reconstructive surgeon",
    phone: "+95 95055880",
    email: "thurain.moemyint1@gmail.com"
  }

  const locations = [
    {
      name: "Manhattan Office",
      address: "123 Park Avenue, Suite 500, New York, NY 10001",
      phone: "+1 (212) 555-0100",
      email: "manhattan@drmorrison.com",
    },
    {
      name: "Brooklyn Office",
      address: "456 Atlantic Avenue, Brooklyn, NY 11217",
      phone: "+1 (718) 555-0200",
      email: "brooklyn@drmorrison.com",
    },
  ];

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
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Book a consultation</p>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-black mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-black/70">
              Schedule a consultation or reach out with any questions. We're here to help you on your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            <div className="grid gap-8">
              {/* aboutMe card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border border-black/10 bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight text-black">Contact Dr. Thurain Moe Myint Win</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="mt-1 flex-shrink-0 text-[#0046FF]" size={20} />
                      <p className="text-black/70">{aboutMe.name}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="flex-shrink-0 text-[#0046FF]" size={20} />
                      <a href={`tel:${aboutMe.phone}`} className="text-black/70 transition-colors hover:text-[#0046FF]">
                        {aboutMe.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="flex-shrink-0 text-[#0046FF]" size={20} />
                      <a href={`mailto:${aboutMe.email}`} className="text-black/70 transition-colors hover:text-[#0046FF]">
                        {aboutMe.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border border-black/10 bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-semibold tracking-tight text-black">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-black">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className=""
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-black">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className=""
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-black">Phone *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className=""
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-black">Service Interest</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rhinoplasty">Rhinoplasty</SelectItem>
                          <SelectItem value="facelift">Facelift</SelectItem>
                          <SelectItem value="blepharoplasty">Blepharoplasty</SelectItem>
                          <SelectItem value="breast-augmentation">Breast Augmentation</SelectItem>
                          <SelectItem value="liposuction">Liposuction</SelectItem>
                          <SelectItem value="tummy-tuck">Tummy Tuck</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-black">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className=""
                        placeholder="Tell us about your goals and any questions you have..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="border border-black/10 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="mt-1 flex-shrink-0 text-[#0046FF]" size={24} />
                  <div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-black">Office Hours</h3>
                    <div className="space-y-2 text-black/70">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              {locations.map((location, index) => (
                <Card key={index} className="border border-black/10 bg-white p-8 shadow-sm">
                  <h3 className="mb-6 text-xl font-semibold tracking-tight text-black">{location.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 flex-shrink-0 text-[#0046FF]" size={20} />
                      <p className="text-black/70">{location.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="flex-shrink-0 text-[#0046FF]" size={20} />
                      <a href={`tel:${location.phone}`} className="text-black/70 transition-colors hover:text-[#0046FF]">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="flex-shrink-0 text-[#0046FF]" size={20} />
                      <a href={`mailto:${location.email}`} className="text-black/70 transition-colors hover:text-[#0046FF]">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Where to find us</p>
            <h2 className="text-3xl tracking-tight text-black mb-4">Visit Our Locations</h2>
            <p className="text-black/70">
              Find us at one of our convenient office locations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-black/10 bg-white shadow-sm">
                  <div className="aspect-video bg-black/[0.03] flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9857!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890`}
                      allowFullScreen
                      title={`Map of ${location.name}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">{location.name}</h3>
                    <p className="text-sm text-black/70">{location.address}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
