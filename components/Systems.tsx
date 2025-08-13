import AnimatedCard from './AnimatedCard';

export default function Systems() {
  const systems = [
    {
      title: "Personal Command Dashboard",
      description: "Run goals, habits, training, content, sales, and money in one HQ."
    },
    {
      title: "Content Machine",
      description: "Idea vault, scripts, reels pipeline, and distribution map."
    },
    {
      title: "AI Leverage Stack",
      description: "Automation for lead gen, onboarding, training, and editing."
    },
    {
      title: "Sales Engine",
      description: "DM flows, VSL framework, call scripts, and follow‑ups."
    },
    {
      title: "OM × Enagic Roadmap",
      description: "Transparent education and long‑term reputation."
    },
    {
      title: "Motion Scheduling",
      description: "Turn tasks into calendar reality."
    }
  ];

  return (
    <section id="systems" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-400 mb-2">
            Operations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Your Personal Operating System
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Create, sell, and deliver without chaos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <AnimatedCard key={index} className="p-5" delay={index}>
              <h4 className="font-semibold">{system.title}</h4>
              <p className="text-sm text-slate-300 mt-2">
                {system.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}