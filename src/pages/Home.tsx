import React, { useState } from 'react';
import { MOCK_PLANS, MOCK_PRODUCTS, MOCK_FAQS } from '../data/mockData';

import { Wifi, Zap, ShieldCheck, ArrowRight, CheckCircle2, Tv, Sparkles, MapPin, Gauge, Headphones, ChevronDown, ChevronUp,  Globe } from 'lucide-react';
import { NetworkMap } from '../components/map/NetworkMap';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
  onOpenSpeedGauge: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenCheckAvailability,
  onOpenSpeedGauge
}) => {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'residential' | 'gaming' | 'business' | 'prime'>('residential');
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredPlans = MOCK_PLANS.filter((p) => p.category === selectedPlanTab);

  return (
    <div className="min-h-screen bg-zinc-800 text-slate-400 font-sans transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-zinc-900 border-b border-zinc-700">
        {/* Animated Background Line Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffd000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold uppercase tracking-widest shadow-inner">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Next-Gen FTTH Fiber Broadband in India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Experience Connectivity <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                  Without Limits
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                High-speed fiber broadband, enterprise connectivity, 550+ IPTV channels, and 18+ OTT apps built for modern India with 99.9% uptime.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('/services')}
                  className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-base rounded-2xl shadow-xl shadow-yellow-400/20 transition transform active:scale-95 flex items-center justify-center gap-2"
                >
                  Explore Plans <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onOpenCheckAvailability}
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-base rounded-2xl border border-zinc-700 transition flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-yellow-400" /> Check Availability
                </button>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-zinc-700/80 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">500K+</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Connected Homes</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-yellow-400 font-mono">99.9%</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Fiber Uptime</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-yellow-400 font-mono">1000 Mbps</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Max Speed</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Column: Interactive Circular Speed Widget Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-center">
                {/* Glowing Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-zinc-950 font-extrabold text-[11px] rounded-full uppercase tracking-wider shadow-lg">
                  LIVE SPEED TEST READY
                </div>

                <div className="my-6">
                  <div className="w-40 h-40 mx-auto rounded-full bg-zinc-950 border-4 border-yellow-400 flex flex-col items-center justify-center shadow-2xl relative">
                    <Gauge className="w-10 h-10 text-yellow-400 mb-1" />
                    <span className="text-3xl font-black font-mono text-white">1000</span>
                    <span className="text-xs font-black text-yellow-400 tracking-widest">MBPS SPEED</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">Test Your Current Broadband Speed</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Check download, upload latency, and verify if your line is performing at full Giga-Fiber capacity.
                </p>

                <button
                  onClick={onOpenSpeedGauge}
                  className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  LAUNCH SPEED TEST <Gauge className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BROADBAND PLANS SECTION */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              Unlimited High-Speed Broadband Plans
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Pure fiber optic speed with zero FUP throttling, free Wi-Fi 6 router, and OTT entertainment bundles.
            </p>

            {/* Category Switcher Tabs */}
            <div className="mt-8 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto shadow-sm">
              {[
                { id: 'residential', label: 'Residential' },
                { id: 'gaming', label: 'Gaming Giga' },
                { id: 'business', label: 'Business' },
                { id: 'prime', label: 'ZITA Prime' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPlanTab(tab.id as any)}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                    selectedPlanTab === tab.id
                      ? 'bg-yellow-400 text-navy-deep shadow font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Billing Cycle Toggle */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className={selectedBillingCycle === 'monthly' ? 'text-slate-900 dark:text-white font-bold' : ''}>Monthly</span>
              <button
                onClick={() => setSelectedBillingCycle(selectedBillingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="w-12 h-6 rounded-full bg-slate-300 dark:bg-slate-800 p-1 border border-slate-400 dark:border-slate-700 transition relative"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-yellow-400 transition-transform ${
                    selectedBillingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={selectedBillingCycle === 'annual' ? 'text-amber-600 dark:text-yellow-400 font-bold' : ''}>
                Annual (Save Up To 20% + Free Installation)
              </span>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => {
              const price = selectedBillingCycle === 'annual' ? Math.round((plan.priceAnnual || plan.priceMonthly * 10) / 12) : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  className={`relative bg-white dark:bg-slate-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:scale-102 shadow-sm ${
                    plan.popular
                      ? 'border-yellow-400 shadow-2xl shadow-yellow-400/10 ring-1 ring-yellow-400'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-navy-deep font-black text-[10px] uppercase tracking-widest rounded-full shadow">
                      MOST POPULAR CHOICE
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.title}</h3>
                    <div className="mt-4 mb-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-amber-600 dark:text-yellow-400">₹{price}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">/ month</span>
                      {selectedBillingCycle === 'annual' && (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold ml-2">Billed Annually</span>
                      )}
                    </div>

                    {/* Speed Badge */}
                    <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between mb-6">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Connection Speed</span>
                      <span className="text-lg font-black text-slate-900 dark:text-white font-mono flex items-center gap-1">
                        <Zap className="w-4 h-4 text-amber-500 dark:text-yellow-400" /> {plan.speedMbps} Mbps
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300 mb-6">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* OTT Inclusions */}
                    {plan.ottInclusions.length > 0 && (
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="text-[11px] font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Tv className="w-3.5 h-3.5" /> Included Entertainment:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {plan.ottInclusions.map((ott, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[10px] font-semibold rounded-md border border-slate-300 dark:border-slate-700">
                              {ott}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onNavigate('/caf')}
                    className="mt-8 w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-sm rounded-xl transition shadow-md"
                  >
                    BOOK THIS PLAN
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ZITA TELECOM */}
      <section className="py-16 bg-gradient-to-b from-slate-950 via-[#00113D] to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Why Customers Choose ZITA Fiber
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Built on enterprise-grade optic fiber rings engineered for reliability, low ping, and lightning speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '99.9% Guaranteed Uptime', desc: 'Dual-ring fiber topology prevents downtime during cable cuts.', icon: ShieldCheck, color: 'text-emerald-400' },
              { title: 'Ultra-Low Gaming Ping', desc: 'Direct peering with AWS, Google, Cloudflare & Gaming Servers.', icon: Zap, color: 'text-yellow-400' },
              { title: 'Free Wi-Fi 6 Router', desc: 'Included gratis on all quarterly and annual fiber packages.', icon: Wifi, color: 'text-blue-400' },
              { title: '24/7 Priority Support', desc: 'Local technician response within 2 hours in all active sectors.', icon: Headphones, color: 'text-pink-400' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-slate-700 transition">
                  <Icon className={`w-10 h-10 ${item.color} mb-4`} />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REALTIME USER LOCATION MAP SECTION */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-amber-800 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Globe className="w-3.5 h-3.5" /> Live Optical Network Tracking
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Realtime User Location & Coverage Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Pinpoint your location to test optical fiber feasibility, locate nearest city POP nodes, and check local gigabit speeds.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/presence')}
              className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shrink-0"
            >
              Full Screen Network Presence
            </button>
          </div>

          <NetworkMap />
        </div>
      </section>

      {/* HARDWARE SHOWCASE */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                ZITA Hardware Marketplace
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Official Gigabit routers, 4K Android boxes, and mesh Wi-Fi extenders.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/products')}
              className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl border border-slate-300 dark:border-slate-700 transition"
            >
              View All Hardware
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.map((prod) => (
              <div key={prod.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-400/20 text-amber-800 dark:text-yellow-300 border border-amber-400/30">
                    {prod.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-1">{prod.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">{prod.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-amber-600 dark:text-yellow-400 font-mono">₹{prod.price}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 line-through ml-2">₹{prod.mrp}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('/products')}
                    className="px-3 py-1.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Have questions about installation, billing, or equipment? We're here to help.
            </p>
          </div>

          <div className="space-y-4">
            {MOCK_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition shadow-sm">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500 dark:text-yellow-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA BLOCK */}
      <section className="py-16 bg-gradient-to-r from-[#00113D] via-[#001A57] to-[#082D8C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Upgrade to ZITA Giga-Fiber?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get connected today with zero installation fee on annual packs and enjoy uncompressed high-speed broadband.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/caf')}
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-base rounded-2xl shadow-xl transition"
            >
              APPLY ONLINE (CAF FORM)
            </button>
            <button
              onClick={onOpenCheckAvailability}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base rounded-2xl border border-slate-700 transition"
            >
              CHECK LOCAL COVERAGE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
