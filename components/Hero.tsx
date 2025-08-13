import Link from 'next/link';
import { Settings, DollarSign, Users, Zap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import CardIcon from './CardIcon';

export default function Hero() {
  const stats = [
    { value: '7+', description: 'Core systems live this quarter', icon: Settings },
    { value: '$5k', description: 'Per high‑ticket sale (typical)', icon: DollarSign },
    { value: '35+', description: 'Members in community', icon: Users },
    { value: '4 Weeks', description: 'Initial sprint to momentum', icon: Zap },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div 
        className="pointer-events-none absolute inset-0" 
        style={{background: 'radial-gradient(ellipse at top, rgba(56,189,248,0.12), transparent 60%)'}}
      />
      <div className="container">
        <div className="py-16 md:py-24 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
              High-Performance Coaching
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
              Systems & Automation
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
              Enagic Partner
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build the Man who <span className="text-sky-400">leads</span> and the
            System that <span className="text-sky-400">scales</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Optimal Mind helps 18–30 y/o men forge elite bodies, clear minds, and scalable online income.
            We combine a ruthless 8‑phase inner framework with modern systems, content, and high‑ticket sales to produce outcomes—fast.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#apply" className="btn btn-primary">Start Your Intake</Link>
            <Link href="#method" className="btn btn-secondary">Explore the Method</Link>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} className="p-6 text-center group" delay={index}>
                <CardIcon icon={stat.icon} />
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <div className="text-slate-400 mt-2 text-sm">{stat.description}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}