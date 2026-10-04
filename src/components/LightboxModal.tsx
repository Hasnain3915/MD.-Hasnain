import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PlaceholderFrame } from './PlaceholderFrame';

interface LightboxModalProps {
  token: string | null;
  caption?: string;
  imageUrl?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  token,
  caption,
  imageUrl,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (token || imageUrl) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [token, imageUrl, onClose]);

  if (!token && !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Floating Clean Close Button */}
      <button
        onClick={onClose}
        aria-label="Close fullscreen view"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-50 border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Image Frame */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={caption || 'Fullscreen photo preview'}
            referrerPolicy="no-referrer"
            className="max-h-[85vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
          />
        ) : (
          <div className="w-full max-w-2xl bg-[#111827] rounded-2xl p-6 border border-white/10">
            <PlaceholderFrame
              token={token || 'PREVIEW'}
              aspectRatio="16:9"
              label={caption}
              className="w-full h-72 sm:h-96"
              showExpandHint={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};
