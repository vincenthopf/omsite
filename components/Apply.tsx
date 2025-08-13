'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: 'Physique & performance',
    note: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`OM Intake — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nGoal: ${formData.goal}\n\nNotes:\n${formData.note}`
    );
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="apply" className="py-20">
      <div className="container">
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to move?</h3>
          <p className="text-slate-300 mt-3">
            Fill the intake. If it's a fit, we'll map your 4‑week ignition.
          </p>
          
          <form className="max-w-xl mx-auto text-left space-y-4 mt-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm text-slate-300">Name</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
                placeholder="Your name"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-sm text-slate-300">Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-sm text-slate-300">Primary goal</span>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
                className="mt-1 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
              >
                <option>Physique & performance</option>
                <option>Systems & content</option>
                <option>Enagic high‑ticket path</option>
                <option>All of the above</option>
              </select>
            </label>
            
            <label className="block">
              <span className="text-sm text-slate-300">Where you're at</span>
              <textarea
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                rows={4}
                className="mt-1 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
                placeholder="Constraints, goals, and why now."
              />
            </label>
            
            <div className="pt-2 flex items-center justify-center gap-3">
              <button type="submit" className="btn btn-primary">
                Submit Intake
              </button>
              <Link href="#top" className="btn btn-secondary">
                Back to top
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}