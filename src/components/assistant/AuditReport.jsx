import React, { useState, useEffect, useRef } from 'react';
import { Gavel, Check, Copy, ShieldAlert, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';

export default function AuditReport({ result }) {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    if (result && containerRef.current) {
      // Entrances animation
      gsap.fromTo(containerRef.current,
        { opacity: 0, scale: 0.98, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
      
      // Fun counting scale effect for the score
      gsap.fromTo(scoreRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: 'back.out(1.8)' }
      );
    }
  }, [result]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.feedback);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result) {
    return (
      <div className="glass-card p-12 text-center text-slate-400 h-full flex flex-col justify-center items-center space-y-3 border-dashed border-2 border-slate-800 min-h-[400px]">
        <Gavel className="w-10 h-10 text-slate-800" />
        <h3 className="font-serif text-sm">Consultation Office Open</h3>
        <p className="text-xs max-w-sm font-light">Paste your courtroom drafts or outline plans in the prep console on the left to request professional associate critique, evidentiary audits, and objection shield drafts.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="glass-card p-6 md:p-8 space-y-6 border-gold-primary/35 min-h-[400px]">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">SCALESAI DEFENSE VERDICT</h3>
          <span className="text-[10px] text-slate-400 block mt-0.5">CRF-OC Legal Guidelines Applied</span>
        </div>
        
        {/* Score indicator */}
        <div ref={scoreRef} className="text-right">
          <span className="text-[9px] text-slate-400 block uppercase font-bold">Prep Index</span>
          <span className="text-2xl font-serif font-bold text-gold-brass">{result.score}/100</span>
        </div>
      </div>

      {/* Feedback text */}
      <div className="text-xs text-slate-300 space-y-4 leading-relaxed font-light whitespace-pre-line bg-navy-dark/30 border border-slate-900/60 p-5 rounded-lg">
        {result.feedback}
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase tracking-widest text-red-400 font-bold flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" /> Objection Risks Detected
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {result.objections.map((o, idx) => (
              <span key={idx} className="bg-red-950/40 text-red-300 border border-red-500/10 text-[9px] px-2 py-0.5 rounded">
                {o}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Action Checklist
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {result.actions.map((a, idx) => (
              <span key={idx} className="bg-emerald-950/40 text-emerald-300 border border-emerald-500/10 text-[9px] px-2 py-0.5 rounded">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-950 pt-4 flex justify-between items-center">
        <span className="text-[9px] text-slate-400 font-light flex items-center gap-1">
          <Gavel className="w-3 h-3 text-gold-brass" /> Certified Mock Assistant Suite
        </span>
        
        <button onClick={handleCopy} className="btn-outline text-[10px] px-4 py-2 flex items-center gap-1">
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              COPIED DRAFT
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              COPY REPORT
            </>
          )}
        </button>
      </div>

    </div>
  );
}
