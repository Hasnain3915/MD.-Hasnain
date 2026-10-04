import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Maximize2 } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  directUrl: string;
  sourceUrl: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    directUrl: 'https://i.postimg.cc/9zS4JDY5/1749476738836-jpg.jpg',
    sourceUrl: 'https://postimg.cc/9zS4JDY5'
  },
  {
    id: 'photo-2',
    directUrl: 'https://i.postimg.cc/KRM1Vm0F/1749476890203-jpg.jpg',
    sourceUrl: 'https://postimg.cc/KRM1Vm0F'
  },
  {
    id: 'photo-3',
    directUrl: 'https://i.postimg.cc/Ln1J7mx2/Portrait-retouching-of-person-20261002235003-jpg.jpg',
    sourceUrl: 'https://postimg.cc/Ln1J7mx2'
  },
  {
    id: 'photo-4',
    directUrl: 'https://i.postimg.cc/HVyrKT6C/Whats-App-Image-2026-10-03-at-5-52-33-AM.jpg',
    sourceUrl: 'https://postimg.cc/HVyrKT6C'
  },
  {
    id: 'photo-5',
    directUrl: 'https://i.postimg.cc/vcV4jG0F/Whats-App-Image-2026-10-03-at-5-52-34-AM.jpg',
    sourceUrl: 'https://postimg.cc/vcV4jG0F'
  },
  {
    id: 'photo-6',
    directUrl: 'https://i.postimg.cc/4m9YMXW4/Whats-App-Image-2026-10-03-at-5-52-35-AM.jpg',
    sourceUrl: 'https://postimg.cc/4m9YMXW4'
  },
  {
    id: 'photo-7',
    directUrl: 'https://i.postimg.cc/CzqRtwcx/Whats-App-Image-2026-10-03-at-5-52-36-AM.jpg',
    sourceUrl: 'https://postimg.cc/CzqRtwcx'
  },
  {
    id: 'photo-8',
    directUrl: 'https://i.postimg.cc/TpDKSTth/Whats-App-Image-2026-10-03-at-5-52-37-AM.jpg',
    sourceUrl: 'https://postimg.cc/TpDKSTth'
  },
  {
    id: 'photo-9',
    directUrl: 'https://i.postimg.cc/kBb2Z7Tt/Whats-App-Image-2026-10-03-at-5-52-45-AM.jpg',
    sourceUrl: 'https://postimg.cc/kBb2Z7Tt'
  },
  {
    id: 'photo-10',
    directUrl: 'https://i.postimg.cc/9r7DScL4/Whats-App-Image-2026-10-03-at-5-52-48-AM.jpg',
    sourceUrl: 'https://postimg.cc/9r7DScL4'
  }
];

interface GalleryProps {
  onOpenImage: (imageUrl: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenImage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20 border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Section Header with Navigation Controls */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Moments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 font-sans">
              Gallery
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-2.5 rounded-2xl border transition-all duration-200 ${
                canScrollLeft
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white hover:border-cyan-400/40 cursor-pointer shadow-sm'
                  : 'border-white/5 bg-white/2 text-slate-600 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`p-2.5 rounded-2xl border transition-all duration-200 ${
                canScrollRight
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white hover:border-cyan-400/40 cursor-pointer shadow-sm'
                  : 'border-white/5 bg-white/2 text-slate-600 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 px-1 -mx-1 select-none scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenImage(photo.directUrl)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenImage(photo.directUrl);
                }
              }}
              style={{ scrollSnapAlign: 'start' }}
              className="group relative w-64 sm:w-72 md:w-80 aspect-3/4 sm:aspect-4/5 shrink-0 rounded-2xl overflow-hidden border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-slate-900/50 shadow-xl relative card-shine hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              {/* Pure visual image with clean object-cover and error fallback */}
              <img
                src={photo.directUrl}
                alt={`Gallery photo ${index + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  // If image fails to load, gracefully fall back
                  target.style.opacity = '0.7';
                }}
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
              />

              {/* Ambient dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

              {/* Minimal hover indicator */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
