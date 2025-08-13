import { Phone, Trophy, Flag } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import CardIcon from './CardIcon';

export default function Community() {
  const features = [
    {
      title: "Weekly Calls",
      description: "Training, execution sprints, and hot seats.",
      icon: Phone
    },
    {
      title: "Leaderboards",
      description: "Inputs tracked. Proof over talk.",
      icon: Trophy
    },
    {
      title: "Challenges",
      description: "4‑week ignition, 75‑day discipline, and character codes.",
      icon: Flag
    }
  ];

  return (
    <section id="community" className="py-16 border-t border-slate-800/60">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Legacy Brotherhood
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Structure, accountability, and competitive camaraderie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={index} className="p-5 group" delay={index}>
              <CardIcon icon={feature.icon} />
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-slate-300 mt-2">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}