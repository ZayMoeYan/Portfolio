import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultContact } from "../../../hooks/useCMS";
import type { CMSContact } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Loader2, Save, CheckCircle, Plus, Trash2 } from "lucide-react";

export function ContactEditor() {
  const { data: cmsData, loading } = useCMS("contact");
  const [data, setData] = useState<CMSContact>(defaultContact);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("contact", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateLocation = (i: number, field: string, value: string) =>
    setData((p) => {
      const locations = [...p.locations];
      locations[i] = { ...locations[i], [field]: value };
      return { ...p, locations };
    });

  const addLocation = () =>
    setData((p) => ({
      ...p,
      locations: [...p.locations, { name: "", address: "", phone: "", email: "" }],
    }));

  const removeLocation = (i: number) =>
    setData((p) => ({ ...p, locations: p.locations.filter((_, idx) => idx !== i) }));

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
            <Input value={data.hero.badge} onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, badge: e.target.value } }))} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Title</label>
            <Input value={data.hero.title} onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, title: e.target.value } }))} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Description</label>
            <Textarea value={data.hero.description} onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, description: e.target.value } }))} rows={3} />
          </div>
        </div>
      </Card>

      {/* Locations */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Office Locations</h3>
          <Button type="button" variant="outline" size="sm" onClick={addLocation}>
            <Plus size={14} className="mr-1" /> Add Location
          </Button>
        </div>
        <div className="space-y-4">
          {data.locations.map((loc, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{loc.name || `Location ${i + 1}`}</span>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeLocation(i)} className="text-red-500 hover:bg-red-50 px-2">
                  <Trash2 size={16} />
                </Button>
              </div>
              <div className="space-y-2">
                <Input placeholder="Office Name" value={loc.name} onChange={(e) => updateLocation(i, "name", e.target.value)} />
                <Textarea placeholder="Address" value={loc.address} onChange={(e) => updateLocation(i, "address", e.target.value)} rows={2} />
                <Input placeholder="Phone" value={loc.phone} onChange={(e) => updateLocation(i, "phone", e.target.value)} />
                <Input placeholder="Email" value={loc.email} onChange={(e) => updateLocation(i, "email", e.target.value)} />
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
          <><Save className="mr-2" size={16} /> Save Contact Page</>
        )}
      </Button>
    </div>
  );
}
