import { User, Building, Droplets } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function Programs() {
  const programs = [
    {
      title: "OM Coaching: Elite Frame",
      description: "1:1 + cohort hybrid. Training, nutrition, and execution systems with weekly accountability.",
      features: [
        "4‑week ignition → 12‑week evolution",
        "Personal Command Dashboard (Notion)",
        "Daily structure + habit tracking"
      ],
      icon: User
    },
    {
      title: "OM Agency: Systems Builder",
      description: "Install the seven creator‑operator systems: idea engine, content machine, productivity, monetization, distribution, daily sales, and scale.",
      features: [
        "AI‑assisted workflows & automations",
        "Offer → Funnel → Content alignment",
        "Ship 2 flagship assets/week"
      ],
      icon: Building
    },
    {
      title: "Enagic Partner: High‑Ticket Path",
      description: "Ethical education (ORP + H₂), content that converts, and a sales process that closes $5k commissions.",
      features: [
        "8‑module OM × Enagic onboarding",
        "Visual comp plan dashboards",
        "Webinars, VSL, and DMs that sell"
      ],
      icon: Droplets
    }
  ];

  return (
    <section id="programs" className="py-16 border-t border-slate-800/60">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Pick your path—then go all in
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Start with the intake. We&apos;ll calibrate your sprint: Coaching, Agency Systems, and/or the Enagic partner track.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <AnimatedCard key={index} className="p-6 group" delay={index} skeletonVariant="large">
              <div className="mb-3">
                <program.icon className="w-6 h-6 text-sky-400 transition-colors group-hover:text-sky-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-slate-300 mt-2">{program.description}</p>
              <ul className="text-sm text-slate-300 mt-4 list-disc list-inside space-y-1">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}