import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "../../../lib/supabase";
import { Card } from "../../components/ui/card";
import { FileText, Image, Mail, Settings, ArrowRight } from "lucide-react";

const pages = [
  { label: "Home", path: "/admin/pages/home", description: "Hero, badges, case highlights" },
  { label: "About", path: "/admin/pages/about", description: "Bio, education, timeline, skills" },
  { label: "Services", path: "/admin/pages/services", description: "All surgery services" },
  { label: "Reviews", path: "/admin/pages/reviews", description: "Patient reviews" },
  { label: "Contact", path: "/admin/pages/contact", description: "Contact info & locations" },
];

export function Dashboard() {
  const [inquiryCount, setInquiryCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from("contact_inquiries")
      .select("id", { count: "exact", head: true })
      .then(({ count }) => setInquiryCount(count ?? 0));
  }, []);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0046FF]/10 p-2.5">
              <FileText className="text-[#0046FF]" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Managed Pages</p>
              <p className="text-2xl font-semibold text-gray-900">5</p>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-50 p-2.5">
              <Mail className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Inquiries</p>
              <p className="text-2xl font-semibold text-gray-900">
                {inquiryCount ?? "—"}
              </p>
            </div>
          </div>
        </Card>
        
      </div>

      {/* Pages */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Page Management
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link key={page.path} to={page.path}>
              <Card className="group flex items-center justify-between border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-[#0046FF] hover:shadow-md">
                <div>
                  <p className="font-medium text-gray-900">{page.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{page.description}</p>
                </div>
                <ArrowRight
                  className="text-gray-300 transition-colors group-hover:text-[#0046FF]"
                  size={18}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Quick Actions
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link to="/admin/inquiries">
            <Card className="group flex items-center justify-between border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-green-500 hover:shadow-md">
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Contact Inquiries</p>
                  <p className="text-xs text-gray-500">View & manage form submissions</p>
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-green-500" size={18} />
            </Card>
          </Link>
          <Link to="/admin/settings">
            <Card className="group flex items-center justify-between border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-[#0046FF] hover:shadow-md">
              <div className="flex items-center gap-3">
                <Settings className="text-[#0046FF]" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Site Settings</p>
                  <p className="text-xs text-gray-500">Doctor info, social links</p>
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-[#0046FF]" size={18} />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
