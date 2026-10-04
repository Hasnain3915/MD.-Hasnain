import React from 'react';
import { Maximize2, FileText, Image as ImageIcon, Smartphone, Monitor, Database } from 'lucide-react';

interface PlaceholderFrameProps {
  token: string;
  label?: string;
  category?: string;
  aspectRatio?: '16:9' | '4:3' | '3:4' | '9:16' | '1:1';
  className?: string;
  onClick?: () => void;
  showExpandHint?: boolean;
}

export const PlaceholderFrame: React.FC<PlaceholderFrameProps> = ({
  token,
  label,
  category,
  aspectRatio = '16:9',
  className = '',
  onClick,
  showExpandHint = true
}) => {
  // Determine appropriate icon based on token name
  const getIcon = () => {
    if (token.includes('PROFILE')) return ImageIcon;
    if (token.includes('EXPENSE') || token.includes('FAMILY') || token.includes('MUSLIM')) return Smartphone;
    if (token.includes('COFFEE') || token.includes('SMARTTEACH')) return Monitor;
    if (token.includes('CASH') || token.includes('INVENTORY') || token.includes('TALLY') || token.includes('BUSINESS')) return FileText;
    return Database;
  };

  const Icon = getIcon();

  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '3:4': 'aspect-3/4',
    '9:16': 'aspect-9/16 max-w-[280px] mx-auto',
    '1:1': 'aspect-square'
  }[aspectRatio];

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative overflow-hidden rounded-xl border border-slate-700/60 dark:border-slate-800/80 bg-slate-900/70 dark:bg-slate-900/90 text-slate-300 transition-all duration-200 select-none ${aspectClasses} ${
        onClick ? 'cursor-pointer hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-950/20' : ''
      } ${className}`}
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

      {/* Subtle gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/30 pointer-events-none" />

      {/* Frame content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center p-4 text-center">
        {/* Token chip */}
        <div className="flex items-center gap-2 mb-2 font-mono text-[11px] tracking-wider text-teal-400/90 bg-teal-950/60 border border-teal-800/40 px-2.5 py-1 rounded">
          <Icon className="w-3.5 h-3.5" />
          <span>{token}</span>
        </div>

        {label && (
          <p className="text-xs text-slate-300 max-w-[85%] font-medium line-clamp-2 mt-1">
            {label}
          </p>
        )}

        {category && (
          <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-mono">
            {category}
          </span>
        )}

        {showExpandHint && onClick && (
          <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-md bg-slate-800/80 text-slate-400 group-hover:text-teal-300 group-hover:bg-slate-800 transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </div>
  );
};
