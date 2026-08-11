import React from 'react';
import { SpeedGauge } from '../components/ui/SpeedGauge';
import { ShieldCheck, Zap, Server, Activity } from 'lucide-react';

export const SpeedTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-800 text-slate-300 font-sans py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> High-Precision Fiber Diagnostic
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ZITA Speed Test Engine
          </h1>
          <p className="text-sm text-slate-400">
            Measure real-time ping latency, jitter, download throughput, and upload bandwidth directly to Kolkata POP Server.
          </p>
        </div>

        {/* Speed Tester Component */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 sm:p-12 flex justify-center shadow-2xl">
          <SpeedGauge />
        </div>

        {/* Test Diagnostics Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/90 border border-zinc-700 rounded-2xl space-y-2">
            <Server className="w-6 h-6 text-yellow-400" />
            <h3 className="text-base font-bold text-white">Nearest Server POP</h3>
            <p className="text-xs text-slate-400">Salt Lake Sector V Central Gateway (100Gbps Direct Link)</p>
          </div>

          <div className="p-6 bg-zinc-900/90 border border-zinc-700 rounded-2xl space-y-2">
            <Activity className="w-6 h-6 text-yellow-400" />
            <h3 className="text-base font-bold text-white">Symmetric Bandwidth</h3>
            <p className="text-xs text-slate-400">1:1 equal upload and download speeds with zero data capping.</p>
          </div>

          <div className="p-6 bg-zinc-900/90 border border-zinc-700 rounded-2xl space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Low Gaming Latency</h3>
            <p className="text-xs text-slate-400">Sub-10ms ping to major gaming & streaming server clusters in India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
