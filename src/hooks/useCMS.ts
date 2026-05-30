import { useState, useEffect } from "react";
import { getCMSContent, CMSPage } from "../lib/cms";
import type { CMSSettings, CMSHome, CMSAbout, CMSServices, CMSReviews, CMSContact } from "../lib/cms";

// ─── Default content (fallback while loading or if CMS not yet seeded) ────────

export const defaultSettings: CMSSettings = {
  doctor: {
    name: "Dr. Thurain Moe Myint Win",
    title: "Breast and reconstructive surgeon",
    phone: "+95 95055880",
    email: "thurain.moemyint1@gmail.com",
    image: "https://i.pinimg.com/736x/7d/be/c0/7dbec043a172b1706712bcebb5cb816e.jpg",
  },
  social: { facebook: "https://facebook.com", instagram: "https://instagram.com" },
  footer: {
    phone: "+95 95055880",
    email: "thurain.moemyint1@gmail.com",
    tagline: "Breast and reconstructive surgeon",
  },
};

export const defaultHome: CMSHome = {
  seo: {
    title: "Dr. Thurain Moe Myint Win - Breast and Reconstructive Surgeon",
    description: "Premium breast and reconstructive surgery",
  },
  hero: {
    badge: "Premium breast and reconstructive surgery",
    title: "Dr. Thurain Moe Myint Win",
    subtitle: "Breast and reconstructive surgeon",
    image: "https://i.pinimg.com/736x/7d/be/c0/7dbec043a172b1706712bcebb5cb816e.jpg",
    cta_primary: "Book Consultation",
    cta_secondary: "View Services",
    trust_badges: ["15+ years experience", "Natural-looking results", "Patient-centered care"],
  },
  case_highlights: [
    { id: 1, title: "Complex Rhinoplasty Revision", description: "Successfully corrected breathing issues and aesthetic concerns from previous surgery.", category: "Facial Surgery" },
    { id: 2, title: "Post-Mastectomy Reconstruction", description: "Natural-looking breast reconstruction using advanced tissue expansion techniques.", category: "Reconstructive Surgery" },
    { id: 3, title: "Full Body Transformation", description: "Comprehensive body contouring after significant weight loss.", category: "Body Contouring" },
  ],
};

