import React, { useState } from 'react';
import { ShieldCheck,  Globe, Award,  Zap, Activity, Clock } from 'lucide-react';


interface ProfileProps {
  onNavigate: (path: string) => void;
}

export const ProfilePage: React.FC<ProfileProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'customer_account'>('about');

  // Customer Account Demo State
  const [accountState] = useState({
    customerId: 'ZITA-WB-7009182',
    name: 'Anirban Mukherjee',
    planName: 'Popular Fiber Max (100Mbps)',
    expiryDate: '2026-11-15',
    status: 'ACTIVE',
    dataUsedGB: '412 GB (Truly Unlimited)',
    billingAmount: '₹699 / mo',
    kycStatus: 'VERIFIED (Aadhaar Linked)'
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Page Title & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Corporate & Account Profile</div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              About ZITA Telecom
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'about' ? 'bg-yellow-400 text-navy-deep font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Company Overview & Vision
            </button>
            <button
              onClick={() => setActiveTab('customer_account')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'customer_account' ? 'bg-yellow-400 text-navy-deep font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              My Customer Account
            </button>
          </div>
        </div>

        {activeTab === 'about' ? (
          <div className="space-y-16">
            {/* Story & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded-full">
                  Pioneering Fiber Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Empowering Digital India with Uncompromising Speed & Reliability
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ZITA Telecom is a premier Category-A Internet Service Provider (ISP) headquartered in Salt Lake Sector V, Kolkata. We specialize in FTTH (Fiber-to-the-Home) broadband, enterprise leased lines, managed SD-WAN networks, and digital IPTV streaming platforms.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our core dark fiber rings span across West Bengal and Eastern India, offering sub-millisecond local latency, multi-gigabit core capacity, and direct peering with tier-1 global content delivery networks.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                  <div className="text-3xl font-black text-yellow-400 font-mono">500K+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase mt-1">Active Subscribers</div>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                  <div className="text-3xl font-black text-pink-400 font-mono">120+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase mt-1">City POP Nodes</div>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                  <div className="text-3xl font-black text-emerald-400 font-mono">99.99%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase mt-1">SLA Network Reliability</div>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                  <div className="text-3xl font-black text-blue-400 font-mono">24/7</div>
                  <div className="text-xs text-slate-400 font-bold uppercase mt-1">NOC Support</div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-[#00113D] to-slate-900 border border-slate-800 rounded-3xl space-y-3">
                <Globe className="w-10 h-10 text-yellow-400" />
                <h3 className="text-xl font-black text-white">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To deliver affordable, ultra-fast, and unthrottled fiber optic connectivity to every household, business, and enterprise in Eastern India with zero-lag support and cutting-edge digital entertainment.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#00113D] to-slate-900 border border-slate-800 rounded-3xl space-y-3">
                <Award className="w-10 h-10 text-pink-400" />
                <h3 className="text-xl font-black text-white">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To set the gold standard in Indian telecommunications by engineering self-healing DWDM optical networks and providing frictionless customer service that powers remote work, gaming, and smart cities.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* CUSTOMER ACCOUNT DASHBOARD */
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-[#00113D] to-[#082D8C] rounded-3xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black uppercase rounded-full">
                  {accountState.status}
                </span>
                <h2 className="text-2xl font-black text-white mt-2">{accountState.name}</h2>
                <div className="text-xs text-slate-300 font-mono mt-0.5">Subscriber ID: {accountState.customerId}</div>
              </div>

              <button
                onClick={() => onNavigate('/caf')}
                className="px-6 py-3 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl hover:bg-yellow-300 transition"
              >
                UPGRADE PLAN / RECHARGE
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <Zap className="w-4 h-4 text-yellow-400" /> Current Plan
                </div>
                <div className="text-lg font-bold text-white">{accountState.planName}</div>
                <div className="text-xs text-slate-400">Monthly Rental: <span className="text-yellow-400 font-bold">{accountState.billingAmount}</span></div>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <Activity className="w-4 h-4 text-emerald-400" /> Data Consumption
                </div>
                <div className="text-lg font-bold text-white">{accountState.dataUsedGB}</div>
                <div className="text-xs text-emerald-400 font-semibold">Zero Throttling • High-Speed Active</div>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <Clock className="w-4 h-4 text-pink-400" /> Renewal Date
                </div>
                <div className="text-lg font-bold text-white">{accountState.expiryDate}</div>
                <div className="text-xs text-slate-400">Auto-Renewal Active</div>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> KYC Verification
                </div>
                <div className="text-lg font-bold text-emerald-400">{accountState.kycStatus}</div>
                <div className="text-xs text-slate-400">CAF Document Verified</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
