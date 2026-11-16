import {buildWhatsAppUrl} from '@/src/config/business';
import {WhatsAppIcon} from '@/src/components/WhatsAppIcon';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(
        'Hello Subasri Power Tools, I would like to enquire about tools and equipment.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Subasri Power Tools on WhatsApp"
      title="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
