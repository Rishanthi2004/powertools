import {useState} from 'react';
import {Wrench} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="w-12 h-12 rounded-lg bg-[#0B1F3A]/10 flex items-center justify-center mb-3 text-[#0B1F3A]">
          <Wrench className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-medium text-slate-600 max-w-[18ch]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
