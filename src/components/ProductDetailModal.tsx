import {useEffect} from 'react';
import {Check, MessageCircle, X} from 'lucide-react';
import {buildWhatsAppUrl} from '@/src/config/business';
import {SafeImage} from '@/src/components/SafeImage';
import type {ProductItem} from '@/src/types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquireContact: (productName: string) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onEnquireContact,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = `Hello Subasri Power Tools, I would like to enquire about "${product.name}" (${product.category}). Please share availability and pricing details.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06101E]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-md bg-white/90 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="bg-slate-100 aspect-[4/3] md:aspect-auto md:min-h-[360px]">
            <SafeImage
              src={product.image}
              alt={product.name}
              fallbackLabel={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Product Overview */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-wider uppercase text-orange-600">
                {product.category}
              </p>
              <h2
                id="product-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#0B1F3A] leading-tight pr-8"
              >
                {product.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  Typical Applications
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {product.applications.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 text-orange-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  Key Highlights
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] shrink-0 mt-2"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                {product.availabilityNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquireContact(product.name);
                }}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 min-h-[44px] border border-slate-300 hover:border-[#0B1F3A] text-[#0B1F3A] text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
