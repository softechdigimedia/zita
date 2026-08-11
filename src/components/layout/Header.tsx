import React from 'react';
import { Phone, MapPin, Zap, UserCheck, Menu } from 'lucide-react';
import { ZITA_OFFICE_HEADQUARTERS } from '../../data/mockData';
import { ThemeToggle } from '../common/ThemeToggle';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
  onOpenMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({

  onNavigate,
  onOpenCheckAvailability,
  onOpenMobileMenu
}) => {
  return (
    <header className="sticky top-0 z-[800] bg-zinc-900/95 backdrop-blur-md border-b border-zinc-700 text-slate-400 transition-colors duration-300">
      {/* Top Banner Ticker (Hidden on very small screens or compact) */}
      <div className="bg-zinc-900 text-slate-300 text-[11px] sm:text-xs py-1 px-3 sm:px-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="px-1.5 py-0.5 rounded bg-yellow-400 text-zinc-950 font-black text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0">
              OFFER
            </span>
            <span className="text-slate-300 truncate">
              Free Installation & Dual-Band Router on Giga-Fiber Packs!
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-300 font-medium shrink-0">
            <a
              href={`tel:${ZITA_OFFICE_HEADQUARTERS.supportHotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-yellow-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              Toll Free: <span className="font-bold text-white">{ZITA_OFFICE_HEADQUARTERS.supportHotline}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <button
              onClick={() => onNavigate('/caf')}
              className="hover:text-yellow-400 transition flex items-center gap-1"
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              CAF Connection Form
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
        >
          {/* ZITA Signature Circular Logo */}
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 p-0.5 shadow-xl border-2 border-yellow-400 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center relative overflow-hidden">
              <span className="text-yellow-400 font-black tracking-tighter text-xs sm:text-lg italic drop-shadow">
                ZITA
              </span>
            </div>
          </div>

          <div>
            <span className="text-base sm:text-2xl font-black tracking-tight text-white group-hover:text-yellow-400 transition">
              ZITA<span className="text-yellow-400">TELECOM</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
              Giga-Fiber & Enterprise Solutions
            </span>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <ThemeToggle />

          <button
            onClick={onOpenCheckAvailability}
            className="px-2.5 py-1.5 sm:px-4 sm:py-2.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-yellow-400/20 flex items-center gap-1.5 whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-950 shrink-0" />
            <span className="hidden xs:inline">Check</span> Availability
          </button>

          <button
            onClick={() => onNavigate('/caf')}
            className="hidden sm:flex px-3.5 py-2 sm:px-4 sm:py-2.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-yellow-400/20 items-center gap-1.5 whitespace-nowrap"
          >
            <Zap className="w-4 h-4 shrink-0" />
            Book Fiber
          </button>

          {/* Mobile Menu Trigger Button */}
          {onOpenMobileMenu && (
            <button
              onClick={onOpenMobileMenu}
              className="xl:hidden p-2 bg-zinc-800 hover:bg-zinc-700 text-yellow-400 rounded-xl border border-zinc-700 transition flex items-center justify-center shrink-0"
              title="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-yellow-400" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
