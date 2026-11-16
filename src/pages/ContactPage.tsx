import {useEffect, useState, type FormEvent} from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import {BUSINESS_CONFIG, buildWhatsAppUrl} from '@/src/config/business';
import {WhatsAppIcon} from '@/src/components/WhatsAppIcon';
import type {ContactEnquiryPrefill} from '@/src/types';

interface ContactPageProps {
  prefill?: ContactEnquiryPrefill | null;
  onClearPrefill?: () => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function ContactPage({prefill, onClearPrefill}: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    message: prefill?.message || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill?.message) {
      setForm((prev) => ({
        ...prev,
        message: prefill.message || prev.message,
      }));
      setSubmitted(false);
    }
  }, [prefill]);

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    const digitsOnly = values.phone.replace(/\D/g, '');
    if (!digitsOnly || digitsOnly.length < 10 || digitsOnly.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message =
        'Please include your tool or enquiry message (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      onClearPrefill?.();
    }
  };

  const handleResetForm = () => {
    setForm({name: '', phone: '', email: '', message: ''});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-50 min-h-[70vh]">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Subasri Power Tools
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Visit our store at Namakkal Bazaar, send an enquiry using the form below, or
            message us directly on WhatsApp for product availability.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Store Details + Google Maps */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">
                    Store Information
                  </p>
                  <h2 className="text-xl font-bold text-[#0B1F3A]">
                    {BUSINESS_CONFIG.name}
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 text-orange-600 shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
                        Address
                      </p>
                      <p className="leading-relaxed">{BUSINESS_CONFIG.fullAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="w-4 h-4 text-orange-600 shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
                        Opening Hours
                      </p>
                      <p className="font-medium tabular-nums">
                        {BUSINESS_CONFIG.openingHours}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {BUSINESS_CONFIG.openingDaysNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      className="w-4 h-4 text-orange-600 shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
                        Phone Number
                      </p>
                      <p className="tabular-nums">{BUSINESS_CONFIG.phoneDisplay}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      'Hello Subasri Power Tools, I would like to enquire about tools and store availability.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                  <a
                    href={BUSINESS_CONFIG.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] border border-slate-300 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-medium rounded-md transition-colors whitespace-nowrap"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Google Maps Location Embed */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#0B1F3A]">
                    Location Map — Namakkal Bazaar
                  </h3>
                  <a
                    href={BUSINESS_CONFIG.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
                <div className="aspect-[4/3] w-full bg-slate-100">
                  <iframe
                    title="Subasri Power Tools Namakkal Location"
                    src={BUSINESS_CONFIG.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <div className="space-y-1.5 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Enquiry Form
                </p>
                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-600">
                  {prefill?.subject
                    ? `Selected topic: ${prefill.subject}`
                    : 'Share the tool category, quantity, or project requirement you need assistance with.'}
                </p>
              </div>

              {submitted ? (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold text-[#0B1F3A]">
                        Enquiry Recorded — Thank You, {form.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your enquiry details have been validated and prepared. You can also
                        forward this message directly on WhatsApp for faster counter
                        response during store hours ({BUSINESS_CONFIG.openingHours}).
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-md p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <p>
                      <span className="font-semibold text-[#0B1F3A]">Phone:</span>{' '}
                      <span className="tabular-nums">{form.phone}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1F3A]">Email:</span>{' '}
                      {form.email}
                    </p>
                    <p>
                      <span className="font-semibold text-[#0B1F3A]">Message:</span>{' '}
                      {form.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={buildWhatsAppUrl(
                        `Hello Subasri Power Tools,\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEnquiry: ${form.message}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center px-4 py-2.5 min-h-[44px] border border-slate-300 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-medium rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#0B1F3A] mb-1.5"
                    >
                      Full Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({...prev, name: e.target.value}));
                        if (errors.name) setErrors((prev) => ({...prev, name: undefined}));
                      }}
                      placeholder="Enter your name"
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-md border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-slate-300 focus:border-[#0B1F3A]'
                      }`}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-red-700 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#0B1F3A] mb-1.5"
                      >
                        Phone Number <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((prev) => ({...prev, phone: e.target.value}));
                          if (errors.phone)
                            setErrors((prev) => ({...prev, phone: undefined}));
                        }}
                        placeholder="10-digit mobile number"
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-md border bg-slate-50 focus:bg-white focus:outline-none transition-colors tabular-nums ${
                          errors.phone
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-slate-300 focus:border-[#0B1F3A]'
                        }`}
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-xs text-red-700 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#0B1F3A] mb-1.5"
                      >
                        Email Address <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({...prev, email: e.target.value}));
                          if (errors.email)
                            setErrors((prev) => ({...prev, email: undefined}));
                        }}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-md border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-slate-300 focus:border-[#0B1F3A]'
                        }`}
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs text-red-700 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#0B1F3A] mb-1.5"
                    >
                      Message / Tool Requirement <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => {
                        setForm((prev) => ({...prev, message: e.target.value}));
                        if (errors.message)
                          setErrors((prev) => ({...prev, message: undefined}));
                      }}
                      placeholder="Describe the power tools, equipment category, or plan enquiry..."
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-slate-50 focus:bg-white focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-slate-300 focus:border-[#0B1F3A]'
                      }`}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1.5 text-xs text-red-700 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-[#0B1F3A] hover:bg-[#132d52] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Enquiry</span>
                    </button>
                    <p className="text-xs text-slate-500">
                      Fields marked with <span className="text-orange-600">*</span> are
                      required.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
