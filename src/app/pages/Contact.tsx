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
              Get in Touch
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation or reach out with any questions. We're here to help you on your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="grid gap-12" >
              {/* aboutMe card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
                  <h2 className="text-2xl text-[#e0e1dd] mb-6">Contact Dr. Thurain Moe Myint Win</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="text-[#778da9] flex-shrink-0 mt-1" size={20} />
                      <p className="text-[#778da9]">{aboutMe.name}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-[#778da9] flex-shrink-0" size={20} />
                      <a href={`tel:${aboutMe.phone}`} className="text-[#778da9] hover:text-[#e0e1dd] transition-colors">
                        {aboutMe.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-[#778da9] flex-shrink-0" size={20} />
                      <a href={`mailto:${aboutMe.email}`} className="text-[#778da9] hover:text-[#e0e1dd] transition-colors">
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
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
                  <h2 className="text-2xl text-[#e0e1dd] mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[#e0e1dd] mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#1b263b] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-[#e0e1dd] mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#1b263b] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[#e0e1dd] mb-2">Phone *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#1b263b] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>

                    <div>
                      <label className="block text-[#e0e1dd] mb-2">Service Interest</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="bg-[#1b263b] border-[#778da9]/30 text-[#e0e1dd]">
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
                      <label className="block text-[#e0e1dd] mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#1b263b] border-[#778da9]/30 text-[#e0e1dd] placeholder:text-[#778da9]"
                        placeholder="Tell us about your goals and any questions you have..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#778da9] hover:bg-[#415a77] text-[#e0e1dd] py-6 transition-all duration-300 hover:scale-105"
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
              <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="text-[#778da9] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl text-[#e0e1dd] mb-3">Office Hours</h3>
                    <div className="space-y-2 text-[#778da9]">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              {locations.map((location, index) => (
                <Card key={index} className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
                  <h3 className="text-xl text-[#e0e1dd] mb-6">{location.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#778da9] flex-shrink-0 mt-1" size={20} />
                      <p className="text-[#778da9]">{location.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-[#778da9] flex-shrink-0" size={20} />
                      <a href={`tel:${location.phone}`} className="text-[#778da9] hover:text-[#e0e1dd] transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-[#778da9] flex-shrink-0" size={20} />
                      <a href={`mailto:${location.email}`} className="text-[#778da9] hover:text-[#e0e1dd] transition-colors">
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
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-4">Visit Our Locations</h2>
            <p className="text-[#778da9]">
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
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 overflow-hidden">
                  <div className="aspect-video bg-[#1b263b] flex items-center justify-center">
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
                    <h3 className="text-xl text-[#e0e1dd] mb-2">{location.name}</h3>
                    <p className="text-[#778da9] text-sm">{location.address}</p>
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
