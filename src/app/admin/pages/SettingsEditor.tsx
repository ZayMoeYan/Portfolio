import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultSettings } from "../../../hooks/useCMS";
import type { CMSSettings } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ImageUpload } from "../components/ImageUpload";
import { Loader2, Save, CheckCircle } from "lucide-react";

export function SettingsEditor() {
  const { data: cmsData, loading } = useCMS("settings");
  const [data, setData] = useState<CMSSettings>(defaultSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const set = (path: string, value: string) => {
    const keys = path.split(".");
    setData((prev) => {
      const next = structuredClone(prev);
      let obj: any = next;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("settings", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-[#0046FF]" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      {/* Doctor Info */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-gray-900">Doctor Information</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Full Name</label>
            <Input value={data.doctor.name} onChange={(e) => set("doctor.name", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Title / Specialty</label>
            <Input value={data.doctor.title} onChange={(e) => set("doctor.title", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
            <Input value={data.doctor.phone} onChange={(e) => set("doctor.phone", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" value={data.doctor.email} onChange={(e) => set("doctor.email", e.target.value)} />
          </div>
          <ImageUpload
            label="Profile Photo"
            value={data.doctor.image}
            onChange={(url) => set("doctor.image", url)}
            folder="doctor"
          />
        </div>
      </Card>

      {/* Footer */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-gray-900">Footer Contact Info</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Tagline</label>
            <Input value={data.footer.tagline} onChange={(e) => set("footer.tagline", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
            <Input value={data.footer.phone} onChange={(e) => set("footer.phone", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
            <Input value={data.footer.email} onChange={(e) => set("footer.email", e.target.value)} />
          </div>
        </div>
      </Card>

      {/* Social */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-gray-900">Social Links</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Facebook URL</label>
            <Input value={data.social.facebook} onChange={(e) => set("social.facebook", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">Instagram URL</label>
            <Input value={data.social.instagram} onChange={(e) => set("social.instagram", e.target.value)} />
          </div>
        </div>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="w-full sm:w-auto">
        {saving ? (
          <><Loader2 className="mr-2 animate-spin" size={16} /> Saving...</>
        ) : saved ? (
          <><CheckCircle className="mr-2" size={16} /> Saved!</>
        ) : (
          <><Save className="mr-2" size={16} /> Save Settings</>
        )}
      </Button>
    </div>
  );
}
