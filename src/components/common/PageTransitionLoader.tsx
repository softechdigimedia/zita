import React from 'react';

interface PageTransitionLoaderProps {
  isLoading: boolean;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-950/90 backdrop-blur-md flex flex-col items-center justify-center text-white animate-fade-in pointer-events-auto">
      {/* Centered Glowing Logo & Spinner Container */}
      <div className="relative flex flex-col items-center justify-center p-8 text-center space-y-5">
        {/* Outer Rotating Glowing Ring */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin" />
          
          {/* Inner Logo Badge */}
          <div className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20">
            <span className="text-yellow-400 font-black tracking-tighter text-sm italic">
              ZITA
            </span>
          </div>
        </div>

        {/* Text & Progress Line */}
        <div className="space-y-1.5">
          <div className="text-sm font-black tracking-wider text-white uppercase flex items-center gap-2">
            <span>ZITA</span>
            <span className="text-yellow-400">GIGA-FIBER</span>
          </div>
          <p className="text-xs text-slate-400 font-mono tracking-wide animate-pulse">
            Establishing Ultra-Fast Fiber Connection...
          </p>
        </div>

        {/* Animated Speed Bar */}
        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-400 rounded-full animate-[shimmer_1s_infinite_linear] w-full origin-left" style={{
            background: 'linear-gradient(90deg, #ffd000 0%, #ffffff 50%, #ffd000 100%)',
            backgroundSize: '200% 100%'
          }} />
        </div>
      </div>
    </div>
  );
};
