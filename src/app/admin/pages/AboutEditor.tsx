import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultAbout } from "../../../hooks/useCMS";
import type { CMSAbout } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { ImageUpload } from "../components/ImageUpload";
import { Loader2, Save, CheckCircle, Plus, Trash2 } from "lucide-react";

export function AboutEditor() {
  const { data: cmsData, loading } = useCMS("about");
  const [data, setData] = useState<CMSAbout>(defaultAbout);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("about", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  // Bio paragraphs
  const updateBio = (index: number, value: string) => {
    setData((prev) => {
      const intro = [...prev.bio.intro];
      intro[index] = value;
      return { ...prev, bio: { ...prev.bio, intro } };
    });
  };
  const addBio = () =>
    setData((p) => ({ ...p, bio: { ...p.bio, intro: [...p.bio.intro, ""] } }));
  const removeBio = (i: number) =>
    setData((p) => ({ ...p, bio: { ...p.bio, intro: p.bio.intro.filter((_, idx) => idx !== i) } }));

  // Education
  const updateEdu = (i: number, field: string, value: string) =>
    setData((p) => {
      const education = [...p.education];
      education[i] = { ...education[i], [field]: value };
      return { ...p, education };
    });
  const addEdu = () =>
    setData((p) => ({ ...p, education: [...p.education, { degree: "", institution: "", year: "" }] }));
  const removeEdu = (i: number) =>
    setData((p) => ({ ...p, education: p.education.filter((_, idx) => idx !== i) }));

  // Certifications
  const updateCert = (i: number, value: string) =>
    setData((p) => {
      const certifications = [...p.certifications];
      certifications[i] = value;
      return { ...p, certifications };
    });
  const addCert = () => setData((p) => ({ ...p, certifications: [...p.certifications, ""] }));
  const removeCert = (i: number) =>
    setData((p) => ({ ...p, certifications: p.certifications.filter((_, idx) => idx !== i) }));

  // Skills
  const updateSkill = (i: number, value: string) =>
    setData((p) => {
      const skills = [...p.skills];
      skills[i] = value;
      return { ...p, skills };
    });
  const addSkill = () => setData((p) => ({ ...p, skills: [...p.skills, ""] }));
  const removeSkill = (i: number) =>
    setData((p) => ({ ...p, skills: p.skills.filter((_, idx) => idx !== i) }));

  // Timeline
  const updateTimeline = (i: number, field: string, value: string) =>
    setData((p) => {
      const timeline = [...p.timeline];
      timeline[i] = { ...timeline[i], [field]: value };
      return { ...p, timeline };
    });
  const addTimeline = () =>
    setData((p) => ({ ...p, timeline: [...p.timeline, { year: "", title: "", description: "" }] }));
  const removeTimeline = (i: number) =>
    setData((p) => ({ ...p, timeline: p.timeline.filter((_, idx) => idx !== i) }));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-[#0046FF]" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      {/* Hero */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-gray-900">Page Hero</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Badge</label>
            <Input
              value={data.hero.badge}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, badge: e.target.value } }))}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Title</label>
            <Input
              value={data.hero.title}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, title: e.target.value } }))}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Description</label>
            <Textarea
              value={data.hero.description}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, description: e.target.value } }))}
              rows={3}
            />
          </div>
        </div>
      </Card>

      {/* Bio */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Professional Profile / Bio</h3>
          <Button type="button" variant="outline" size="sm" onClick={addBio}>
            <Plus size={14} className="mr-1" /> Add Paragraph
          </Button>
        </div>
        <ImageUpload
          label="Profile Photo"
          value={data.bio.image}
          onChange={(url) => setData((p) => ({ ...p, bio: { ...p.bio, image: url } }))}
          folder="about"
        />
        <div className="mt-4 space-y-3">
          {data.bio.intro.map((para, i) => (
            <div key={i} className="flex gap-2">
              <Textarea
                value={para}
                onChange={(e) => updateBio(i, e.target.value)}
                rows={3}
                placeholder={`Paragraph ${i + 1}`}
                className="flex-1"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeBio(i)}
                className="self-start text-red-500 hover:bg-red-50 px-2"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Education */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Education</h3>
          <Button type="button" variant="outline" size="sm" onClick={addEdu}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu, i) => (
            <div key={i} className="rounded-lg border border-gray-100 p-4">
              <div className="mb-2 flex justify-between">
                <span className="text-xs font-medium text-gray-500">Entry {i + 1}</span>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeEdu(i)} className="text-red-500 hover:bg-red-50 px-2">
                  <Trash2 size={14} />
                </Button>
              </div>
              <div className="space-y-2">
                <Input placeholder="Degree / Title" value={edu.degree} onChange={(e) => updateEdu(i, "degree", e.target.value)} />
                <Input placeholder="Institution" value={edu.institution} onChange={(e) => updateEdu(i, "institution", e.target.value)} />
                <Input placeholder="Year (e.g. 2016)" value={edu.year} onChange={(e) => updateEdu(i, "year", e.target.value)} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Certifications */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Certifications</h3>
          <Button type="button" variant="outline" size="sm" onClick={addCert}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-2">
          {data.certifications.map((cert, i) => (
            <div key={i} className="flex gap-2">
              <Input value={cert} onChange={(e) => updateCert(i, e.target.value)} placeholder="Certification" />
              <Button type="button" variant="ghost" size="sm" onClick={() => removeCert(i)} className="text-red-500 hover:bg-red-50 px-2">
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Skills */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Skills</h3>
          <Button type="button" variant="outline" size="sm" onClick={addSkill}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-2">
          {data.skills.map((skill, i) => (
            <div key={i} className="flex gap-2">
              <Input value={skill} onChange={(e) => updateSkill(i, e.target.value)} placeholder="Skill" />
              <Button type="button" variant="ghost" size="sm" onClick={() => removeSkill(i)} className="text-red-500 hover:bg-red-50 px-2">
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Career Timeline</h3>
          <Button type="button" variant="outline" size="sm" onClick={addTimeline}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {data.timeline.map((item, i) => (
            <div key={i} className="rounded-lg border border-gray-100 p-4">
              <div className="mb-2 flex justify-between">
                <span className="text-xs font-medium text-gray-500">Entry {i + 1}</span>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeTimeline(i)} className="text-red-500 hover:bg-red-50 px-2">
                  <Trash2 size={14} />
                </Button>
              </div>
              <div className="space-y-2">
                <Input placeholder="Year (e.g. 2018 - Present)" value={item.year} onChange={(e) => updateTimeline(i, "year", e.target.value)} />
                <Input placeholder="Title" value={item.title} onChange={(e) => updateTimeline(i, "title", e.target.value)} />
                <Textarea placeholder="Description" value={item.description} onChange={(e) => updateTimeline(i, "description", e.target.value)} rows={2} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="w-full sm:w-auto">
        {saving ? (
          <><Loader2 className="mr-2 animate-spin" size={16} /> Saving...</>
        ) : saved ? (
          <><CheckCircle className="mr-2" size={16} /> Saved!</>
        ) : (
          <><Save className="mr-2" size={16} /> Save About Page</>
        )}
      </Button>
    </div>
  );
}
