import React from 'react';
import { ZITA_OFFICE_HEADQUARTERS } from '../data/mockData';
import {  Building2} from 'lucide-react';

export const AddressPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-3">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Registered Corporate Address</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ZITA Telecom Head Office
          </h1>
          <p className="text-sm text-slate-300">
            Official Category-A ISP Licensee & Central Network Operations Hub
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-slate-900 border border-slate-800 rounded-3xl space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <Building2 className="w-10 h-10 text-yellow-400 shrink-0" />
            <div>
              <h2 className="text-2xl font-black text-white">{ZITA_OFFICE_HEADQUARTERS.name}</h2>
              <span className="text-xs text-yellow-400 font-mono font-bold">ISP Category-A • DOT License No: WB/ISP-A/2021/8892</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-yellow-400">Headquarters Address</h3>
              <p className="leading-relaxed font-sans">
                {ZITA_OFFICE_HEADQUARTERS.address}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-yellow-400">Direct Contact Numbers</h3>
              <div className="space-y-1">
                <div>Customer Care: <strong className="text-white font-mono">{ZITA_OFFICE_HEADQUARTERS.supportHotline}</strong></div>
                <div>Technical NOC: <strong className="text-white font-mono">{ZITA_OFFICE_HEADQUARTERS.phone}</strong></div>
                <div>Corporate Support: <strong className="text-white font-mono">{ZITA_OFFICE_HEADQUARTERS.corporateEmail}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
