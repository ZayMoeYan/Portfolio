import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1b263b] border-t border-[#415a77]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-[#e0e1dd] mb-4">Dr. Alex Morrison</h3>
            <p className="text-[#778da9] text-sm leading-relaxed">
              Board-certified plastic surgeon specializing in aesthetic and reconstructive procedures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-[#e0e1dd] mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                About Me
              </Link>
              <Link to="/services" className="block text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                Services
              </Link>
              <Link to="/blogs" className="block text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="block text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg text-[#e0e1dd] mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a href="tel:+1234567890" className="flex items-center text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                <Phone size={16} className="mr-2" />
                +1 (234) 567-8900
              </a>
              <a href="mailto:contact@drmorrison.com" className="flex items-center text-[#778da9] hover:text-[#e0e1dd] text-sm transition-colors">
                <Mail size={16} className="mr-2" />
                contact@drmorrison.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#778da9] hover:text-[#e0e1dd] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#778da9] hover:text-[#e0e1dd] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#778da9] hover:text-[#e0e1dd] transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#415a77]/30 pt-8">
          <p className="text-center text-[#778da9] text-sm">
            © {new Date().getFullYear()} Dr. Alex Morrison. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
