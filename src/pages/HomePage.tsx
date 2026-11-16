import {ArrowRight, Clock, MapPin, MessageCircle} from 'lucide-react';
import {BUSINESS_CONFIG, buildWhatsAppUrl} from '@/src/config/business';
import {CATEGORY_SUMMARIES, PRODUCT_CATEGORIES} from '@/src/data/products';
import {SafeImage} from '@/src/components/SafeImage';
import type {PageId, ProductCategory} from '@/src/types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (category: ProductCategory) => void;
}

const WHY_CHOOSE_ITEMS = [
  {
    index: '01.',
    title: 'Established in Namakkal Since 2019',
    description:
      'Serving local civil contractors, carpentry workshops, and metal fabricators from our Namakkal Bazaar counter with consistent reliability.',
  },
  {
    index: '02.',
    title: 'Trade-Focused Equipment Selection',
    description:
      'Stocking practical power tools, belt sanders, wood routers, concrete vibrators, drilling equipment, and cutting tools for real worksites.',
  },
  {
    index: '03.',
    title: 'Practical Tool Guidance',
    description:
      'Straightforward assistance to help match the right machine, bit, or abrasive accessory to your specific material and site requirement.',
  },
  {
    index: '04.',
    title: 'Extended Daily Store Hours',
    description:
      'Open from 8:30 AM to 9:30 PM at Bazaar Street, Namakkal so crews can source tools and replacements before or after site shifts.',
  },
];

export function HomePage({onNavigate, onSelectCategory}: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src={BUSINESS_CONFIG.images.hero}
            alt="Subasri Power Tools storefront at Mettu Theru, Namakkal"
            priority
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#06101E]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/45"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-orange-400">
              Subasri Power Tools · Namakkal, Tamil Nadu · Est. {BUSINESS_CONFIG.establishedYear}
            </p>
            <h1
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-white text-balance"
              style={{fontFamily: 'var(--font-display)'}}
            >
              Powering Every Project with the Right Tools
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Your dedicated industrial hardware and power tools destination at Namakkal Bazaar.
              Equipping builders, woodworkers, and workshops with durable tools for drilling,
              sanding, routing, concrete compaction, and metal cutting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3 min-h-[46px] border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Equipment Range
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
                Featured Product Categories
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Browse core tool categories stocked at our Namakkal store for woodworking,
                masonry, and industrial fabrication.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F3A] hover:text-orange-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category) => {
              const summary = CATEGORY_SUMMARIES[category];
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onSelectCategory(category)}
                  className="group text-left bg-slate-50 border border-slate-200 hover:border-[#0B1F3A]/40 rounded-lg overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 flex flex-col"
                >
                  <div className="aspect-[4/3] w-full bg-slate-200 overflow-hidden">
                    <SafeImage
                      src={summary.image}
                      alt={`${category} at Subasri Power Tools`}
                      fallbackLabel={category}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold text-[#0B1F3A] group-hover:text-orange-600 transition-colors">
                        {category}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {summary.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] pt-1">
                      <span>Browse Category</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Store Standards
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
              Why Contractors &amp; Workshops Choose Subasri Power Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.index}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-3"
              >
                <span
                  className="block text-sm font-semibold text-orange-600 tabular-nums"
                  style={{fontFamily: 'var(--font-mono)'}}
                >
                  {item.index}
                </span>
                <h3 className="text-lg font-semibold text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Highlights & Call to Action */}
      <section className="py-16 sm:py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Visit Our Store in Namakkal
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                Ready to Equip Your Next Site or Workshop?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Stop by our Bazaar Street showroom in Namakkal to inspect equipment firsthand,
                or send a tool enquiry directly over WhatsApp or our contact form.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 text-orange-400 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{BUSINESS_CONFIG.fullAddress}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock
                    className="w-4 h-4 text-orange-400 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-white tabular-nums">
                      {BUSINESS_CONFIG.openingHours}
                    </p>
                    <p className="text-xs text-slate-400">
                      {BUSINESS_CONFIG.openingDaysNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <a
                href={buildWhatsAppUrl(
                  'Hello Subasri Power Tools, I would like to enquire about tools and equipment.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-5 py-3 min-h-[46px] bg-white text-[#0B1F3A] hover:bg-slate-100 text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Directions &amp; Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
