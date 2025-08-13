import { TrendingUp, Activity, MessageCircle, Package2 } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function Results() {
  const metrics = [
    {
      value: "90 → 120 days",
      description: "From chaos → consistent income",
      icon: TrendingUp
    },
    {
      value: "+7 kg",
      description: "Lean mass target (phase 1)",
      icon: Activity
    },
    {
      value: "≥14/wk",
      description: "High‑value conversations",
      icon: MessageCircle
    },
    {
      value: "2 assets/wk",
      description: "Ship list‑building + sales assets",
      icon: Package2
    }
  ];

  return (
    <section id="results" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Outcomes we optimize for
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            We measure what matters and publish it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedCard key={index} className="p-6 text-center group" delay={index} skeletonVariant="stats">
              <div className="flex justify-center mb-3">
                <metric.icon className="w-6 h-6 text-sky-400 transition-colors group-hover:text-sky-300" strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-extrabold">{metric.value}</div>
              <div className="text-slate-400 mt-2 text-sm">{metric.description}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}