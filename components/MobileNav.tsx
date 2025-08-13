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
        className="md:hidden relative z-50 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
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
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-slate-950/95 backdrop-blur-md border-l border-slate-800 z-40 md:hidden
        transform transition-transform duration-300 ease-out
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