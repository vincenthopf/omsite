interface SkeletonCardProps {
  className?: string;
  variant?: 'default' | 'stats' | 'method' | 'large';
}

export default function SkeletonCard({ className = '', variant = 'default' }: SkeletonCardProps) {
  const baseClasses = 'card animate-pulse';
  
  const variants = {
    default: 'p-5',
    stats: 'p-6 text-center',
    method: 'p-5',
    large: 'p-6'
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {/* Icon skeleton */}
      <div className="w-6 h-6 bg-slate-700 rounded mb-3"></div>
      
      {variant === 'stats' || variant === 'method' ? (
        <>
          {/* Stats/Method specific layout */}
          {variant === 'method' && (
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-3 bg-slate-700 rounded"></div>
              <div className="w-4 h-4 bg-slate-700 rounded"></div>
            </div>
          )}
          
          {variant === 'stats' && (
            <div className="w-16 h-8 bg-slate-700 rounded mx-auto mb-3"></div>
          )}
          
          {/* Title */}
          <div className="w-24 h-5 bg-slate-700 rounded mb-3"></div>
          
          {/* Description */}
          <div className="space-y-2">
            <div className="w-full h-3 bg-slate-700 rounded"></div>
            <div className="w-3/4 h-3 bg-slate-700 rounded"></div>
          </div>
        </>
      ) : (
        <>
          {/* Default card layout */}
          <div className="w-32 h-6 bg-slate-700 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-slate-700 rounded"></div>
            <div className="w-5/6 h-4 bg-slate-700 rounded"></div>
            {variant === 'large' && (
              <>
                <div className="w-4/5 h-4 bg-slate-700 rounded"></div>
                <div className="w-full h-4 bg-slate-700 rounded"></div>
              </>
            )}
          </div>
          
          {/* Additional content for large variant */}
          {variant === 'large' && (
            <div className="mt-4 space-y-2">
              <div className="w-3/4 h-3 bg-slate-700 rounded"></div>
              <div className="w-5/6 h-3 bg-slate-700 rounded"></div>
              <div className="w-4/5 h-3 bg-slate-700 rounded"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}