export const defaultAbout: CMSAbout = {
  seo: { title: "About Dr. Thurain Moe Myint Win", description: "Professional background and expertise" },
  hero: {
    badge: "Professional background",
    title: "About Me",
    description: "Accomplished Breast and reconstructive Surgeon with 8 years of experience. Achieved a high patient satisfaction rate through patient care and innovative treatment.",
  },
  bio: {
    intro: [
      "Dr. Thurain is an experienced General and Reconstructive Breast Surgeon with extensive academic, surgical, and international training experience in Myanmar and abroad. He began his medical teaching career as a Demonstrator in the Department of Anatomy at the University of Medicine 2 Yangon, where he taught medical students from 2006 to 2012.",
      "He completed his postgraduate surgical training at North Okkalapa General and Teaching Hospital, Yangon, earning his M.Med.Sc (Surgery) degree between 2012 and 2015. He later served as a Surgical Lecturer in the Department of Surgery at the University of Medicine 2 Yangon. In 2016, he achieved the prestigious MRCS qualification from the Royal College of Surgeons of Edinburgh.",
      "Dr. Thurain further specialized in Breast and Reconstructive Surgery through doctoral research and advanced training focused on Oncoplastic Surgery. He also completed international fellowship and training programs in Plastic and Reconstructive Surgery at Siriraj Hospital, Mahidol University in Thailand, as well as advanced surgical training in Vietnam.",
      "He is highly experienced in breast cancer surgery and reconstructive procedures, including Skin-Sparing Mastectomy, Breast Reconstruction with Implants and Tissue Flaps, Breast Augmentation, Breast Reduction, and Breast Lift Surgery. In addition, he is skilled in body contouring procedures such as Liposuction and Lipofilling.",
      "With international exposure and advanced surgical training across Thailand, Korea, and Vietnam, Dr. Thurain brings over 9 years of experience in reconstructive and aesthetic breast surgery.",
    ],
    image: "https://i.pinimg.com/736x/7d/be/c0/7dbec043a172b1706712bcebb5cb816e.jpg",
  },
  education: [
    { degree: "Demonstrator (Teaching Doctor for Medical Students)", institution: "Department of Anatomy, University of Medicine 2 Yangon, Myanmar", year: "2006 - 2012" },
    { degree: "M.Med.Sc (Surgery) – Master Degree of Surgery", institution: "General Surgeon Surgical Training, North Okkalapa General and Teaching Hospital, Yangon, Myanmar", year: "2012 - 2015" },
    { degree: "Surgical Lecturer", institution: "Department of Surgery, University of Medicine 2 Yangon, Myanmar", year: "" },
    { degree: "MRCS (Member of the Royal College of Surgeons of Edinburgh)", institution: "Royal College of Surgeons of Edinburgh", year: "2016" },
    { degree: "Dr.Med.Sc (Surgery) – Doctorate Thesis in Breast and Reconstructive Surgery", institution: "Department of Surgery, North Okkalapa General and Teaching Hospital, Yangon, Myanmar", year: "" },
    { degree: "Research Training in Breast and Reconstructive Surgery (Oncoplastic Surgery)", institution: "North Okkalapa General and Teaching Hospital, Yangon, Myanmar", year: "" },
    { degree: "Training Courses in Plastic and Reconstructive Surgery", institution: "Faculty of Medicine Siriraj Hospital, Mahidol University, Thailand", year: "2018 - 2020" },
    { degree: "Training Courses in Plastic and Reconstructive Surgery", institution: "Ho Chi Minh City, Vietnam", year: "2018" },
  ],
  certifications: [
    "MRCS – Royal College of Surgeons of Edinburgh",
    "M.Med.Sc (Surgery)",
    "Dr.Med.Sc (Surgery)",
    "Research Training in Oncoplastic Breast Surgery",
    "Advanced Training in Plastic and Reconstructive Surgery",
  ],
  skills: [
    "Breast and Reconstructive Surgery",
    "Patient Management",
    "Surgical Techniques",
    "Clinical Diagnostics",
  ],
  timeline: [
    { year: "2006 - 2012", title: "Demonstrator (Teaching Doctor for Medical Students)", description: "Served as a teaching doctor in the Department of Anatomy at the University of Medicine 2 Yangon, Myanmar. Provided anatomy education and academic guidance for undergraduate medical students." },
    { year: "2012 - 2015", title: "General Surgeon & Surgical Trainee", description: "Completed postgraduate surgical training at North Okkalapa General and Teaching Hospital, Yangon, Myanmar. Earned M.Med.Sc (Surgery) degree with advanced clinical and operative surgical training." },
    { year: "2015 - Present", title: "Surgical Lecturer", description: "Worked as a Surgical Lecturer in the Department of Surgery at the University of Medicine 2 Yangon. Involved in teaching, clinical supervision, and surgical training for medical students and junior doctors." },
    { year: "2016", title: "MRCS Qualification", description: "Successfully completed MRCS (Member of the Royal College of Surgeons of Edinburgh), demonstrating advanced surgical knowledge and professional competency." },
    { year: "2018", title: "International Reconstructive Surgery Training - Vietnam", description: "Completed advanced training courses in Plastic and Reconstructive Surgery in Ho Chi Minh City, Vietnam, focusing on modern reconstructive surgical techniques." },
    { year: "2018 - 2020", title: "Plastic & Reconstructive Surgery Training - Thailand", description: "Received advanced international training in Plastic and Reconstructive Surgery at Faculty of Medicine Siriraj Hospital, Mahidol University, Thailand." },
    { year: "2018 - Present", title: "Breast & Reconstructive Surgeon", description: "Performed over 50 breast surgery procedures annually with a high success rate, significant patient satisfaction. Led multidisciplinary teams on enhancing collaboration between oncology and radiology departments." },
    { year: "Research & Doctorate", title: "Doctorate Research in Oncoplastic Breast Surgery", description: "Conducted doctoral research and thesis in Breast and Reconstructive Surgery at North Okkalapa General and Teaching Hospital, Yangon, Myanmar. Focused on advanced oncoplastic surgery techniques and breast reconstruction procedures." },
  ],
};

