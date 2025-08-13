import { Apple, Dumbbell, Moon } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function Pillars() {
  const pillars = [
    {
      title: "Eat for Performance",
      description: "Protein‑anchored, micronutrient‑dense. Simple meal structure that fits training and work sprints.",
      icon: Apple
    },
    {
      title: "Train for Stimulus",
      description: "Elite Frame System split with progressive overload, sprints, and mobility.",
      icon: Dumbbell
    },
    {
      title: "Recover Like a Monk",
      description: "Sleep window locked. Sauna/ice cadence. Breath + journaling for nervous system control.",
      icon: Moon
    }
  ];

  return (
    <section id="pillars" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            Foundations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            3 Pillars that move the needle
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Eat for performance. Train for stimulus. Recover like a monk.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <AnimatedCard key={index} className="p-5 group" delay={index}>
              <div className="mb-3">
                <pillar.icon className="w-6 h-6 text-sky-400 transition-colors group-hover:text-sky-300" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold">{pillar.title}</h4>
              <p className="text-sm text-slate-300 mt-2">
                {pillar.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}