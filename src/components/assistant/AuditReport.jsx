import React, { useState } from 'react';
import { Gavel, Check, Copy, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function AuditReport({ result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.feedback);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result) {
    return (
      <div className="card p-12 text-center h-full flex flex-col justify-center items-center space-y-3 min-h-[400px] border-2 border-dashed border-surface-300">
        <Gavel className="w-9 h-9 text-surface-300" />
        <h3 className="font-serif text-sm text-text-muted">Consultation Office Open</h3>
        <p className="text-xs text-text-muted max-w-sm">
          Paste your courtroom drafts or outline plans in the prep console on the left to request professional critique, evidentiary audits, and objection shield drafts.
        </p>
      </div>
    );
  }

  const scoreColor =
    result.score >= 90 ? 'text-emerald-600' :
    result.score >= 75 ? 'text-gold-500' : 'text-red-500';

  return (
    <div className="card p-5 sm:p-6 space-y-5 min-h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-surface-200 pb-4">
        <div>
          <h3 className="text-sm font-serif font-bold text-navy-900 uppercase tracking-wider">ScalesAI Defense Verdict</h3>
          <span className="text-[10px] text-text-muted block mt-0.5">CRF-OC Legal Guidelines Applied</span>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-text-muted block uppercase font-semibold tracking-wide">Prep Index</span>
          <span className={`text-2xl font-serif font-bold ${scoreColor}`}>{result.score}/100</span>
        </div>
      </div>

      {/* Feedback text */}
      <div className="text-xs text-text-secondary leading-relaxed whitespace-pre-line bg-surface-50 border border-surface-200 p-4 rounded-lg">
        {result.feedback}
      </div>

      {/* Risk + Action lists */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase tracking-widest text-red-500 font-bold flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" /> Objection Risks Detected
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {result.objections.map((o, idx) => (
              <span key={idx} className="badge badge-danger">{o}</span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Action Checklist
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {result.actions.map((a, idx) => (
              <span key={idx} className="badge badge-success">{a}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-200 pt-4 flex justify-between items-center">
        <span className="text-[9px] text-text-muted flex items-center gap-1">
          <Gavel className="w-3 h-3 text-gold-500" /> Certified Mock Assistant Suite
        </span>
        <button onClick={handleCopy} className="btn-outline text-[10px] px-3 py-1.5 flex items-center gap-1">
          {copied ? (
            <><Check className="w-3.5 h-3.5 text-emerald-500" /> Copied</>
          ) : (
            <><Copy className="w-3.5 h-3.5" /> Copy Report</>
          )}
        </button>
      </div>
    </div>
  );
}
