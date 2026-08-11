import React, { useState, useEffect } from 'react';
import { MOCK_PLANS } from '../data/mockData';
import { CheckCircle2, Sparkles} from 'lucide-react';
import { PlanSkeletonGrid } from '../components/common/SkeletonLoaders';

interface RetailProps {
  onOpenCheckAvailability: () => void;
  onNavigate: (path: string) => void;
  isLoading?: boolean;
}

export const RetailPage: React.FC<RetailProps> = ({ onOpenCheckAvailability, onNavigate, isLoading = false }) => {
  const [billingCycle, setBillingCycle] = useState<'1' | '3' | '6' | '12'>('1');
  const [internalLoading, setInternalLoading] = useState(isLoading);

  useEffect(() => {
    setInternalLoading(isLoading);
  }, [isLoading]);

  const retailPlans = MOCK_PLANS.filter((p) => p.category === 'residential');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded-full">
            Residential FTTH Fiber Broadband
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Truly Unlimited Fiber Home Plans
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Enjoy symmetric speeds, 100% optical stability, zero data caps, and 4K streaming for your home.
          </p>
        </div>

        {/* Tenure Switcher */}
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          {[
            { id: '1', label: '1 Month' },
            { id: '3', label: '3 Months (5% Off)' },
            { id: '6', label: '6 Months (1 Free Mo)' },
            { id: '12', label: '1 Year (2 Free Mo)' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setBillingCycle(item.id as any)}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition ${
                billingCycle === item.id
                  ? 'bg-yellow-400 text-navy-deep font-extrabold shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        {internalLoading ? (
          <PlanSkeletonGrid count={4} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {retailPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-900 border ${
                  plan.popular ? 'border-yellow-400 shadow-yellow-400/10 shadow-2xl relative scale-105' : 'border-slate-800'
                } rounded-3xl p-6 flex flex-col justify-between hover:border-yellow-400 transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-navy-deep text-[10px] font-black uppercase rounded-full tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{plan.title}</div>
                  <div className="text-3xl font-black text-white mt-1 font-mono">{plan.speedMbps} Mbps</div>

                  <div className="my-6 border-y border-slate-800 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-yellow-400 font-mono">₹{plan.priceMonthly}</span>
                      <span className="text-xs text-slate-400">/ month + GST</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Truly Unlimited Data (No FUP)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Symmetric 1:1 Upload & Download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Free Wi-Fi Dual-Band Router*</span>
                    </div>
                    {plan.ottInclusions && plan.ottInclusions.length > 0 && (
                      <div className="flex items-center gap-2 text-yellow-300 font-bold">
                        <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span>{plan.ottInclusions.join(', ')} Included</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <button
                    onClick={onOpenCheckAvailability}
                    className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition"
                  >
                    GET CONNECTION
                  </button>
                  <button
                    onClick={() => onNavigate('/caf')}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[11px] rounded-xl transition"
                  >
                    Fill Online CAF Form
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

