'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-10 border-t border-slate-800/60">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Optimal Mind. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#results" className="text-slate-400 hover:text-slate-200 transition-colors">
              Results
            </Link>
            <Link href="#apply" className="text-slate-400 hover:text-slate-200 transition-colors">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}