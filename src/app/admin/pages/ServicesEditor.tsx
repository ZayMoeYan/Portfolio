import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultServices } from "../../../hooks/useCMS";
import type { CMSServices, CMSService } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Loader2, Save, CheckCircle, Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const emptyService = (): CMSService => ({
  id: `service-${Date.now()}`,
  category: "",
  title: "",
  description: "",
  details: "",
  recovery: "",
  risks: "",
});

export function ServicesEditor() {
  const { data: cmsData, loading } = useCMS("services");
  const [data, setData] = useState<CMSServices>(defaultServices);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("services", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateService = (i: number, field: keyof CMSService, value: string) =>
    setData((p) => {
      const services = [...p.services];
      services[i] = { ...services[i], [field]: value };
      return { ...p, services };
    });

  const addService = () => {
    setData((p) => ({ ...p, services: [...p.services, emptyService()] }));
    setExpanded(data.services.length);
  };

  const removeService = (i: number) => {
    setData((p) => ({ ...p, services: p.services.filter((_, idx) => idx !== i) }));
    setExpanded(null);
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
            <Textarea value={data.hero.description} onChange={(e) => setData((p) => ({ ...p, hero: { ...p.hero, description: e.target.value } }))} rows={2} />
          </div>
        </div>
      </Card>

      {/* Services List */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Services ({data.services.length})</h3>
          <Button type="button" variant="outline" size="sm" onClick={addService}>
            <Plus size={14} className="mr-1" /> Add Service
          </Button>
        </div>
        <div className="space-y-3">
          {data.services.map((service, i) => (
            <div key={service.id} className="rounded-lg border border-gray-200">
              <button
                type="button"
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <div>
                  <span className="text-sm font-medium text-gray-900">{service.title || `Service ${i + 1}`}</span>
                  {service.category && (
                    <span className="ml-2 text-xs text-[#0046FF]">{service.category}</span>
                  )}
                </div>
                {expanded === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </button>

              {expanded === i && (
                <div className="border-t border-gray-100 px-4 pb-4 pt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-600">Title</label>
                      <Input value={service.title} onChange={(e) => updateService(i, "title", e.target.value)} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-600">Category</label>
                      <Input value={service.category} onChange={(e) => updateService(i, "category", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">Short Description</label>
                    <Textarea value={service.description} onChange={(e) => updateService(i, "description", e.target.value)} rows={2} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">Procedure Details</label>
                    <Textarea value={service.details} onChange={(e) => updateService(i, "details", e.target.value)} rows={3} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">Recovery Time</label>
                    <Input value={service.recovery} onChange={(e) => updateService(i, "recovery", e.target.value)} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600">Potential Risks</label>
                    <Textarea value={service.risks} onChange={(e) => updateService(i, "risks", e.target.value)} rows={2} />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeService(i)}
                    className="text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={14} className="mr-1" /> Remove Service
                  </Button>
                </div>
              )}
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
          <><Save className="mr-2" size={16} /> Save Services</>
        )}
      </Button>
    </div>
  );
}
