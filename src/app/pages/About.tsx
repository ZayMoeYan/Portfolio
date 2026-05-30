import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";
import { Card } from "../components/ui/card";
import { useCMS } from "../../hooks/useCMS";

export function About() {
  const { data } = useCMS("about");

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#0046FF]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">{data.hero.badge}</p>
            <h1 className="text-4xl sm:text-5xl tracking-tight text-black mb-6">
              {data.hero.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-black/70">
              {data.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#0046FF]">Overview</p>
            <h2 className="mb-6 text-3xl tracking-tight text-black">Professional Profile</h2>
            <div className="space-y-4 leading-relaxed text-black/70">
              {data.bio.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black/10 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <Award className="text-[#0046FF]" size={32} />
              <h2 className="text-3xl tracking-tight text-black">Skills</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-sm"
              >
                <div className="w-2 h-2 bg-[#0046FF] rounded-full" />
                <p className="text-black">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-[#0046FF]" size={32} />
              <h2 className="text-3xl tracking-tight text-black">Education</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-[#0046FF]">{edu.year}</div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">{edu.degree}</h3>
                  <p className="text-black/70">{edu.institution}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-black/10 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-[#0046FF]" size={32} />
              <h2 className="text-3xl tracking-tight text-black">Board Certifications</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-sm"
              >
                <Award className="text-[#0046FF]" size={20} />
                <p className="text-black">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="text-[#0046FF]" size={32} />
              <h2 className="text-3xl tracking-tight text-black">Experience Timeline</h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            {data.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative border-l-2 border-[#0046FF]/30 pl-8"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-[#0046FF] rounded-full" />
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-[#0046FF]">{item.year}</div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">{item.title}</h3>
                  <p className="text-black/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
      {/* Mission & Vision */}
      <section className="py-24 bg-black/10 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <Heart className="text-[#0046FF]" size={32} />
              <h2 className="text-3xl tracking-tight text-black">Mission & Vision</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-black">Our Mission</h3>
              <p className="leading-relaxed text-black/70">
                To provide world-class plastic surgery care that combines cutting-edge techniques 
                with personalized attention, helping patients achieve their aesthetic goals while 
                prioritizing safety, natural results, and overall well-being.
              </p>
            </Card>

            <Card className="border border-black/10 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-black">Our Vision</h3>
              <p className="leading-relaxed text-black/70">
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
