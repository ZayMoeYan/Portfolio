import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";
import { Card } from "../components/ui/card";

export function About() {
  const education = [
  {
    degree: "Demonstrator (Teaching Doctor for Medical Students)",
    institution:
      "Department of Anatomy, University of Medicine 2 Yangon, Myanmar",
    year: "2006 - 2012",
  },
  {
    degree: "M.Med.Sc (Surgery) – Master Degree of Surgery",
    institution:
      "General Surgeon Surgical Training, North Okkalapa General and Teaching Hospital, Yangon, Myanmar",
    year: "2012 - 2015",
  },
  {
    degree: "Surgical Lecturer",
    institution:
      "Department of Surgery, University of Medicine 2 Yangon, Myanmar",
    year: "",
  },
  {
    degree: "MRCS (Member of the Royal College of Surgeons of Edinburgh)",
    institution:
      "Royal College of Surgeons of Edinburgh",
    year: "2016",
  },
  {
    degree:
      "Dr.Med.Sc (Surgery) – Doctorate Thesis in Breast and Reconstructive Surgery",
    institution:
      "Department of Surgery, North Okkalapa General and Teaching Hospital, Yangon, Myanmar",
    year: "",
  },
  {
    degree:
      "Research Training in Breast and Reconstructive Surgery (Oncoplastic Surgery)",
    institution:
      "North Okkalapa General and Teaching Hospital, Yangon, Myanmar",
    year: "",
  },
  {
    degree: "Training Courses in Plastic and Reconstructive Surgery",
    institution:
      "Faculty of Medicine Siriraj Hospital, Mahidol University, Thailand",
    year: "2018 - 2020",
  },
  {
    degree: "Training Courses in Plastic and Reconstructive Surgery",
    institution:
      "Ho Chi Minh City, Vietnam",
    year: "2018",
  },
];

const certifications = [
  "MRCS – Royal College of Surgeons of Edinburgh",
  "M.Med.Sc (Surgery)",
  "Dr.Med.Sc (Surgery)",
  "Research Training in Oncoplastic Breast Surgery",
  "Advanced Training in Plastic and Reconstructive Surgery",
];

  const skills = [
    'Breast and Reconstructive Surgery',
    'Patient Management',
    'Surgical Techniques',
    'Clinical Diagnostics'
  ];

const timeline = [
  {
    year: "2006 - 2012",
    title: "Demonstrator (Teaching Doctor for Medical Students)",
    description: `Served as a teaching doctor in the Department of Anatomy at the University of Medicine 2 Yangon, Myanmar. 
    Provided anatomy education and academic guidance for undergraduate medical students.`,
  },
  {
    year: "2012 - 2015",
    title: "General Surgeon & Surgical Trainee",
    description: `Completed postgraduate surgical training at North Okkalapa General and Teaching Hospital, Yangon, Myanmar. 
    Earned M.Med.Sc (Surgery) degree with advanced clinical and operative surgical training.`,
  },
  {
    year: "2015 - Present",
    title: "Surgical Lecturer",
    description: `Worked as a Surgical Lecturer in the Department of Surgery at the University of Medicine 2 Yangon. 
    Involved in teaching, clinical supervision, and surgical training for medical students and junior doctors.`,
  },
  {
    year: "2016",
    title: "MRCS Qualification",
    description: `Successfully completed MRCS (Member of the Royal College of Surgeons of Edinburgh), 
    demonstrating advanced surgical knowledge and professional competency.`,
  },
  {
    year: "2018",
    title: "International Reconstructive Surgery Training - Vietnam",
    description: `Completed advanced training courses in Plastic and Reconstructive Surgery in Ho Chi Minh City, Vietnam, 
    focusing on modern reconstructive surgical techniques.`,
  },
  {
    year: "2018 - 2020",
    title: "Plastic & Reconstructive Surgery Training - Thailand",
    description: `Received advanced international training in Plastic and Reconstructive Surgery at Faculty of Medicine Siriraj Hospital, 
    Mahidol University, Thailand.`,
  },
  {
    year: "2018 - Present",
    title: "Breast & Reconstructive Surgeon",
    description: `Performed over 50 breast surgery procedures annually with a high success rate, significant patient satisfaction. 
    Led multidisciplinary teams on enhancing collaboration between oncology and radiology departments.`,
  },
  {
    year: "Research & Doctorate",
    title: "Doctorate Research in Oncoplastic Breast Surgery",
    description: `Conducted doctoral research and thesis in Breast and Reconstructive Surgery at North Okkalapa General and Teaching Hospital, Yangon, Myanmar. 
    Focused on advanced oncoplastic surgery techniques and breast reconstruction procedures.`,
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
              About Me
            </h1>
            <p className="text-xl text-[#778da9] max-w-3xl mx-auto leading-relaxed">
              Accomplished Breast and reconstructive Surgeon with 8 years of experience. <br />
              Achieved a high patient satisfaction rate through patient care and innovative treatment.
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
                Dr. Thurain is an experienced General and Reconstructive Breast Surgeon with extensive academic, surgical, and international training experience in Myanmar and abroad. 
                He began his medical teaching career as a Demonstrator in the Department of Anatomy at the University of Medicine 2 Yangon, where he taught medical students from 2006 to 2012.
              </p>
              <p>
                He completed his postgraduate surgical training at North Okkalapa General and Teaching Hospital, Yangon, earning his M.Med.Sc (Surgery) degree between 2012 and 2015. 
                He later served as a Surgical Lecturer in the Department of Surgery at the University of Medicine 2 Yangon. 
                In 2016, he achieved the prestigious MRCS qualification from the Royal College of Surgeons of Edinburgh.
              </p>
              <p>
                Dr. Thurain further specialized in Breast and Reconstructive Surgery through doctoral research and advanced training focused on Oncoplastic Surgery. 
                He also completed international fellowship and training programs in Plastic and Reconstructive Surgery at Siriraj Hospital, Mahidol University in Thailand, as well as advanced surgical training in Vietnam.
              </p>
              <p>
                He is highly experienced in breast cancer surgery and reconstructive procedures, including Skin-Sparing Mastectomy, Breast Reconstruction with Implants and Tissue Flaps, Breast Augmentation, Breast Reduction, and Breast Lift Surgery. 
                In addition, he is skilled in body contouring procedures such as Liposuction and Lipofilling.
              </p>
              <p>
                With international exposure and advanced surgical training across Thailand, Korea, and Vietnam, Dr. Thurain brings over 9 years of experience in reconstructive and aesthetic breast surgery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#778da9]" size={32} />
              <h2 className="text-3xl text-[#e0e1dd]">Skills</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#415a77]/30 border border-[#778da9]/20 rounded-lg p-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-[#778da9] rounded-full" />
                <p className="text-[#e0e1dd]">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-[#0d1b2a]">
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
                <Award className="text-[#778da9]" size={20} />
                <p className="text-[#e0e1dd]">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-[#0d1b2a]">
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
     
      {/* Mission & Vision */}
      <section className="py-20 bg-[#1b263b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid sm:grid-cols-2 gap-8">
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
