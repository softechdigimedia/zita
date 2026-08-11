import React, { useState } from 'react';
import { ZITA_OFFICE_HEADQUARTERS } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Connect With Us</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Customer Support & Headquarters
          </h1>
          <p className="text-sm text-slate-300">
            Reach out to our 24/7 Network Operations Center (NOC) or visit our corporate office in Salt Lake Sector V, Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-black text-white border-b border-slate-800 pb-4">
                Headquarters Address
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{ZITA_OFFICE_HEADQUARTERS.name}</div>
                    <div className="mt-1 leading-relaxed">{ZITA_OFFICE_HEADQUARTERS.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Phone className="w-5 h-5 text-pink-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">24/7 Support Helpline</div>
                    <div className="font-bold text-white font-mono">{ZITA_OFFICE_HEADQUARTERS.supportHotline}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Support Email</div>
                    <div className="font-bold text-white font-mono">{ZITA_OFFICE_HEADQUARTERS.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Office Timings</div>
                    <div className="font-bold text-white">Mon - Sat: 9:30 AM - 7:00 PM (NOC 24x7)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Escalation Matrix */}
            <div className="bg-gradient-to-br from-[#00113D] to-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <ShieldCheck className="w-8 h-8 text-yellow-400" />
              <h3 className="text-base font-bold text-white">Grievance & Escalation</h3>
              <p className="text-xs text-slate-300">
                For un-resolved tickets after 24 hours, contact Grievance Officer at <span className="text-yellow-400 font-bold">grievance@zataindia.com</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
            <h2 className="text-2xl font-black text-white">Send Us a Direct Message</h2>
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Thank You for Contacting ZITA</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your ticket has been logged with our Kolkata Central NOC. A support executive will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                    <input required className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white" placeholder="Name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                    <input required type="tel" className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white" placeholder="+91 9876543210" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                  <input required type="email" className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white" placeholder="you@domain.com" />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Message / Query</label>
                  <textarea required rows={4} className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white" placeholder="How can we assist you today?" />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> SUBMIT MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
