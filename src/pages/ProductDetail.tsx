import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailProps> = ({ slug, onNavigate }) => {
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];
  const [ordered, setOrdered] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <button
          onClick={() => onNavigate('/products')}
          className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Hardware Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Hardware Mock Visual Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#00113D] to-slate-900 border border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="w-32 h-32 rounded-full bg-slate-950 border-4 border-yellow-400/40 flex items-center justify-center mb-6 shadow-inner">
              <span className="text-4xl font-black text-yellow-400 font-mono">ZITA</span>
            </div>
            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold uppercase rounded-full">
              {product.category}
            </span>
            <h2 className="text-2xl font-black text-white mt-4">{product.name}</h2>
            <p className="text-xs text-slate-400 mt-2">{product.warranty}</p>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">{product.tag}</span>
              <h1 className="text-3xl font-black text-white mt-1">{product.name}</h1>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-3 p-4 bg-slate-900 rounded-2xl border border-slate-800">
              <span className="text-4xl font-black text-yellow-400 font-mono">₹{product.price}</span>
              <span className="text-sm text-slate-500 line-through">MRP ₹{product.mrp}</span>
              <span className="text-xs text-emerald-400 font-bold ml-auto">{product.stock}</span>
            </div>

            {/* Specifications */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">Technical Specifications</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 divide-y divide-slate-800 text-xs">
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <div key={idx} className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">{key}</span>
                    <span className="font-bold text-white text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase CTA */}
            {ordered ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center text-emerald-400 font-bold text-sm">
                Order Request Submitted! Our retail support team will call you for doorstep delivery.
              </div>
            ) : (
              <button
                onClick={() => setOrdered(true)}
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-sm rounded-2xl shadow-xl transition"
              >
                ORDER THIS DEVICE NOW
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
