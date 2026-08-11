import React from 'react';
import { Tv} from 'lucide-react';

interface IPTVProps {
  onOpenCheckAvailability: () => void;
}

export const IPTVPage: React.FC<IPTVProps> = ({ onOpenCheckAvailability }) => {
  const categories = [
    { title: 'HD News & Current Affairs', count: '45 Channels', icons: '📺' },
    { title: '4K Sports & Live Action', count: '30 Channels', icons: '⚽' },
    { title: 'Regional Bangla & Hindi Cinema', count: '120 Channels', icons: '🎬' },
    { title: 'Infotainment & Discovery', count: '25 Channels', icons: '🦁' },
    { title: 'Kids & Cartoons', count: '35 Channels', icons: '🎨' },
    { title: 'Music & Lifestyle', count: '40 Channels', icons: '🎵' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" /> Next-Gen IPTV Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ZITA Play 350+ Live HD Channels
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Stream live TV directly over ZITA high-speed fiber without satellite dish noise or weather disruption.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 hover:border-yellow-400/50 transition">
              <span className="text-3xl">{cat.icons}</span>
              <div>
                <h3 className="text-base font-bold text-white">{cat.title}</h3>
                <span className="text-xs text-yellow-400 font-mono font-bold">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Card */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#00113D] via-[#001A57] to-[#082D8C] border border-slate-700 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold uppercase rounded-full">
              Includes ZITA Smart 4K Box
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">7-Day Catch-Up & Cloud DVR</h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Never miss a news bulletin, live football match, or daily soap episode. Pause live TV, rewind broadcast streams, and record up to 100 hours in cloud storage.
            </p>

            <button
              onClick={onOpenCheckAvailability}
              className="px-6 py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl hover:bg-yellow-300 transition"
            >
              ORDER IPTV BUNDLE
            </button>
          </div>

          <div className="w-full md:w-80 p-6 bg-slate-900/90 border border-slate-700 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-300">
              <span>IPTV Add-On Price</span>
              <span className="text-yellow-400 font-mono font-extrabold">₹150 / mo</span>
            </div>
            <div className="text-[11px] text-slate-400">Available with all 100Mbps and higher fiber plans. Zero installation setup charge.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
