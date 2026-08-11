import React from 'react';

// Product Card Skeleton Pulse Grid
export const ProductSkeletonGrid: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between animate-pulse"
        >
          <div>
            {/* Tag Skeleton */}
            <div className="w-20 h-5 bg-zinc-800 rounded-full mb-4" />
            
            {/* Title Skeleton */}
            <div className="w-3/4 h-6 bg-zinc-800 rounded-lg mb-2" />
            
            {/* Description Lines Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="w-full h-3.5 bg-zinc-800/80 rounded" />
              <div className="w-2/3 h-3.5 bg-zinc-800/80 rounded" />
            </div>

            {/* Specs Table Skeleton */}
            <div className="space-y-3 mb-6 border-t border-zinc-800/80 pt-4">
              <div className="flex justify-between items-center">
                <div className="w-16 h-3 bg-zinc-800 rounded" />
                <div className="w-20 h-3 bg-zinc-800 rounded" />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-20 h-3 bg-zinc-800 rounded" />
                <div className="w-16 h-3 bg-zinc-800 rounded" />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-14 h-3 bg-zinc-800 rounded" />
                <div className="w-24 h-3 bg-zinc-800 rounded" />
              </div>
            </div>
          </div>

          <div>
            {/* Price Row Skeleton */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-24 h-7 bg-zinc-800 rounded-lg" />
              <div className="w-14 h-4 bg-zinc-800/80 rounded" />
            </div>

            {/* Button Skeleton */}
            <div className="w-full h-11 bg-zinc-800 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Service Card Skeleton Pulse Grid
export const ServiceSkeletonGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between animate-pulse"
        >
          <div>
            {/* Icon Box Skeleton */}
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 mb-6" />

            {/* Category Pill Skeleton */}
            <div className="w-28 h-5 bg-zinc-800 rounded-full mb-3" />

            {/* Title Skeleton */}
            <div className="w-2/3 h-7 bg-zinc-800 rounded-lg mb-3" />

            {/* Description Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="w-full h-3.5 bg-zinc-800/80 rounded" />
              <div className="w-5/6 h-3.5 bg-zinc-800/80 rounded" />
              <div className="w-4/6 h-3.5 bg-zinc-800/80 rounded" />
            </div>

            {/* Features Checkmarks Skeleton */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-zinc-800 shrink-0" />
                <div className="w-3/4 h-3.5 bg-zinc-800/80 rounded" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-zinc-800 shrink-0" />
                <div className="w-2/3 h-3.5 bg-zinc-800/80 rounded" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-zinc-800 shrink-0" />
                <div className="w-4/5 h-3.5 bg-zinc-800/80 rounded" />
              </div>
            </div>
          </div>

          {/* Card Footer Skeleton */}
          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
            <div className="w-28 h-6 bg-zinc-800 rounded-lg" />
            <div className="w-24 h-10 bg-zinc-800 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Broadband Plan Card Skeleton Pulse Grid
export const PlanSkeletonGrid: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between animate-pulse"
        >
          <div>
            {/* Speed Circle Badge Skeleton */}
            <div className="w-16 h-16 rounded-full bg-zinc-800 mx-auto mb-4" />

            {/* Plan Name Skeleton */}
            <div className="w-32 h-6 bg-zinc-800 rounded-lg mx-auto mb-2" />

            {/* Speed Subtitle Skeleton */}
            <div className="w-24 h-4 bg-zinc-800/80 rounded mx-auto mb-6" />

            {/* Plan Price Box Skeleton */}
            <div className="w-36 h-10 bg-zinc-800 rounded-xl mx-auto mb-6" />

            {/* Feature Bullets Skeleton */}
            <div className="space-y-3 mb-6 border-t border-zinc-800 pt-4">
              <div className="w-full h-3.5 bg-zinc-800/80 rounded" />
              <div className="w-5/6 h-3.5 bg-zinc-800/80 rounded" />
              <div className="w-4/6 h-3.5 bg-zinc-800/80 rounded" />
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="w-full h-11 bg-zinc-800 rounded-xl" />
        </div>
      ))}
    </div>
  );
};
