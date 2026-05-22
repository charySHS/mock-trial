import React, { useEffect, useRef } from 'react';
import { Shield, BookOpen, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function RoleDetails({ roleData }) {
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".duty-item",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }, listRef);
    return () => ctx.revert();
  }, [roleData]);

  return (
    <div className="glass-card p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative overflow-hidden">
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-brass bg-gold-dark/10 px-2 py-0.5 rounded border border-gold-primary/20 inline-block">
            Servite Role Outline
          </span>
          <h2 className="text-xl font-serif font-bold text-white">{roleData.title}</h2>
          <p className="text-xs text-slate-400 italic">{roleData.subtitle}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-serif font-semibold text-gold-light flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-brass" /> CORE DUTIES & COMPETITION CHECKS
          </h3>
          <ul ref={listRef} className="space-y-3">
            {roleData.duties.map((duty, idx) => {
              const [title, desc] = duty.split(': ');
              return (
                <li key={idx} className="duty-item bg-navy-dark/30 border border-slate-900/60 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-gold-brass/10 border border-gold-primary/20 rounded w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-gold-brass font-bold">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-serif text-gold-light block uppercase tracking-wide">{title}</strong>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-navy-dark/60 rounded-xl border border-slate-800 p-6 space-y-4 h-fit">
        <h3 className="text-sm font-serif font-semibold text-gold-light flex items-center gap-2 border-b border-slate-800 pb-3">
          <BookOpen className="w-4 h-4 text-gold-brass" /> ADVOCATE PRO TIPS
        </h3>
        <ul className="space-y-3">
          {roleData.proTips.map((tip, idx) => (
            <li key={idx} className="text-xs text-slate-300 flex gap-2 items-start leading-relaxed font-light">
              <ArrowRight className="w-3.5 h-3.5 text-gold-brass flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
