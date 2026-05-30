import { useEffect, useState } from "react";
import { saveCMSContent } from "../../../lib/cms";
import { useCMS, defaultReviews } from "../../../hooks/useCMS";
import type { CMSReviews, CMSReview } from "../../../lib/cms";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Loader2, Save, CheckCircle, Plus, Trash2, Star } from "lucide-react";

const emptyReview = (): CMSReview => ({
  id: Date.now(),
  name: "",
  procedure: "",
  rating: 5,
  comment: "",
  date: new Date().toISOString().split("T")[0],
});

export function ReviewsEditor() {
  const { data: cmsData, loading } = useCMS("reviews");
  const [data, setData] = useState<CMSReviews>(defaultReviews);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading) setData(cmsData);
  }, [loading, cmsData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCMSContent("reviews", data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateReview = (i: number, field: keyof CMSReview, value: string | number) =>
    setData((p) => {
      const reviews = [...p.reviews];
      reviews[i] = { ...reviews[i], [field]: value };
      return { ...p, reviews };
    });

  const addReview = () =>
    setData((p) => ({ ...p, reviews: [...p.reviews, emptyReview()] }));

  const removeReview = (i: number) =>
    setData((p) => ({ ...p, reviews: p.reviews.filter((_, idx) => idx !== i) }));

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

      {/* Reviews */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Reviews ({data.reviews.length})</h3>
          <Button type="button" variant="outline" size="sm" onClick={addReview}>
            <Plus size={14} className="mr-1" /> Add Review
          </Button>
        </div>
        <div className="space-y-4">
          {data.reviews.map((review, i) => (
            <div key={review.id} className="rounded-lg border border-gray-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => updateReview(i, "rating", star)}
                      className="focus:outline-none"
                    >
                      <Star
                        size={18}
                        className={star <= review.rating ? "fill-[#0046FF] text-[#0046FF]" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeReview(i)} className="text-red-500 hover:bg-red-50 px-2">
                  <Trash2 size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-600">Patient Name</label>
                  <Input value={review.name} onChange={(e) => updateReview(i, "name", e.target.value)} placeholder="Full name" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-600">Procedure</label>
                  <Input value={review.procedure} onChange={(e) => updateReview(i, "procedure", e.target.value)} placeholder="e.g. Rhinoplasty" />
                </div>
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-xs font-medium text-gray-600">Comment</label>
                <Textarea value={review.comment} onChange={(e) => updateReview(i, "comment", e.target.value)} rows={2} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">Date</label>
                <Input type="date" value={review.date} onChange={(e) => updateReview(i, "date", e.target.value)} />
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
          <><Save className="mr-2" size={16} /> Save Reviews</>
        )}
      </Button>
    </div>
  );
}
