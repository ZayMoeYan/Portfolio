import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";
import { Card } from "../components/ui/card";

export function About() {
  const education = [
    {
      degree: "MD - Doctor of Medicine",
      institution: "Harvard Medical School",
      year: "2006",
    },
    {
      degree: "Plastic Surgery Residency",
      institution: "Johns Hopkins Hospital",
      year: "2011",
    },
    {
      degree: "Fellowship in Aesthetic Surgery",
      institution: "Mayo Clinic",
      year: "2013",
    },
  ];

  const certifications = [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "International Society of Aesthetic Plastic Surgery",
    "American College of Surgeons",
  ];

  const timeline = [
    {
      year: "2013",
      title: "Founded Private Practice",
      description: "Established Morrison Plastic Surgery Center",
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Named Top Plastic Surgeon by International Medical Review",
    },
    {
      year: "2018",
      title: "Innovation Award",
      description: "Received award for advanced rhinoplasty techniques",
    },
    {
      year: "2020",
      title: "Medical Director",
      description: "Appointed Director of Aesthetic Surgery at Metropolitan Hospital",
    },
    {
      year: "2024",
      title: "Published Research",
      description: "Published groundbreaking study on facial rejuvenation",
    },
  ];

  const awards = [
    "Top Plastic Surgeon - New York Magazine (2020-2025)",
    "Best Cosmetic Surgeon - Medical Excellence Awards",
    "Innovation in Plastic Surgery Award",
    "Patient Choice Award (5 years running)",
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
              About Dr. Alex Morrison
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Board-certified plastic surgeon dedicated to delivering exceptional results through 
              artistry, precision, and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-6">Professional Profile</h2>
            <div className="space-y-4 text-[#778da9] leading-relaxed">
              <p>
                Dr. Alex Morrison is a double board-certified plastic surgeon with over 15 years of 
                experience in both aesthetic and reconstructive surgery. Trained at some of the world's 
                most prestigious medical institutions, Dr. Morrison combines technical excellence with 
                an artistic eye to create natural, beautiful results.
              </p>
              <p>
                With a passion for innovation and patient-centered care, Dr. Morrison has performed 
                thousands of successful procedures, ranging from complex reconstructive surgeries to 
                subtle aesthetic enhancements. Each procedure is approached with meticulous attention 
                to detail and a commitment to the highest standards of safety and quality.
              </p>
              <p>
                Dr. Morrison believes in the transformative power of plastic surgery—not just in 
                changing appearance, but in restoring confidence and improving quality of life. This 
                philosophy drives every aspect of patient care, from the initial consultation through 
                post-operative follow-up.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-[#778da9]" size={32} />
              <h2 className="text-3xl text-[#e0e1dd]">Education</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6 h-full">
                  <div className="text-[#778da9] text-sm mb-2">{edu.year}</div>
                  <h3 className="text-xl text-[#e0e1dd] mb-2">{edu.degree}</h3>
                  <p className="text-[#778da9]">{edu.institution}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#778da9]" size={32} />
              <h2 className="text-3xl text-[#e0e1dd]">Board Certifications</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#415a77]/30 border border-[#778da9]/20 rounded-lg p-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-[#778da9] rounded-full" />
                <p className="text-[#e0e1dd]">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[#778da9]" size={32} />
              <h2 className="text-3xl text-[#e0e1dd]">Experience Timeline</h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-[#778da9]/30"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-[#778da9] rounded-full" />
                <div className="bg-[#415a77]/30 border border-[#778da9]/20 rounded-lg p-6">
                  <div className="text-[#778da9] text-sm mb-2">{item.year}</div>
                  <h3 className="text-xl text-[#e0e1dd] mb-2">{item.title}</h3>
                  <p className="text-[#778da9]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl text-[#e0e1dd] mb-6">Awards & Achievements</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-6">
                  <div className="flex items-start gap-4">
                    <Award className="text-[#778da9] flex-shrink-0 mt-1" size={24} />
                    <p className="text-[#e0e1dd]">{award}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-[#778da9]" size={32} />
              <h2 className="text-3xl text-[#e0e1dd]">Mission & Vision</h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
              <h3 className="text-2xl text-[#e0e1dd] mb-4">Our Mission</h3>
              <p className="text-[#778da9] leading-relaxed">
                To provide world-class plastic surgery care that combines cutting-edge techniques 
                with personalized attention, helping patients achieve their aesthetic goals while 
                prioritizing safety, natural results, and overall well-being.
              </p>
            </Card>

            <Card className="bg-[#415a77]/50 border-[#778da9]/20 p-8">
              <h3 className="text-2xl text-[#e0e1dd] mb-4">Our Vision</h3>
              <p className="text-[#778da9] leading-relaxed">
                To be recognized as a leader in plastic surgery through innovation, excellence, 
                and compassionate care. We strive to set the standard for patient outcomes and 
                satisfaction while advancing the field through research and education.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
