import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useCMS } from "../../hooks/useCMS";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Get in Touch" },
];

export function Footer() {
  const { data: settings } = useCMS("settings");
  return (
    <footer className="bg-[#ffffff] border-t border-[#0046FF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-[#000000] mb-4">{settings.doctor.name}</h3>
            <p className="text-[#0046FF] text-sm leading-relaxed">
              {settings.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-[#000000] mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-[#0046FF] hover:text-[#000000] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg text-[#000000] mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a href={`tel:${settings.footer.phone}`} className="flex items-center text-[#0046FF] hover:text-[#000000] text-sm transition-colors">
                <Phone size={16} className="mr-2" />
                {settings.footer.phone}
              </a>
              <a href={`mailto:${settings.footer.email}`} className="flex items-center text-[#0046FF] hover:text-[#000000] text-sm transition-colors">
                <Mail size={16} className="mr-2" />
                {settings.footer.email}
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href={settings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0046FF] hover:text-[#000000] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={settings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0046FF] hover:text-[#000000] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0046FF] hover:text-[#000000] transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0046FF]/30 pt-8">
          <p className="text-center text-[#0046FF] text-sm">
            © {new Date().getFullYear()} {settings.doctor.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
