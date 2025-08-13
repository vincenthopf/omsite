'use client';

import { Eye, GitBranch, ArrowRight, Zap, Hammer, RotateCcw, Flame, TrendingUp } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import CardIcon from './CardIcon';

export default function Method() {
  const phases = [
    { name: "Awareness", icon: Eye },
    { name: "Choice", icon: GitBranch },
    { name: "Momentum", icon: ArrowRight },
    { name: "Energy", icon: Zap },
    { name: "Application", icon: Hammer },
    { name: "Consistency", icon: RotateCcw },
    { name: "Intensity", icon: Flame },
    { name: "Evolution", icon: TrendingUp }
  ];

  return (
    <section id="method" className="py-16 border-t border-slate-800/60">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            The OM Method
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            8 Phases → From Awareness to Evolution
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            An internal operating system paired with concrete actions, systems, and checkpoints.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          {phases.map((phase, index) => (
            <AnimatedCard key={index} className="p-5 group" delay={index}>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs">Phase {index + 1}</span>
                <span className="text-sky-400 text-xs">OM</span>
              </div>
              <CardIcon icon={phase.icon} className="mt-2 mb-1" />
              <h4 className="mt-2 font-semibold text-white">{phase.name}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Phase {index + 1} of the Optimal Mind Method.
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}