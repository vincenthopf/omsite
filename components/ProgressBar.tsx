'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/20">
      <div 
        className="h-full bg-gradient-to-r from-sky-500 to-sky-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}