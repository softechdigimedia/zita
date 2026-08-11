import React, { useState } from 'react';

import { Server, Activity, CheckCircle2, Headphones } from 'lucide-react';

interface CorporateProps {
  onNavigate: (path: string) => void;
}

export const CorporatePage: React.FC<CorporateProps> = () => {
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded-full">
            Enterprise & Business Connectivity
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Enterprise Internet Leased Line (ILL)
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Dedicated 1:1 unthrottled bandwidth, 99.99% SLA uptime, static IP blocks, and 24x7 priority NOC engineering support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <Server className="w-10 h-10 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Dedicated 1:1 Pipe</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Guaranteed zero contention ratio with symmetrical gigabit throughput tailored for IT hubs, financial exchanges, and data centers.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <Activity className="w-10 h-10 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">99.99% SLA Uptime</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dual-ring optical redundant path architecture automatically failover under 5ms, backed by strict financial SLA credits.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <Headphones className="w-10 h-10 text-pink-400" />
            <h3 className="text-xl font-bold text-white">Dedicated Account Manager</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct hotline access to senior network architect and assigned enterprise relationship lead in Salt Lake Sector V.
            </p>
          </div>
        </div>

        {/* B2B Quotation Form */}
        <div className="bg-gradient-to-r from-[#00113D] via-[#001A57] to-[#082D8C] border border-slate-700 rounded-3xl p-8 sm:p-12">
          {inquirySent ? (
            <div className="text-center py-8 space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-black text-white">Enterprise Proposal Requested</h3>
              <p className="text-xs text-slate-300">Our Enterprise Business Solutions team will send a customized RFQ & SLA proposal.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setInquirySent(true); }} className="space-y-6 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-black text-white">Request Corporate Leased Line Quotation</h2>
                <p className="text-xs text-slate-300">Fill in your corporate requirements for an immediate feasibility test.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Company Name" className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
                <input required placeholder="Contact Person Name" className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="email" placeholder="Corporate Email ID" className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
                <input required type="tel" placeholder="Mobile Number" className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white">
                  <option>100 Mbps Dedicated 1:1</option>
                  <option>500 Mbps Dedicated 1:1</option>
                  <option>1 Gbps High-Speed Pipe</option>
                  <option>10 Gbps Enterprise Backbone</option>
                </select>

                <input required placeholder="Office Location / Landmark" className="bg-slate-900/90 border border-slate-700 text-xs px-4 py-3 rounded-xl text-white" />
              </div>

              <button type="submit" className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition">
                SUBMIT CORPORATE RFQ
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
