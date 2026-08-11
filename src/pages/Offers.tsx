import React, { useState, useEffect } from 'react';
import { MOCK_OFFERS } from '../data/mockData';
import {  Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { PlanSkeletonGrid } from '../components/common/SkeletonLoaders';

interface OffersProps {
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
  isLoading?: boolean;
}

export const OffersPage: React.FC<OffersProps> = ({  onOpenCheckAvailability, isLoading = false }) => {
  const [internalLoading, setInternalLoading] = useState(isLoading);

  useEffect(() => {
    setInternalLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Exclusive Broadband & OTT Deals
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Special Offers & Festivity Schemes
          </h1>
          <p className="text-sm text-slate-300">
            Get free Wi-Fi 6 routers, zero installation fees, and bundled OTT subscriptions on long-term recharges.
          </p>
        </div>

        {internalLoading ? (
          <PlanSkeletonGrid count={3} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {MOCK_OFFERS.map((offer) => (
              <div key={offer.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-yellow-400 transition group">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 font-mono">
                    CODE: {offer.promoCode}
                  </span>

                  <h3 className="text-2xl font-black text-white mt-4 mb-2 group-hover:text-yellow-400 transition">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800 pt-4">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    <span>Valid till: <strong className="text-white">{offer.validityDate}</strong></span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={onOpenCheckAvailability}
                    className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-2"
                  >
                    CLAIM OFFER NOW <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

