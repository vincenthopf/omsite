export default function Results() {
  const metrics = [
    {
      value: "90 → 120 days",
      description: "From chaos → consistent income"
    },
    {
      value: "+7 kg",
      description: "Lean mass target (phase 1)"
    },
    {
      value: "≥14/wk",
      description: "High‑value conversations"
    },
    {
      value: "2 assets/wk",
      description: "Ship list‑building + sales assets"
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
            <div key={index} className="card p-6 text-center">
              <div className="text-3xl font-extrabold">{metric.value}</div>
              <div className="text-slate-400 mt-2 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}