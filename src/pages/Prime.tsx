import React from 'react';
import { Crown,  CheckCircle2 } from 'lucide-react';

interface PrimeProps {
  onOpenCheckAvailability: () => void;
  onNavigate: (path: string) => void;
}

export const PrimePage: React.FC<PrimeProps> = ({ onOpenCheckAvailability }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Crown Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-black uppercase tracking-widest">
            <Crown className="w-4 h-4 text-yellow-400" /> ZITA Prime Flagship
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            1 Gbps Gigabit Fiber Ultra
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            For gamers, content creators, 8K video editors, and smart homes with 50+ concurrent connected Wi-Fi devices.
          </p>
        </div>

        {/* Prime Banner Card */}
        <div className="bg-gradient-to-r from-[#00113D] via-[#001A57] to-[#082D8C] border-2 border-yellow-400/60 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Crown className="w-96 h-96 text-yellow-400" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest font-mono">
                FLAGSHIP PERFORMANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                1000 Mbps Speed • Sub-5ms Ping • Dual Wi-Fi 6 Mesh Included
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Free Enterprise Wi-Fi 6 Tri-Band Mesh Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>15+ Premium OTT Apps (Hotstar, SonyLIV, Hoichoi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>ZITA 4K Smart IPTV Box Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>VIP Priority Customer Escalation Path</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-yellow-400/40 rounded-2xl p-6 text-center space-y-4">
              <div className="text-xs text-slate-400 uppercase font-bold">Monthly Rental</div>
              <div className="text-4xl font-black text-yellow-400 font-mono">₹2,499</div>
              <div className="text-[11px] text-slate-400">GST extra • Truly Unlimited Data</div>

              <button
                onClick={onOpenCheckAvailability}
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-black text-xs rounded-xl transition shadow-lg"
              >
                BOOK PRIME 1Gbps NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
