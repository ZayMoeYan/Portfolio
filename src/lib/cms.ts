import { supabase } from "./supabase";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CMSSettings {
  doctor: {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: string;
  };
  social: {
    facebook: string;
    instagram: string;
  };
  footer: {
    phone: string;
    email: string;
    tagline: string;
  };
}

export interface CMSHome {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
    cta_primary: string;
    cta_secondary: string;
    trust_badges: string[];
  };
  case_highlights: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
  }>;
}

export interface CMSAbout {
  seo: { title: string; description: string };
  hero: { badge: string; title: string; description: string };
  bio: { intro: string[]; image: string };
  education: Array<{ degree: string; institution: string; year: string }>;
  certifications: string[];
  skills: string[];
  timeline: Array<{ year: string; title: string; description: string }>;
}

export interface CMSService {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  recovery: string;
  risks: string;
}

export interface CMSServices {
  seo: { title: string; description: string };
  hero: { badge: string; title: string; description: string };
  services: CMSService[];
}

export interface CMSReview {
  id: number;
  name: string;
  procedure: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CMSReviews {
  seo: { title: string; description: string };
  hero: { badge: string; title: string; description: string };
  reviews: CMSReview[];
}

export interface CMSContact {
  seo: { title: string; description: string };
  hero: { badge: string; title: string; description: string };
  locations: Array<{ name: string; address: string; phone: string; email: string }>;
}

export type CMSPage = "settings" | "home" | "about" | "services" | "reviews" | "contact";

export type CMSPageData = CMSSettings | CMSHome | CMSAbout | CMSServices | CMSReviews | CMSContact;

// ─── Storage Helpers ──────────────────────────────────────────────────────────

const CMS_BUCKET = "cms";
const IMAGES_BUCKET = "cms-images";

export async function getCMSContent<T>(page: CMSPage): Promise<T | null> {
  const { data, error } = await supabase.storage
    .from(CMS_BUCKET)
    .download(`${page}.json`);

  if (error || !data) return null;

  const text = await data.text();
  return JSON.parse(text) as T;
}

export async function saveCMSContent(page: CMSPage, content: CMSPageData): Promise<void> {
  const json = JSON.stringify(content, null, 2);
  const blob = new Blob([json], { type: "application/json" });

  const { error } = await supabase.storage
    .from(CMS_BUCKET)
    .upload(`${page}.json`, blob, { upsert: true, contentType: "application/json" });

  if (error) throw new Error(`Failed to save ${page}.json: ${error.message}`);
}

export async function uploadImage(path: string, file: File): Promise<string> {
  const { error } = await supabase.storage
    .from(IMAGES_BUCKET)
    .upload(path, file, { upsert: true, contentType: file.type });

  if (error) throw new Error(`Image upload failed: ${error.message}`);

  const { data } = supabase.storage.from(IMAGES_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteImage(path: string): Promise<void> {
  const { error } = await supabase.storage.from(IMAGES_BUCKET).remove([path]);
  if (error) throw new Error(`Image delete failed: ${error.message}`);
}

export async function listImages(folder?: string): Promise<Array<{ name: string; url: string }>> {
  const { data, error } = await supabase.storage
    .from(IMAGES_BUCKET)
    .list(folder ?? "", { sortBy: { column: "created_at", order: "desc" } });

  if (error || !data) return [];

  return data
    .filter((f) => f.name !== ".emptyFolderPlaceholder")
    .map((f) => {
      const filePath = folder ? `${folder}/${f.name}` : f.name;
      const { data: urlData } = supabase.storage
        .from(IMAGES_BUCKET)
        .getPublicUrl(filePath);
      return { name: f.name, url: urlData.publicUrl };
    });
}
