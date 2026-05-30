import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { supabase } from "../../../lib/supabase";
import {
  LayoutDashboard,
  Home,
  User,
  Stethoscope,
  Star,
  Phone,
  Settings,
  Image,
  Mail,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../components/ui/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  {
    icon: Home,
    label: "Pages",
    children: [
      { label: "Home", path: "/admin/pages/home" },
      { label: "About", path: "/admin/pages/about" },
      { label: "Services", path: "/admin/pages/services" },
      { label: "Reviews", path: "/admin/pages/reviews" },
      { label: "Contact", path: "/admin/pages/contact" },
    ],
  },
//   { icon: Image, label: "Media Library", path: "/admin/media" },
  { icon: Mail, label: "Contact Inquiries", path: "/admin/inquiries" },
  { icon: Settings, label: "Site Settings", path: "/admin/settings" },
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [pagesOpen, setPagesOpen] = useState(
    location.pathname.startsWith("/admin/pages")
  );

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#0046FF]">Admin</p>
          <h1 className="text-sm font-semibold text-gray-900 leading-tight">King Plastic Surgery</h1>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          if (item.children) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pagesOpen
                      ? "bg-[#0046FF]/10 text-[#0046FF]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon size={18} />
                    {item.label}
                  </span>
                  {pagesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {pagesOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={onClose}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive(child.path)
                            ? "bg-[#0046FF] text-white font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path!}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.path!)
                  ? "bg-[#0046FF] text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-200 p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const pageTitle = (() => {
    const p = location.pathname;
    if (p === "/admin/dashboard") return "Dashboard";
    if (p === "/admin/pages/home") return "Home Page";
    if (p === "/admin/pages/about") return "About Page";
    if (p === "/admin/pages/services") return "Services Page";
    if (p === "/admin/pages/reviews") return "Reviews Page";
    if (p === "/admin/pages/contact") return "Contact Page";
    if (p === "/admin/media") return "Media Library";
    if (p === "/admin/inquiries") return "Contact Inquiries";
    if (p === "/admin/settings") return "Site Settings";
    return "Admin";
  })();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <Menu size={22} />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">{pageTitle}</h2>
          </div>
          <Link
            to="/"
            target="_blank"
            className="text-sm text-[#0046FF] hover:underline hidden sm:block"
          >
            View Website →
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
