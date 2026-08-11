import React from 'react';


export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Legal & Regulatory Compliance</div>
          <h1 className="text-3xl font-black text-white">Privacy Policy & Data Security</h1>
          <p className="text-xs text-slate-400">Effective Date: January 1, 2026 | Compliant with IT Act 2000 & TRAI Guidelines</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">1. Information Collection & Customer KYC</h2>
            <p>
              In compliance with the Department of Telecommunications (DOT), Government of India, ZITA Telecom collects subscriber identification documents including Aadhaar, Passport, Voter ID, and passport photographs for CAF (Customer Application Form) verification.
            </p>
          </section>

          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">2. Data Usage & Encryption</h2>
            <p>
              Your personal data, billing addresses, and recharge payment records are stored in encrypted database clusters in India. We do not sell, rent, or trade customer metadata to third-party advertising companies.
            </p>
          </section>

          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">3. Network Log Retention</h2>
            <p>
              As per regulatory requirements, NAT IP log allocations and MAC address session timestamps are retained for the mandatory statutory period specified by TRAI and DOT regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
