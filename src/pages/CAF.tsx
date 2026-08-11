import React, { useState } from 'react';
import { MOCK_LOCATIONS, MOCK_PLANS } from '../data/mockData';
import { FileText, CheckCircle2,  UploadCloud } from 'lucide-react';

export const CAFPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    aadhaarNumber: '',
    address: '',
    city: 'Kolkata',
    district: 'Kolkata',
    pincode: '700091',
    selectedPlan: 'Popular Fiber Max (100Mbps)',
    identityDocType: 'Aadhaar Card'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> DOT & TRAI Compliant E-KYC
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Customer Application Form (CAF)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Submit your details online for instant subscriber onboarding and fiber line feasibility check.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-2xl font-black text-white">CAF Submission Received!</h2>
            <div className="text-xs text-slate-300 font-mono bg-slate-800 p-4 rounded-xl max-w-md mx-auto">
              Reference Application ID: <span className="text-yellow-400 font-bold">CAF-WB-2026-88912</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our Salt Lake Central NOC team has dispatched a fiber engineer for site survey and feasibility verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-slate-900 border border-slate-800 rounded-3xl space-y-8">
            {/* Steps bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-6 text-xs font-bold">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-yellow-400' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full border flex items-center justify-center text-[10px]">1</span>
                <span>Personal Info</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-yellow-400' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full border flex items-center justify-center text-[10px]">2</span>
                <span>Installation Address</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-yellow-400' : 'text-slate-500'}`}>
                <span className="w-6 h-6 rounded-full border flex items-center justify-center text-[10px]">3</span>
                <span>KYC Verification</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Subscriber Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name (As per Aadhaar)</label>
                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                      placeholder="e.g. Anirban Mukherjee"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Mobile Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                    placeholder="name@domain.com"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl"
                >
                  NEXT: INSTALLATION ADDRESS
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Fiber Installation Premises Address</h3>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">House / Flat No., Premises Name, Street</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                    placeholder="e.g. Flat 4B, Salt Lake Sector V, Block EP"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">City / Town</label>
                    <input
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">District</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                    >
                      {MOCK_LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.city}>{loc.city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Pincode</label>
                    <input
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl"
                  >
                    BACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-xs rounded-xl"
                  >
                    NEXT: KYC PROOF
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Govt Identity Proof & Plan Selection</h3>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Aadhaar / Voter ID Number</label>
                  <input
                    required
                    value={formData.aadhaarNumber}
                    onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white font-mono"
                    placeholder="XXXX - XXXX - XXXX"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Selected Fiber Plan</label>
                  <select
                    value={formData.selectedPlan}
                    onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                    className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white"
                  >
                    {MOCK_PLANS.map((p) => (
                      <option key={p.id} value={p.title}>{p.title} ({p.speedMbps} Mbps - ₹{p.priceMonthly}/mo)</option>
                    ))}
                  </select>
                </div>

                <div className="p-6 border-2 border-dashed border-slate-700 rounded-2xl text-center space-y-2">
                  <UploadCloud className="w-8 h-8 text-yellow-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Simulated Document Upload</div>
                  <p className="text-[10px] text-slate-400">Front & Back scan of Aadhaar Card attached automatically in demo sandbox.</p>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl"
                  >
                    SUBMIT CAF APPLICATION
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
