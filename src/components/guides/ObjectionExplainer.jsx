import React, { useEffect, useRef } from 'react';
import { AlertOctagon, HelpCircle, FileText } from 'lucide-react';
import { gsap } from 'gsap';

export default function ObjectionExplainer({ selectedObjection }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedObjection && containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [selectedObjection]);

  if (!selectedObjection) {
    return (
      <div className="glass-card p-12 text-center text-slate-400 h-full flex flex-col justify-center items-center space-y-2 border-dashed border-2 border-slate-800">
        <AlertOctagon className="w-8 h-8 text-slate-700" />
        <h3 className="font-serif text-sm">No Objection Selected</h3>
        <p className="text-xs max-w-xs font-light">Select an objection from the list to view its citation, classroom scenario, and legal arguments.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="glass-card p-6 md:p-8 space-y-6 border-gold-primary/35">
      <div className="flex justify-between items-start border-b border-slate-800 pb-3">
        <div>
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gold-brass">
            CRF-OC EVIDENCE CODE {selectedObjection.rule}
          </span>
          <h3 className="text-lg font-serif font-bold text-white mt-1">{selectedObjection.name}</h3>
        </div>
        <AlertOctagon className="w-6 h-6 text-gold-brass" />
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-brass font-bold mb-1">Legal Definition</h4>
          <p className="text-xs text-slate-300 font-light leading-relaxed">{selectedObjection.definition}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-900 pt-4">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-red-400 font-bold mb-2 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> Sample Scenario
            </h4>
            <p className="text-xs text-slate-400 font-light italic bg-red-950/20 border border-red-500/10 p-3 rounded-lg leading-relaxed">
              "{selectedObjection.scenario}"
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> How to Object
            </h4>
            <p className="text-xs text-slate-300 font-medium italic bg-emerald-950/20 border border-emerald-500/10 p-3 rounded-lg leading-relaxed">
              "{selectedObjection.objectionText}"
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-4">
          <h4 className="text-xs uppercase tracking-widest text-gold-brass font-bold mb-2">How to Respond (Opposition)</h4>
          <p className="text-xs text-slate-300 italic bg-navy-dark/50 border border-slate-800 p-3 rounded-lg leading-relaxed">
            "{selectedObjection.responseText}"
          </p>
        </div>
      </div>
    </div>
  );
}
