import React, { useState, useEffect } from 'react';
import { NetworkMap } from '../components/map/NetworkMap';
import { Navigation, MapPin, Zap, ShieldCheck, Globe, Wifi, Radio, RefreshCw } from 'lucide-react';
import { getUserGeolocation } from '../services/locationService';

interface LocationMapPageProps {
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
  onCheckAvailabilityAtCoords?: (lat: number, lng: number, address: string) => void;
}

export const LocationMapPage: React.FC<LocationMapPageProps> = ({
  onOpenCheckAvailability,
  onCheckAvailabilityAtCoords
}) => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<string>('Detecting GPS location...');

  useEffect(() => {
    handleLocateUser();
  }, []);

  const handleLocateUser = async () => {
    setLoading(true);
    setStatusMsg('Requesting high-accuracy GPS coordinates...');
    try {
      const location = await getUserGeolocation();
      setCoords({ lat: location.lat, lng: location.lng });
      setStatusMsg('Active Location Verified • Fiber Feasibility 100% Ready');
    } catch (err: any) {
      setStatusMsg('Defaulting to Salt Lake Sector V HQ (Allow GPS for live location)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-slate-300 flex flex-col font-sans">
      {/* Page Header Banner */}
      <div className="bg-zinc-900 border-b border-zinc-700 px-4 py-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-black uppercase tracking-wider mb-2">
              <Navigation className="w-3.5 h-3.5 animate-pulse" /> Live Geolocation & Coverage Engine
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              My Active Location & Optical Fiber Map
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Realtime GPS telemetry, nearest Fiber POP node distance, and instant optical broadband feasibility check.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleLocateUser}
              disabled={loading}
              className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-yellow-400 border border-yellow-400/50 font-extrabold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Re-Detect Position
            </button>
            <button
              onClick={onOpenCheckAvailability}
              className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-yellow-400/20 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Check Broadband Feasibility
            </button>
          </div>
        </div>
      </div>

      {/* Live Telemetry Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-400">GPS Telemetry:</span>
            <span className="text-white font-extrabold">
              {coords ? `${coords.lat.toFixed(4)}° N, ${coords.lng.toFixed(4)}° E` : 'Searching...'}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ping Latency: <strong className="text-emerald-400">1.8ms</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Radio className="w-4 h-4 text-yellow-400" />
              <span>Status: <strong className="text-yellow-400">{statusMsg}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Full Width Interactive Map Section */}
      <div className="flex-1 w-full px-2 py-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto space-y-6">
        {/* Full-Width Map Canvas */}
        <div className="w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl">
          <NetworkMap onCheckAvailabilityAtCoords={onCheckAvailabilityAtCoords} />
        </div>

        {/* Location Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-white">Sub-Meter Optical Accuracy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our GIS mapping correlates your exact latitude and longitude with active underground fiber splices for immediate line feasibility.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-white">Direct POP Optical Node Interconnect</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connected directly to Kolkata's DWDM self-healing ring across Salt Lake, New Town, Park Street, Howrah & Durgapur.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-white">Same-Day Fiber Activation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If your GPS location is within 1.5km of a ZITA active FAT box, our field technicians complete installation within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
