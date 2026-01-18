import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/berawaskitchen', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Berawa's Kitchen
            </h3>
            <p className="text-neutral-400 mb-4">
              Authentic Balinese cuisine in the heart of Canggu. Experience the flavors of Indonesia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-primary-400 flex-shrink-0" />
                <span>Jl. Pantai Berawa, Canggu, Bali</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-primary-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@berawaskitchen.com" className="hover:text-primary-400 transition-colors">
                  hello@berawaskitchen.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock size={18} className="mt-1 text-primary-400 flex-shrink-0" />
              <div className="space-y-1">
                <p>Mon–Sun: 8:00 AM – 10:30 PM</p>
                <p className="text-sm text-neutral-400 mt-2">
                  Kitchen closes at 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Berawa's Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

