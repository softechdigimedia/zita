import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { ZITA_OFFICE_HEADQUARTERS } from '../../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${ZITA_OFFICE_HEADQUARTERS.whatsappNumber}?text=${encodeURIComponent(
    'Hello ZITA Telecom! I would like to inquire about a new Giga-Fiber connection / service.'
  )}`;

  return (
    <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-[900] flex flex-col items-end gap-2 group">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-white text-slate-900 border border-slate-200 shadow-xl px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
          <span>Chat with ZITA Support</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
        aria-label="Contact ZITA on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
