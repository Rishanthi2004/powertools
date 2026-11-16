import {ArrowRight, Clock, MapPin} from 'lucide-react';
import {BUSINESS_CONFIG} from '@/src/config/business';
import {SafeImage} from '@/src/components/SafeImage';
import type {PageId} from '@/src/types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const CORE_PILLARS = [
  {
    number: '01.',
    title: 'Company Experience',
    description:
      'Founded in 2019 in Namakkal, Subasri Power Tools has built hands-on familiarity with the daily demands of civil construction crews, timber workshops, and fabrication shops across the region.',
  },
  {
    number: '02.',
    title: 'Equipment & Build Quality',
    description:
      'We focus on sourcing reliable, work-ready power tools, belt sanders, wood routers, concrete vibrators, rotary drills, and cutting machines suited for repeated site and bench use.',
  },
  {
    number: '03.',
    title: 'Practical Customer Service',
    description:
      'Every enquiry receives straightforward, counter-level guidance on tool suitability, matching accessories, and safe operation—helping customers choose the right machine without guesswork.',
  },
];

const EQUIPMENT_FOCUS = [
  'Corded & cordless power tools for everyday trade installation',
  'Belt sanders and wood routers for carpentry and furniture workshops',
  'Concrete vibrators for structural pouring and site compaction',
  'Drilling, cutting, and grinding machines for masonry and steelwork',
];

export function AboutPage({onNavigate}: AboutPageProps) {
  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            About Subasri Power Tools · Established {BUSINESS_CONFIG.establishedYear}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Serving Namakkal’s Builders, Carpenters &amp; Workshops Since 2019
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            A dedicated local supplier of industrial power tools, woodworking machinery, and
            construction equipment located at Namakkal Bazaar.
          </p>
        </div>
      </section>

      {/* Main Story: Image-and-Text Balanced Split */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[300px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={BUSINESS_CONFIG.images.aboutStore}
                  alt="Subasri Power Tools showroom shelving and service counter"
                  fallbackLabel="Subasri Power Tools Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Who We Are
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
                  Focused on Dependable Power Tools &amp; Industrial Equipment
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Established in {BUSINESS_CONFIG.establishedYear},{' '}
                  <strong className="font-semibold text-[#0B1F3A]">
                    Subasri Power Tools
                  </strong>{' '}
                  operates from Bazaar Street in Namakkal, Tamil Nadu. Our store was started
                  with a clear purpose: to give tradespeople, contractors, and workshop owners
                  dependable access to essential power tools and site equipment in one place.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Rather than spreading thinly across unrelated household goods, we focus
                  specifically on work-grade equipment—from woodworking sanders and routers to
                  concrete vibrators, rotary drills, and metal cutting grinders.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h3 className="text-sm font-semibold text-[#0B1F3A]">
                  Core Equipment Areas
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {EQUIPMENT_FOCUS.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0 mt-2"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience, Quality & Customer Service Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Our Commitment
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
              Experience, Quality &amp; Customer Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-3"
              >
                <span
                  className="block text-sm font-semibold text-orange-600 tabular-nums"
                  style={{fontFamily: 'var(--font-mono)'}}
                >
                  {pillar.number}
                </span>
                <h3 className="text-lg font-semibold text-[#0B1F3A]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location Banner */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] text-white rounded-lg p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Visit Our Namakkal Bazaar Counter
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{BUSINESS_CONFIG.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{BUSINESS_CONFIG.openingHours}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-5 py-2.5 min-h-[44px] bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
