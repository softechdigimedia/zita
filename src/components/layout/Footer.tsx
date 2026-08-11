import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ZITA_OFFICE_HEADQUARTERS } from '../../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCheckAvailability }) => {
  return (
    <footer className="bg-[#000b29] text-slate-300 pt-16 pb-28 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: ZITA Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00113D] border-2 border-yellow-400 flex items-center justify-center">
                <span className="text-yellow-400 font-black italic text-sm">ZITA</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ZITA<span className="text-yellow-400">TELECOM</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              ZITA Telecom provides high-speed optic fiber broadband, enterprise leased lines, digital IPTV, and managed network solutions across West Bengal & Eastern India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenCheckAvailability}
                className="px-4 py-2 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl hover:bg-yellow-300 transition"
              >
                Check Local Feasibility
              </button>
              <button
                onClick={() => onNavigate('/caf')}
                className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-700 transition border border-slate-700"
              >
                Online CAF Application
              </button>
            </div>
          </div>

          {/* Col 2: Services & Solutions */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-400 pl-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><button onClick={() => onNavigate('/services')} className="hover:text-yellow-400 transition">Giga-Fiber Broadband</button></li>
              <li><button onClick={() => onNavigate('/corporate')} className="hover:text-yellow-400 transition">Enterprise Leased Line (1:1)</button></li>
              <li><button onClick={() => onNavigate('/services')} className="hover:text-yellow-400 transition">Managed SD-WAN & Wi-Fi</button></li>
              <li><button onClick={() => onNavigate('/iptv')} className="hover:text-yellow-400 transition">ZITA Play IPTV (550+ HD Channels)</button></li>
              <li><button onClick={() => onNavigate('/ott')} className="hover:text-yellow-400 transition">18+ OTT Entertainment Suite</button></li>
              <li><button onClick={() => onNavigate('/products')} className="hover:text-yellow-400 transition">ZITA Dual-Band Hardware</button></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-400 pl-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><button onClick={() => onNavigate('/profile')} className="hover:text-yellow-400 transition">About ZITA Telecom</button></li>
              <li><button onClick={() => onNavigate('/presence')} className="hover:text-yellow-400 transition">Network Coverage Map</button></li>
              <li><button onClick={() => onNavigate('/offers')} className="hover:text-yellow-400 transition">Promotions & Bundles</button></li>
              <li><button onClick={() => onNavigate('/speedtest')} className="hover:text-yellow-400 transition">Online Speed Test</button></li>
              <li><button onClick={() => onNavigate('/retail')} className="hover:text-yellow-400 transition">Retail Experience Stores</button></li>
              <li><button onClick={() => onNavigate('/prime')} className="hover:text-yellow-400 transition">ZITA Prime Membership</button></li>
              <li><button onClick={() => onNavigate('/lco')} className="hover:text-yellow-400 transition">LCO Partner Program</button></li>
            </ul>
          </div>

          {/* Col 4: Corporate Head Office */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-400 pl-2">
              Corporate HQ
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{ZITA_OFFICE_HEADQUARTERS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">{ZITA_OFFICE_HEADQUARTERS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{ZITA_OFFICE_HEADQUARTERS.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ZITA Telecom Pvt. Ltd. All rights reserved. Registered ISP Category-A.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-semibold">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('/refund')} className="hover:text-white transition">Refund & Cancellation</button>
            <span>•</span>
            <button onClick={() => onNavigate('/address')} className="hover:text-white transition">Address Directory</button>
            <span>•</span>
            <button onClick={() => onNavigate('/caf')} className="hover:text-white transition">CAF Registration</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
