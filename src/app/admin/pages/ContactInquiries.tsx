import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../../lib/supabase";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Loader2, Trash2, Search, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}

export function ContactInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    const query = supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (search.trim()) {
      query.or(`name.ilike.%${search}%,email.ilike.%${search}%,service.ilike.%${search}%`);
    }

    const { data } = await query;
    setInquiries(data ?? []);
    setLoading(false);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(fetchInquiries, 300);
    return () => clearTimeout(timer);
  }, [fetchInquiries]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry? This cannot be undone.")) return;
    setDeleting(id);
    await supabase.from("contact_inquiries").delete().eq("id", id);
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    setDeleting(null);
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or service..."
          className="pl-9"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="animate-spin text-[#0046FF]" size={32} />
        </div>
      ) : inquiries.length === 0 ? (
        <Card className="border border-gray-200 bg-white p-12 text-center shadow-sm">
          <Mail className="mx-auto mb-3 text-gray-300" size={40} />
          <p className="text-gray-500">No inquiries found.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id} className="border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="font-medium text-gray-900">{inquiry.name}</p>
                    {inquiry.service && (
                      <span className="rounded-full bg-[#0046FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#0046FF]">
                        {inquiry.service}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Mail size={12} />
                      {inquiry.email}
                    </span>
                    {inquiry.phone && (
                      <span className="flex items-center gap-1">
                        <Phone size={12} />
                        {inquiry.phone}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{formatDate(inquiry.created_at)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                  <button
                    onClick={() => setExpanded(expanded === inquiry.id ? null : inquiry.id)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    {expanded === inquiry.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(inquiry.id)}
                    disabled={deleting === inquiry.id}
                    className="text-red-500 hover:bg-red-50 hover:text-red-600 px-2"
                  >
                    {deleting === inquiry.id ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </Button>
                </div>
              </div>

              {expanded === inquiry.id && (
                <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                  <p className="text-sm font-medium text-gray-600 mb-1">Message</p>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{inquiry.message}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {!loading && inquiries.length > 0 && (
        <p className="text-xs text-gray-400 text-right">{inquiries.length} inquir{inquiries.length === 1 ? "y" : "ies"}</p>
      )}
    </div>
  );
}