export const defaultServices: CMSServices = {
  seo: { title: "Our Services", description: "Comprehensive plastic surgery solutions" },
  hero: {
    badge: "Our expertise",
    title: "Our Services",
    description: "Comprehensive plastic surgery solutions tailored to your unique needs and aesthetic goals.",
  },
  services: [
    { id: "rhinoplasty", category: "Facial Surgery", title: "Rhinoplasty", description: "Enhance the shape and function of your nose with precision rhinoplasty techniques.", details: "Rhinoplasty, or nose reshaping surgery, is designed to improve the appearance and proportion of your nose. This procedure can correct breathing problems caused by structural defects while enhancing facial harmony.", recovery: "7-10 days for initial recovery, 2-3 weeks to resume normal activities", risks: "Bleeding, infection, scarring, difficulty breathing, unsatisfactory results requiring revision" },
    { id: "facelift", category: "Facial Surgery", title: "Facelift", description: "Turn back the clock with advanced facelift techniques for natural-looking rejuvenation.", details: "A facelift addresses visible signs of aging in the face and neck by removing excess skin, tightening underlying tissues, and re-draping the skin for a more youthful appearance.", recovery: "2-3 weeks for initial healing, 4-6 weeks for full recovery", risks: "Hematoma, scarring, nerve injury, hair loss at incision sites, skin necrosis" },
    { id: "blepharoplasty", category: "Facial Surgery", title: "Blepharoplasty", description: "Rejuvenate tired eyes with eyelid surgery for a refreshed, youthful appearance.", details: "Eyelid surgery corrects drooping upper lids and puffy bags below the eyes, which can make you look older and tired. This procedure can also improve vision in cases where drooping lids impair sight.", recovery: "7-10 days, bruising typically subsides within 2 weeks", risks: "Temporary blurred vision, dry eyes, difficulty closing eyes, visible scarring, asymmetry" },
    { id: "breast-augmentation", category: "Body Contouring", title: "Breast Augmentation", description: "Enhance your curves with customized breast augmentation options.", details: "Breast augmentation uses implants or fat transfer to increase breast size, restore volume lost after weight reduction or pregnancy, and achieve better symmetry.", recovery: "1 week for light activities, 4-6 weeks for exercise", risks: "Capsular contracture, implant rupture, changes in nipple sensation, infection, asymmetry" },
    { id: "liposuction", category: "Body Contouring", title: "Liposuction", description: "Remove stubborn fat deposits for a more sculpted physique.", details: "Liposuction targets specific areas where fat deposits resist diet and exercise. This procedure reshapes and contours the body by removing excess fat cells.", recovery: "3-5 days off work, 2-4 weeks for exercise", risks: "Contour irregularities, fluid accumulation, numbness, infection, fat embolism" },
    { id: "tummy-tuck", category: "Body Contouring", title: "Tummy Tuck", description: "Achieve a flatter, firmer abdomen with abdominoplasty.", details: "A tummy tuck removes excess skin and fat from the abdomen while tightening weakened muscles, creating a smoother and firmer abdominal profile.", recovery: "2-3 weeks for initial recovery, 6-8 weeks full recovery", risks: "Scarring, seroma, poor wound healing, blood clots, tissue necrosis" },
    { id: "breast-reconstruction", category: "Reconstructive Surgery", title: "Breast Reconstruction", description: "Restore confidence and form after mastectomy with advanced reconstruction techniques.", details: "Breast reconstruction rebuilds the breast shape after mastectomy or lumpectomy. Options include implant-based reconstruction or natural tissue reconstruction using your own body tissue.", recovery: "4-6 weeks for initial healing, several months for complete recovery", risks: "Implant complications, flap failure, infection, asymmetry, need for additional surgeries" },
    { id: "cleft-repair", category: "Reconstructive Surgery", title: "Cleft Lip & Palate Repair", description: "Expert repair of cleft conditions for improved function and appearance.", details: "Cleft lip and palate repair restores normal function and appearance through carefully planned surgical interventions, often performed in stages during childhood.", recovery: "Varies by procedure and patient age, typically 1-2 weeks initial healing", risks: "Scarring, speech difficulties, need for additional procedures, infection" },
    { id: "facial-trauma", category: "Advanced / Rare Cases", title: "Facial Trauma Reconstruction", description: "Specialized care for complex facial injuries.", details: "Facial trauma reconstruction addresses injuries from accidents, sports, or violence, restoring both function and aesthetics through advanced surgical techniques.", recovery: "Highly variable depending on injury severity, 2-8 weeks typical", risks: "Nerve damage, scarring, functional impairment, need for revision surgery" },
  ],
};

