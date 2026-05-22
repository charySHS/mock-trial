import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';

export default function StipulationsGrid({ stipulations }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stip-card",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="glass-card p-6 md:p-8 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-gold-brass" />
          PEOPLE v. CLARK COURTROOM STIPULATIONS
        </h3>
        <p className="text-xs text-slate-400 mt-1">Stipulations are facts pre-negotiated between the prosecution and defense that are accepted as true. No testimony or foundation is needed to enter them into evidence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stipulations.map((stip) => (
          <div key={stip.num} className="stip-card bg-navy-dark/45 border border-slate-900 rounded-lg p-4 flex gap-4 items-start hover:border-gold-brass/30 transition-all duration-300">
            <div className="bg-gold-brass/10 border border-gold-primary/30 rounded w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-serif font-bold text-gold-brass">#{stip.num}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">{stip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
