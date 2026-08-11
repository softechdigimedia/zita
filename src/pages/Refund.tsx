import React from 'react';


export const RefundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Customer Protection Policy</div>
          <h1 className="text-3xl font-black text-white">Refund & Cancellation Policy</h1>
          <p className="text-xs text-slate-400">Clear guidelines on online payment refunds, security deposits, and feasibility failure returns</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">1. Feasibility Non-Feasible Refund</h2>
            <p>
              If a customer registers and pays online for a new broadband connection, but the site survey confirms technical non-feasibility (distance from fiber box &gt; 300 meters without POP expansion), 100% of the advance amount will be refunded to the original payment source within 5 to 7 working days.
            </p>
          </section>

          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">2. Security Deposit Return for ONU / Routers</h2>
            <p>
              Security deposits paid for optical network terminals (ONT) or Wi-Fi routers will be refunded upon disconnection of service and physical return of undamaged hardware in working condition along with power adapters.
            </p>
          </section>

          <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <h2 className="text-base font-bold text-white text-yellow-400">3. Monthly Advance Subscription Charges</h2>
            <p>
              Broadband recharges are advance prepaid billing cycles. Once activated and utilized, partial usage mid-cycle refunds are not applicable except in documented SLA service outages exceeding 72 continuous hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
