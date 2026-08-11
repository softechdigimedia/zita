import React from 'react';
import { NetworkMap } from '../components/map/NetworkMap';
import { MOCK_LOCATIONS } from '../data/mockData';
import { MapPin, Server,  Globe } from 'lucide-react';

interface PresenceProps {
  onOpenCheckAvailability: () => void;
}

export const PresencePage: React.FC<PresenceProps> = ({ onOpenCheckAvailability }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white font-sans py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-amber-800 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" /> Eastern India Optical Dark Fiber Network
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            ZITA Network Coverage & Fiber Nodes
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Self-healing DWDM fiber rings connecting Kolkata, Howrah, Durgapur, Siliguri, and 20+ major hubs in West Bengal.
          </p>
        </div>

        {/* Interactive Map Component */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-500 dark:text-yellow-400" /> Live Interactive Fiber Ring Map
            </h2>
            <button
              onClick={onOpenCheckAvailability}
              className="px-4 py-2 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl hover:bg-yellow-300 transition shadow"
            >
              Check My Location
            </button>
          </div>

          <NetworkMap />
        </div>

        {/* City POP Directory */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Active City POP Nodes & Outlets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3 hover:border-yellow-400/50 transition shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-800 dark:text-yellow-300 border border-amber-400/30">
                    {loc.type}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase rounded-full">
                    {loc.isActive ? 'ACTIVE NODE' : 'PLANNED'}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{loc.name}</h3>
                <div className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 dark:text-yellow-400 shrink-0 mt-0.5" />
                  <span>{loc.address}, {loc.city}, {loc.state} - {loc.pincode}</span>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between text-[11px] text-slate-600 dark:text-slate-300">
                  <span>Phone: <strong className="text-slate-900 dark:text-white font-mono">{loc.phone}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
