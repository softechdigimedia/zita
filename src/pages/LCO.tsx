import React, { useState } from 'react';

import { Users, Handshake, Server, CheckCircle2,  Award } from 'lucide-react';

export const LCOPage: React.FC = () => {
  const [applied, setApplied] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" /> LCO & Franchise Alliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Partner with ZITA Telecom (LCO Network)
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Empowering Local Cable Operators across West Bengal with dark fiber backhaul, gigabit OLT hardware, and 70% revenue share models.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
            <Server className="w-8 h-8 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Free Dark Fiber Feeder Line</h3>
            <p className="text-xs text-slate-300">
              We lay the high-capacity core fiber link directly to your local POP node or control room with zero setup fee.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
            <Award className="w-8 h-8 text-pink-400" />
            <h3 className="text-lg font-bold text-white">Transparent Billing Portal</h3>
            <p className="text-xs text-slate-300">
              Instant subscriber creation, automated online recharge collections, and real-time commission payouts.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
            <Users className="w-8 h-8 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Marketing & Technical Support</h3>
            <p className="text-xs text-slate-300">
              Free promotional banners, local door-to-door marketing collateral, and 24x7 NOC field engineer assistance.
            </p>
          </div>
        </div>

        {/* Partner Application Form */}
        <div className="bg-gradient-to-br from-slate-900 via-[#00113D] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white">Register as an Official LCO Partner</h2>
            <p className="text-xs text-slate-300">Expand your local cable business into high-speed fiber broadband.</p>
          </div>

          {applied ? (
            <div className="text-center py-6 space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">LCO Partnership Request Logged</h3>
              <p className="text-xs text-slate-300">Our Kolkata Franchise Manager will visit your control room for feasibility assessment.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Cable Agency / LCO Name" className="bg-slate-800 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
                <input required placeholder="Proprietor Full Name" className="bg-slate-800 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Mobile Number" className="bg-slate-800 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
                <input required placeholder="Operating Area / District" className="bg-slate-800 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <div>
                <input required placeholder="Estimated Existing Cable Subscriber Count (e.g. 500+)" className="w-full bg-slate-800 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <button type="submit" className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition">
                JOIN ZITA LCO ALLIANCE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
