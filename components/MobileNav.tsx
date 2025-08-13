'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const navItems = [
    { href: '#method', label: 'Method' },
    { href: '#pillars', label: 'Pillars' },
    { href: '#programs', label: 'Programs' },
    { href: '#systems', label: 'Systems' },
    { href: '#community', label: 'Brotherhood' },
    { href: '#results', label: 'Results' },
    { href: '#apply', label: 'Apply' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-[9999] p-2 rounded-lg bg-slate-900/90 backdrop-blur border border-slate-700/50 hover:bg-slate-800/90 transition-all shadow-lg"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-300" />
        ) : (
          <Menu className="w-6 h-6 text-slate-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[9997] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/98 backdrop-blur-xl border-l border-slate-700/80 z-[9998] md:hidden
        transform transition-transform duration-300 ease-out shadow-2xl
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col pt-20 px-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={`
                text-lg font-medium text-slate-300 hover:text-white py-4 border-b border-slate-800/50
                transition-all duration-200 hover:translate-x-2
                ${index === navItems.length - 1 ? 'border-b-0' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
          
          {/* CTA Button */}
          <div className="mt-8">
            <Link 
              href="#apply" 
              onClick={handleLinkClick}
              className="btn btn-primary w-full text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}