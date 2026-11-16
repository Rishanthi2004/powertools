import {Clock, MapPin, Phone, Wrench} from 'lucide-react';
import {BUSINESS_CONFIG, buildWhatsAppUrl} from '@/src/config/business';
import {PRODUCT_CATEGORIES} from '@/src/data/products';
import type {PageId, ProductCategory} from '@/src/types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (category: ProductCategory) => void;
}

const QUICK_LINKS: {id: PageId; label: string}[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About Us'},
  {id: 'products', label: 'Products'},
  {id: 'contact', label: 'Contact'},
];

export function Footer({onNavigate, onSelectCategory}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06101E] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Short Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span
                className="font-bold text-base tracking-tight whitespace-nowrap"
                style={{fontFamily: 'var(--font-display)'}}
              >
                SUBASRI POWER TOOLS
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Established in {BUSINESS_CONFIG.establishedYear} in Namakkal, Tamil Nadu.
              Supplying contractors, woodworkers, and industrial workshops with dependable
              power tools and jobsite machinery.
            </p>
            {/* Social & Direct Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-400">
              <a
                href={buildWhatsAppUrl(
                  'Hello Subasri Power Tools, I would like to make an enquiry.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                WhatsApp
              </a>
              <span aria-hidden="true" className="text-slate-700">
                /
              </span>
              <a
                href={BUSINESS_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                Google Maps
              </a>
              <span aria-hidden="true" className="text-slate-700">
                /
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                Enquiry Desk
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide mb-4">
              Product Categories
            </h2>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Contact Info */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide mb-4">
              Store Details
            </h2>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{BUSINESS_CONFIG.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{BUSINESS_CONFIG.openingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{BUSINESS_CONFIG.phoneDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Subasri Power Tools, Namakkal. All rights reserved.</p>
          <p>
            Established {BUSINESS_CONFIG.establishedYear} · Namakkal Bazaar, Tamil Nadu 637001
          </p>
        </div>
      </div>
    </footer>
  );
}
