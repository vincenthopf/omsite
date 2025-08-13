'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import AnimatedCard from './AnimatedCard';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: 'Physique & performance',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xpznqaag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          goal: formData.goal,
          note: formData.note,
          _subject: `OM Intake — ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', goal: 'Physique & performance', note: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20">
      <div className="container">
        <AnimatedCard className="p-8 md:p-12 text-center" delay={0}>
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to move?</h3>
          <p className="text-slate-300 mt-3">
            Fill the intake. If it&apos;s a fit, we&apos;ll map your 4‑week ignition.
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
              <span className="text-sm text-slate-300">Where you&apos;re at</span>
              <textarea
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                rows={4}
                className="mt-1 w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-sky-500 focus:outline-none"
                placeholder="Constraints, goals, and why now."
              />
            </label>
            
            <div className="pt-2 flex items-center justify-center gap-3">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Intake'}
              </button>
              <Link href="#top" className="btn btn-secondary">
                Back to top
              </Link>
            </div>
          </form>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
              Thanks! Your intake has been submitted. We&apos;ll be in touch soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}
        </AnimatedCard>
      </div>
    </section>
  );
}