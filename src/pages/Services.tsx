import React, { useState, useEffect } from 'react';
import { MOCK_SERVICES } from '../data/mockData';

import { Wifi, Server, Activity, Radio, Tv, Film, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ServiceSkeletonGrid } from '../components/common/SkeletonLoaders';

interface ServicesProps {
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
  isLoading?: boolean;
}

export const ServicesPage: React.FC<ServicesProps> = ({ onNavigate,  isLoading = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [internalLoading, setInternalLoading] = useState(isLoading);

  useEffect(() => {
    setInternalLoading(isLoading);
  }, [isLoading]);

  const categories = ['All', 'Residential Internet', 'Enterprise Solutions', 'Corporate Internet', 'Wireless Networks', 'Digital TV', 'Entertainment'];

  const filteredServices = selectedCategory === 'All'
    ? MOCK_SERVICES
    : MOCK_SERVICES.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return Wifi;
      case 'Server': return Server;
      case 'Activity': return Activity;
      case 'Radio': return Radio;
      case 'Tv': return Tv;
      default: return Film;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white font-sans py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-amber-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> ZITA Telecom Service Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            High-Performance Network & Digital Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From residential fiber broadband to enterprise leased lines and IPTV entertainment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-yellow-400 text-navy-deep font-extrabold shadow-lg'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Marketplace Grid */}
        {internalLoading ? (
          <ServiceSkeletonGrid count={6} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredServices.map((srv) => {
              const Icon = getIcon(srv.iconName);
              return (
                <div
                  key={srv.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-yellow-400/60 transition group shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00113D] border border-yellow-400/30 flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {srv.category}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-2 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition">
                      {srv.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Starting At</span>
                      <span className="text-base font-black text-amber-600 dark:text-yellow-400 font-mono">{srv.priceStarting}</span>
                    </div>

                    <button
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition flex items-center gap-1.5"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

