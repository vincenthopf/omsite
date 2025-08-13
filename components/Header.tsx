'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <Link href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-sky-500/10 border border-sky-700 grid place-items-center">
              <svg width="24" height="24" viewBox="0 0 96 96" className="w-6 h-6">
                <rect width="96" height="96" rx="20" fill="#0b1220" stroke="#0ea5e9" strokeWidth="2"/>
                <path d="M20 56 C20 34 40 20 48 20 C56 20 76 34 76 56" fill="none" stroke="#0ea5e9" strokeWidth="4"/>
                <path d="M30 62 L66 34" stroke="#22c55e" strokeWidth="4"/>
                <text x="48" y="78" textAnchor="middle" fill="#0ea5e9" fontFamily="Arial" fontSize="18" fontWeight="700">OM</text>
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide">Optimal Mind</p>
              <p className="text-[11px] text-slate-400 -mt-0.5">Elite Men. Real Outcomes.</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#method" className="hover:text-white text-slate-300 transition-colors">Method</Link>
            <Link href="#pillars" className="hover:text-white text-slate-300 transition-colors">Pillars</Link>
            <Link href="#programs" className="hover:text-white text-slate-300 transition-colors">Programs</Link>
            <Link href="#systems" className="hover:text-white text-slate-300 transition-colors">Systems</Link>
            <Link href="#community" className="hover:text-white text-slate-300 transition-colors">Brotherhood</Link>
            <Link href="#results" className="hover:text-white text-slate-300 transition-colors">Results</Link>
            <Link href="#apply" className="hover:text-white text-slate-300 transition-colors">Apply</Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="#apply" className="btn btn-primary shadow">Apply Now</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}