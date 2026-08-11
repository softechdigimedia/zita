import React from 'react';
import { Film,  CheckCircle2, Play} from 'lucide-react';

interface OTTProps {
  onOpenCheckAvailability: () => void;
}

export const OTTPage: React.FC<OTTProps> = ({ onOpenCheckAvailability }) => {
  const ottApps = [
    { name: 'Disney+ Hotstar', category: 'Movies & Live Cricket', badge: 'PREMIUM' },
    { name: 'SonyLIV', category: 'Sports & TV Series', badge: 'HD' },
    { name: 'Zee5', category: 'Regional Blockbusters', badge: 'HD' },
    { name: 'Hoichoi', category: '100% Bengali Original Series', badge: 'REGIONAL' },
    { name: 'Lionsgate Play', category: 'Hollywood & Action Movies', badge: '4K' },
    { name: 'Discovery+', category: 'Documentaries & Reality', badge: 'HD' },
    { name: 'Sun NXT', category: 'South Indian Superhits', badge: 'REGIONAL' },
    { name: 'AltBalaji', category: 'Hindi Dramas', badge: 'HD' },
    { name: 'ShemarooMe', category: 'Classic Cinema', badge: 'HD' },
    { name: 'Hungama Play', category: 'Music & Shows', badge: 'HD' },
    { name: 'Epic On', category: 'Indian History & Culture', badge: 'HD' },
    { name: 'DocuBay', category: 'Global Documentaries', badge: '4K' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5" /> All-In-One OTT Entertainment Pass
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            15+ Premium OTT Apps in Single Fiber Plan
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            No multiple subscriptions or separate bills. Activate Hoichoi, SonyLIV, Zee5, and Disney+ Hotstar instantly on your ZITA customer ID.
          </p>
        </div>

        {/* OTT Apps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {ottApps.map((app, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-400/60 transition group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#00113D] border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-black">
                    <Play className="w-4 h-4 fill-yellow-400" />
                  </span>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                    {app.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white mt-4 group-hover:text-yellow-400 transition">{app.name}</h3>
                <p className="text-[11px] text-slate-400 mt-1">{app.category}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span>Subscribed via ZITA</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white">Get Bundled Fiber + OTT Today</h2>
          <p className="text-xs text-slate-300">Plans starting at ₹699/month include Hoichoi & Zee5 automatically.</p>
          <button
            onClick={onOpenCheckAvailability}
            className="px-8 py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl hover:bg-yellow-300 transition"
          >
            CHECK FIBER AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};
