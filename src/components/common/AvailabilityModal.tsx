import React, { useState } from 'react';
import { checkServiceAvailability, getUserGeolocation, geocodeSearchAddress } from '../../services/locationService';
import {  Navigation, Search, CheckCircle, AlertTriangle, X, Sparkles } from 'lucide-react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCAF?: (pincode: string, address: string, serviceType: string) => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  onProceedToCAF
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [pincode] = useState('');
  const [selectedService, setSelectedService] = useState('Broadband');
  const [isLocating, setIsLocating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [availabilityResult, setAvailabilityResult] = useState<{
    status: 'AVAILABLE' | 'LIMITED_COVERAGE' | 'COMING_SOON';
    zoneName: string;
    estimatedSpeed: string;
    installationTime: string;
    message: string;
  } | null>(null);

  // Notify Me Form State
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleGPSLocation = async () => {
    setIsLocating(true);
    setErrorMsg(null);
    try {
      const geo = await getUserGeolocation();
      const res = checkServiceAvailability(geo.lat, geo.lng, pincode);
      setAvailabilityResult(res);
      setStep(2);
    } catch (err: any) {
      setErrorMsg(err.message || 'GPS location error.');
    } finally {
      setIsLocating(false);
    }
  };

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() && !pincode.trim()) {
      setErrorMsg('Please enter a location or PIN code.');
      return;
    }

    setIsLocating(true);
    setErrorMsg(null);

    const geo = await geocodeSearchAddress(searchQuery || pincode);
    setIsLocating(false);

    if (geo) {
      const res = checkServiceAvailability(geo.lat, geo.lng, pincode);
      setAvailabilityResult(res);
      setStep(2);
    } else {
      setErrorMsg('Could not find area. Please check spelling or enter a 6-digit PIN code.');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 text-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            ZITA Fiber Coverage Check
          </div>
          <h3 className="text-2xl font-black tracking-tight text-white">
            Check Service Feasibility
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Find out if high-speed ZITA Giga-Fiber is active in your area.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs rounded-xl flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* STEP 1: Search / GPS Location */}
        {step === 1 && (
          <div className="space-y-4">
            <button
              onClick={handleGPSLocation}
              disabled={isLocating}
              className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-sm rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-yellow-400/20 transition transform active:scale-98 disabled:opacity-50"
            >
              <Navigation className={`w-5 h-5 ${isLocating ? 'animate-spin' : ''}`} />
              {isLocating ? 'Detecting Your GPS Location...' : 'Use My Current Location'}
            </button>

            <div className="relative flex items-center my-4">
              <div className="flex-grow border-t border-zinc-800"></div>
              <span className="flex-shrink mx-4 text-xs font-bold uppercase text-slate-400">OR SEARCH MANUALLY</span>
              <div className="flex-grow border-t border-zinc-800"></div>
            </div>

            <form onSubmit={handleManualSearch} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Select Service Type</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-zinc-800 text-white text-sm px-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:border-yellow-400"
                >
                  <option value="Broadband">Residential Giga-Fiber Broadband</option>
                  <option value="Enterprise">Enterprise Leased Line (1:1 Dedicated)</option>
                  <option value="IPTV">ZITA Play IPTV Combo</option>
                  <option value="Wi-Fi">Managed Wi-Fi & Mesh</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Enter Area Name / City / PIN Code</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Salt Lake, New Town, Park Street, 700091"
                    className="w-full bg-zinc-800 text-white text-sm pl-10 pr-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:border-yellow-400"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLocating}
                className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm rounded-xl border border-zinc-700 transition"
              >
                {isLocating ? 'Checking Coverage...' : 'Check Feasibility'}
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: Availability Result */}
        {step === 2 && availabilityResult && (
          <div className="space-y-6">
            {availabilityResult.status === 'AVAILABLE' ? (
              <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-xl font-black text-emerald-400">ZITA Fiber is AVAILABLE!</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">{availabilityResult.message}</p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono text-slate-300 border-t border-emerald-500/20 pt-3">
                  <div>Zone: <span className="text-white font-bold">{availabilityResult.zoneName}</span></div>
                  <div>Speed: <span className="text-emerald-400 font-bold">{availabilityResult.estimatedSpeed}</span></div>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
                <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                <h4 className="text-xl font-black text-amber-400">Expansion Zone Nearby</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">{availabilityResult.message}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3">
              {availabilityResult.status === 'AVAILABLE' ? (
                <button
                  onClick={() => {
                    onClose();
                    if (onProceedToCAF) {
                      onProceedToCAF(pincode || '700091', searchQuery || 'Salt Lake, Kolkata', selectedService);
                    }
                  }}
                  className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-sm rounded-2xl shadow-lg shadow-yellow-400/20 transition"
                >
                  GET CONNECTED NOW (BOOK ONLINE)
                </button>
              ) : (
                <button
                  onClick={() => setStep(3)}
                  className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-pink-600/30 transition"
                >
                  NOTIFY ME WHEN FIBER ARRIVES
                </button>
              )}

              <button
                onClick={() => setStep(1)}
                className="w-full sm:w-auto py-3 px-4 bg-slate-800 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition"
              >
                Search Another Location
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Lead Capture Form for Unavailable Areas */}
        {step === 3 && (
          <div>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-xl font-black text-white">Thank You! Request Received</h4>
                <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto">
                  We have added your address to our high-priority fiber expansion queue. Our local node engineering team will contact you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-yellow-400 text-navy-deep font-bold text-xs rounded-xl"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                <p className="text-xs text-slate-300">
                  Register your interest so our team can prioritize laying optic fiber lines to your locality:
                </p>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl border border-slate-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl border border-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl border border-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">Installation Address</label>
                  <input
                    type="text"
                    required
                    value={leadForm.address}
                    onChange={(e) => setLeadForm({ ...leadForm, address: e.target.value })}
                    placeholder="Building, Flat No, Street, Locality"
                    className="w-full bg-slate-800 text-white text-xs px-3.5 py-2.5 rounded-xl border border-slate-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-yellow-400 text-navy-deep font-extrabold text-sm rounded-xl hover:bg-yellow-300 transition shadow-lg"
                >
                  SUBMIT EXPANSION REQUEST
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
