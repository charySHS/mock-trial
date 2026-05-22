import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function StipulationsGrid({ stipulations }) {
  return (
    <div className="card">
      <div className="px-5 py-4 border-b border-surface-200 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-gold-500" />
        <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">
          PEOPLE v. CLARK — COURTROOM STIPULATIONS
        </h2>
      </div>
      <div className="p-5">
        <p className="text-xs text-text-muted mb-5 leading-relaxed">
          Stipulations are facts pre-negotiated between prosecution and defense accepted as true.
          No testimony or foundation is required to enter them into evidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {stipulations.map((stip) => (
            <div
              key={stip.num}
              className="flex gap-4 items-start p-4 rounded-lg border border-surface-200 hover:border-gold-300 hover:bg-gold-100/30 transition-all"
            >
              <div className="bg-navy-800 text-gold-400 rounded w-7 h-7 flex items-center justify-center shrink-0 font-serif font-bold text-xs">
                {stip.num}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{stip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