export const defaultReviews: CMSReviews = {
  seo: { title: "Patient Reviews", description: "Hear from our satisfied patients" },
  hero: {
    badge: "Patient stories",
    title: "Patient Reviews",
    description: "Hear from our satisfied patients about their experience and results.",
  },
  reviews: [
    { id: 1, name: "Sarah Johnson", procedure: "Rhinoplasty", rating: 5, comment: "Dr. Morrison completely transformed my confidence. The results are natural and exactly what I envisioned. His attention to detail and caring approach made the entire process comfortable.", date: "2026-03-01" },
    { id: 2, name: "Michael Chen", procedure: "Facelift", rating: 5, comment: "Exceptional results! Dr. Morrison is a true artist. I look refreshed and natural, not overdone. His expertise and professionalism are unmatched.", date: "2026-02-25" },
    { id: 3, name: "Emily Rodriguez", procedure: "Breast Augmentation", rating: 5, comment: "I couldn't be happier with my results. Dr. Morrison listened to my concerns and delivered exactly what I wanted. His surgical skill is extraordinary.", date: "2026-02-18" },
    { id: 4, name: "David Thompson", procedure: "Liposuction", rating: 5, comment: "Life-changing experience! Dr. Morrison's expertise and the entire team's care made this journey smooth. The results exceeded my expectations.", date: "2026-02-10" },
    { id: 5, name: "Jessica Martinez", procedure: "Blepharoplasty", rating: 5, comment: "My eyes look so much brighter and younger! Dr. Morrison is incredibly skilled and made me feel comfortable throughout the entire process.", date: "2026-02-05" },
    { id: 6, name: "Robert Anderson", procedure: "Tummy Tuck", rating: 5, comment: "Outstanding results! Dr. Morrison's surgical precision and artistry are evident. I feel like a new person. Highly recommend!", date: "2026-01-28" },
  ],
};

export const defaultContact: CMSContact = {
  seo: { title: "Contact Us", description: "Book a consultation" },
  hero: {
    badge: "Book a consultation",
    title: "Get in Touch",
    description: "Schedule a consultation or reach out with any questions. We're here to help you on your journey.",
  },
  locations: [
    { name: "Manhattan Office", address: "123 Park Avenue, Suite 500, New York, NY 10001", phone: "+1 (212) 555-0100", email: "manhattan@drmorrison.com" },
    { name: "Brooklyn Office", address: "456 Atlantic Avenue, Brooklyn, NY 11217", phone: "+1 (718) 555-0200", email: "brooklyn@drmorrison.com" },
  ],
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

type PageDataMap = {
  settings: CMSSettings;
  home: CMSHome;
  about: CMSAbout;
  services: CMSServices;
  reviews: CMSReviews;
  contact: CMSContact;
};

const defaults: PageDataMap = {
  settings: defaultSettings,
  home: defaultHome,
  about: defaultAbout,
  services: defaultServices,
  reviews: defaultReviews,
  contact: defaultContact,
};

export function useCMS<K extends CMSPage>(page: K): { data: PageDataMap[K]; loading: boolean } {
  const [data, setData] = useState<PageDataMap[K]>(defaults[page] as PageDataMap[K]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCMSContent<PageDataMap[K]>(page).then((result) => {
      if (result) setData(result);
      setLoading(false);
    });
  }, [page]);

  return { data, loading };
}
