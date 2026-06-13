import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultHome } from "../../../hooks/useCMS";
import type { CMSHome } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ImageUpload } from "../components/ImageUpload";
import { Loader2, Save, CheckCircle, Plus, Trash2 } from "lucide-react";
import { Textarea } from "../../components/ui/textarea";

export function HomeEditor() {
  const { data: cmsData, loading } = useCMS("home");
  const [data, setData] = useState<CMSHome>(defaultHome);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("home", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateBadge = (index: number, value: string) => {
    setData((prev) => {
      const badges = [...prev.hero.trust_badges];
      badges[index] = value;
      return { ...prev, hero: { ...prev.hero, trust_badges: badges } };
    });
  };

  const addBadge = () =>
    setData((prev) => ({
      ...prev,
      hero: { ...prev.hero, trust_badges: [...prev.hero.trust_badges, ""] },
    }));

  const removeBadge = (index: number) =>
    setData((prev) => ({
      ...prev,
      hero: { ...prev.hero, trust_badges: prev.hero.trust_badges.filter((_, i) => i !== index) },
    }));

  // const updateHighlight = (index: number, field: string, value: string) => {
  //   setData((prev) => {
  //     const highlights = [...prev.case_highlights];
  //     highlights[index] = { ...highlights[index], [field]: value };
  //     return { ...prev, case_highlights: highlights };
  //   });
  // };

  // const addHighlight = () =>
  //   setData((prev) => ({
  //     ...prev,
  //     case_highlights: [
  //       ...prev.case_highlights,
  //       { id: Date.now(), title: "", description: "", category: "" },
  //     ],
  //   }));

  // const removeHighlight = (index: number) =>
  //   setData((prev) => ({
  //     ...prev,
  //     case_highlights: prev.case_highlights.filter((_, i) => i !== index),
  //   }));

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
        <h3 className="mb-5 text-base font-semibold text-gray-900">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Badge Text</label>
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
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Subtitle</label>
            <Input
              value={data.hero.subtitle}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, subtitle: e.target.value } }))}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Primary CTA Button</label>
            <Input
              value={data.hero.cta_primary}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, cta_primary: e.target.value } }))}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Secondary CTA Button</label>
            <Input
              value={data.hero.cta_secondary}
              onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, cta_secondary: e.target.value } }))}
            />
          </div>
          <ImageUpload
            label="Hero Image"
            value={data.hero.image}
            onChange={(url) => setData((p) => ({ ...p, hero: { ...p.hero, image: url } }))}
            folder="home"
          />
        </div>
      </Card>

      {/* Trust Badges */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Trust Badges</h3>
          <Button type="button" variant="outline" size="sm" onClick={addBadge}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-2">
          {data.hero.trust_badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <Input
                value={badge}
                onChange={(e) => updateBadge(i, e.target.value)}
                placeholder="e.g. 15+ years experience"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeBadge(i)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Case Highlights */}
      {/* <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Case Highlights</h3>
          <Button type="button" variant="outline" size="sm" onClick={addHighlight}>
            <Plus size={14} className="mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {data.case_highlights.map((highlight, i) => (
            <div key={highlight.id} className="rounded-lg border border-gray-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Highlight {i + 1}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeHighlight(i)}
                  className="text-red-500 hover:bg-red-50 px-2"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              <div className="space-y-3">
                <Input
                  placeholder="Title"
                  value={highlight.title}
                  onChange={(e) => updateHighlight(i, "title", e.target.value)}
                />
                <Input
                  placeholder="Category"
                  value={highlight.category}
                  onChange={(e) => updateHighlight(i, "category", e.target.value)}
                />
                <Textarea
                  placeholder="Description"
                  value={highlight.description}
                  onChange={(e) => updateHighlight(i, "description", e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>
      </Card> */}

      <Button onClick={handleSave} disabled={saving} className="w-full sm:w-auto">
        {saving ? (
          <><Loader2 className="mr-2 animate-spin" size={16} /> Saving...</>
        ) : saved ? (
          <><CheckCircle className="mr-2" size={16} /> Saved!</>
        ) : (
          <><Save className="mr-2" size={16} /> Save Home Page</>
        )}
      </Button>
    </div>
  );
}
