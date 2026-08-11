import React, { useState } from 'react';
import { MOCK_SERVICES } from '../data/mockData';
import { CheckCircle2, ArrowLeft, ShieldCheck, Zap,} from 'lucide-react';

interface ServiceDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenCheckAvailability: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({
  slug,
  onNavigate,

}) => {
  const service = MOCK_SERVICES.find((s) => s.slug === slug) || MOCK_SERVICES[0];
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <button
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </button>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#00113D] via-[#001A57] to-[#082D8C] border border-slate-700 space-y-4">
          <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold uppercase rounded-full">
            {service.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">{service.name}</h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl">{service.description}</p>
        </div>

        {/* Overview & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Key Features
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-pink-400" /> Business Benefits
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deep Details */}
        <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="text-xl font-bold text-white">Technical Architecture & Service SLA</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{service.detailsText}</p>
        </div>

        {/* CTA Form */}
        <div className="p-8 bg-gradient-to-br from-slate-900 to-[#00113D] border border-slate-800 rounded-3xl">
          {formSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-xl font-black text-white">Inquiry Submitted Successfully</h4>
              <p className="text-xs text-slate-300 mt-1">Our sales engineering team will call you within 15 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
              <h3 className="text-xl font-black text-white">Request Quotation / Service Callback</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Your Name" className="bg-slate-800 text-white text-xs px-4 py-3 rounded-xl border border-slate-700" />
                <input required type="tel" placeholder="Phone Number" className="bg-slate-800 text-white text-xs px-4 py-3 rounded-xl border border-slate-700" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-sm rounded-xl">
                SUBMIT INQUIRY
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
