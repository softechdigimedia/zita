import React, { useState } from 'react';
import { ThemeToggle } from '../common/ThemeToggle';
import {
  Home,
  User,
  Wifi,
  Cpu,
  Headphones,
  Globe,
  Zap,
  ShoppingBag,
  Building2,
  Tv,
  Film,
  Crown,
  MapPin,
  Shield,
  RotateCcw,
  FileText,
  Users,
  Menu,
  X,
  Gauge
} from 'lucide-react';

interface BottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSpeedGauge: () => void;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPath,
  onNavigate,
  onOpenSpeedGauge,
  isMobileMenuOpen: isMobileMenuOpenProp,
  setIsMobileMenuOpen: setIsMobileMenuOpenProp
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const isMenuOpen = isMobileMenuOpenProp !== undefined ? isMobileMenuOpenProp : internalMenuOpen;
  const setMenuOpen = (open: boolean) => {
    if (setIsMobileMenuOpenProp) {
      setIsMobileMenuOpenProp(open);
    } else {
      setInternalMenuOpen(open);
    }
  };

  const mainNavItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/profile', label: 'PROFILE', icon: User },
    { path: '/services', label: 'SERVICES', icon: Wifi },
    { path: '/products', label: 'PRODUCTS', icon: Cpu },
    { path: '/contact', label: 'CONTACT', icon: Headphones },
    { path: '/presence', label: 'PRESENCE', icon: Globe }
  ];

  const secondaryNavItems = [
    { path: '/offers', label: 'OFFERS', icon: Zap, isMagenta: true },
    { path: '/retail', label: 'RETAIL', icon: ShoppingBag },
    { path: '/corporate', label: 'CORP', icon: Building2 },
    { path: '/iptv', label: 'IPTV', icon: Tv },
    { path: '/ott', label: 'OTT', icon: Film },
    { path: '/prime', label: 'PRIME', icon: Crown, isGold: true }
  ];

  const footerYellowLinks = [
    { path: '/address', label: 'ADDRESS' },
    { path: '/privacy', label: 'PRIVACY' },
    { path: '/refund', label: 'REFUND' },
    { path: '/caf', label: 'CAF' },
    { path: '/lco', label: 'LCO' }
  ];

  return (
    <>
      {/* DESKTOP FLOATING BOTTOM NAVIGATION BAR (Hidden on small mobile screens, visible lg+) */}
      <div className="fixed bottom-0 left-0 right-0 z-[850] hidden xl:block select-none pointer-events-none pb-2">
        <div className="max-w-7xl mx-auto px-4 pointer-events-auto">
          {/* Main Rounded Zinc Bar */}
          <div className="bg-zinc-900 border border-zinc-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-2.5 flex items-center justify-between gap-1 sm:gap-2 text-slate-400 relative">
            {/* Left Nav Section */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-1 justify-around">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className={`flex flex-col items-center justify-center py-2 px-2.5 sm:px-3 rounded-xl transition group ${
                      isActive
                        ? 'bg-zinc-800 text-yellow-400 font-black border border-yellow-400/60'
                        : 'text-slate-400 hover:text-yellow-400 hover:bg-zinc-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${isActive ? 'text-yellow-400' : 'text-slate-400 group-hover:text-yellow-400'}`} />
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Center Speed Dial Button */}
            <div className="relative -top-4 shrink-0 mx-2">
              <button
                onClick={onOpenSpeedGauge}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950 border-4 border-zinc-800 shadow-2xl flex flex-col items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 via-yellow-500/20 to-yellow-300/20 opacity-50 group-hover:opacity-100 transition" />
                <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-0.5 group-hover:rotate-45 transition-transform" />
                <span className="text-[9px] sm:text-[10px] font-black text-white font-mono tracking-wider">MBPS</span>
              </button>
            </div>

            {/* Right Nav Section */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-1 justify-around">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;

                if (item.isMagenta) {
                  return (
                    <button
                      key={item.path}
                      onClick={() => onNavigate(item.path)}
                      className={`flex flex-col items-center justify-center py-2 px-3 sm:px-4 rounded-xl border transition ${
                        isActive
                          ? 'bg-yellow-400 text-zinc-950 border-yellow-300 shadow-lg font-black'
                          : 'bg-yellow-400/90 hover:bg-yellow-400 text-zinc-950 border-yellow-300/50 shadow-md font-extrabold'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 fill-current" />
                      <span className="text-[10px] sm:text-[11px] font-black tracking-wider">{item.label}</span>
                    </button>
                  );
                }

                if (item.isGold) {
                  return (
                    <button
                      key={item.path}
                      onClick={() => onNavigate(item.path)}
                      className={`flex flex-col items-center justify-center py-2 px-3 sm:px-4 rounded-xl border transition ${
                        isActive
                          ? 'bg-yellow-400 text-zinc-950 border-yellow-200 font-black shadow-lg'
                          : 'bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 font-black border-yellow-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 fill-current" />
                      <span className="text-[10px] sm:text-[11px] font-black tracking-wider">{item.label}</span>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className={`flex flex-col items-center justify-center py-2 px-2.5 sm:px-3 rounded-xl transition group ${
                      isActive
                        ? 'bg-zinc-800 text-yellow-400 font-black border border-yellow-400/60'
                        : 'text-slate-400 hover:text-yellow-400 hover:bg-zinc-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${isActive ? 'text-yellow-400' : 'text-slate-400 group-hover:text-yellow-400'}`} />
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Yellow Sub-Ribbon */}
          <div className="bg-yellow-400 text-zinc-950 font-black text-[11px] uppercase tracking-widest py-1.5 px-6 rounded-b-2xl shadow-md flex items-center justify-center gap-6 sm:gap-10 -mt-1">
            {footerYellowLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`hover:underline hover:text-black transition ${currentPath === link.path ? 'underline font-black' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE RESPONSIVE BOTTOM NAV BAR (For mobile & tablet screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-[850] xl:hidden bg-zinc-900 border-t border-zinc-700 text-slate-300 p-2 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => onNavigate('/')}
          className={`flex flex-col items-center justify-center p-1.5 ${currentPath === '/' ? 'text-yellow-400 font-black' : 'text-slate-400'}`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-extrabold">Home</span>
        </button>

        <button
          onClick={() => onNavigate('/location')}
          className={`flex flex-col items-center justify-center p-1.5 ${currentPath === '/location' || currentPath === '/presence' ? 'text-yellow-400 font-black' : 'text-slate-400'}`}
        >
          <Globe className="w-5 h-5 mb-0.5 text-yellow-400" />
          <span className="text-[10px] font-extrabold">Map</span>
        </button>

        {/* Center Floating Speed Dial Button */}
        <button
          onClick={onOpenSpeedGauge}
          className="relative -top-3 w-14 h-14 rounded-full bg-yellow-400 text-zinc-950 font-black flex flex-col items-center justify-center shadow-lg border-2 border-zinc-900 active:scale-95 transition shrink-0"
        >
          <Gauge className="w-6 h-6 mb-0.5" />
          <span className="text-[8px] font-black">MBPS</span>
        </button>

        <button
          onClick={() => onNavigate('/offers')}
          className={`flex flex-col items-center justify-center p-1.5 ${currentPath === '/offers' ? 'text-yellow-400 font-black' : 'text-slate-400'}`}
        >
          <Zap className="w-5 h-5 mb-0.5 text-yellow-400 fill-current" />
          <span className="text-[10px] font-extrabold text-yellow-400">Offers</span>
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center justify-center p-1.5 text-slate-400 hover:text-white"
        >
          <Menu className="w-5 h-5 mb-0.5 text-yellow-400" />
          <span className="text-[10px] font-extrabold">More</span>
        </button>
      </div>

      {/* MOBILE DRAWER MODAL FOR ALL NAV ITEMS & FOOTER LINKS */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[1000] xl:hidden bg-zinc-950/80 backdrop-blur-md flex flex-col justify-end">
          <div className="bg-zinc-900 border-t-2 border-yellow-400 rounded-t-3xl p-6 text-white max-h-[85vh] overflow-y-auto space-y-6 animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-sm font-black text-yellow-400 uppercase tracking-widest">
                ZITA Telecom Navigation
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-zinc-800 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid of All Navigation Options */}
            <div className="grid grid-cols-2 gap-2.5">
              {[...mainNavItems, ...secondaryNavItems].map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      onNavigate(item.path);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs font-bold transition ${
                      isActive
                        ? 'bg-yellow-400 text-zinc-950 border-yellow-300 font-extrabold'
                        : 'bg-zinc-800/80 border-zinc-700 text-slate-200 hover:bg-zinc-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-yellow-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Yellow Footer Links Bar */}
            <div className="pt-4 border-t border-zinc-800">
              <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Quick Info & Legal</div>
              <div className="flex flex-wrap gap-2">
                {footerYellowLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      onNavigate(link.path);
                      setMenuOpen(false);
                    }}
                    className="px-3 py-1.5 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold rounded-lg hover:bg-yellow-400 hover:text-zinc-950 transition"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
