import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { ProductSkeletonGrid } from '../components/common/SkeletonLoaders';

interface ProductsProps {
  onNavigate: (path: string) => void;
  isLoading?: boolean;
}

export const ProductsPage: React.FC<ProductsProps> = ({ onNavigate, isLoading = false }) => {
  const [internalLoading, setInternalLoading] = useState(isLoading);

  useEffect(() => {
    setInternalLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Official Hardware</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ZITA Hardware Marketplace
          </h1>
          <p className="text-sm text-slate-300">
            High-performance Wi-Fi 6 gigabit routers, 4K Android TV boxes, and fiber termination hardware.
          </p>
        </div>

        {internalLoading ? (
          <ProductSkeletonGrid count={8} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {MOCK_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-yellow-400 transition">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                    {prod.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-1">{prod.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">{prod.description}</p>

                  <div className="space-y-1.5 mb-6 text-xs text-slate-300 border-t border-slate-800 pt-3">
                    {Object.entries(prod.specs).slice(0, 3).map(([k, v], i) => (
                      <div key={i} className="flex justify-between text-[11px]">
                        <span className="text-slate-400">{k}:</span>
                        <span className="font-semibold text-white truncate max-w-[120px]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xl font-black text-yellow-400 font-mono">₹{prod.price}</span>
                      <span className="text-xs text-slate-500 line-through ml-2">₹{prod.mrp}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">{prod.stock}</span>
                  </div>

                  <button
                    onClick={() => onNavigate(`/products/${prod.slug}`)}
                    className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-navy-deep font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-2"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

