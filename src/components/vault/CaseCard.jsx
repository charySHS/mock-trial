import React from 'react';
import { Download, FileText, Calendar } from 'lucide-react';

export default function CaseCard({ caseItem }) {
  const handleDownload = () => {
    alert(`Simulated Download: Starting transfer for ${caseItem.title} case package.`);
  };

  return (
    <div className="card p-6 space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-bold text-navy-900">{caseItem.title}</h3>
          <span className="badge badge-gold">{caseItem.type}</span>
        </div>
        <button onClick={handleDownload} className="btn-primary text-xs shrink-0">
          <Download className="w-3.5 h-3.5" />
          Download ({caseItem.fileSize})
        </button>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">{caseItem.desc}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-surface-200 pt-5">
        <div>
          <h4 className="section-title mb-3">Prosecution Witnesses</h4>
          <ul className="space-y-2">
            {caseItem.witnesses.pros.map((w, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                <FileText className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="section-title mb-3">Defense Witnesses</h4>
          <ul className="space-y-2">
            {caseItem.witnesses.def.map((w, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                <FileText className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 text-[10px] text-text-muted border-t border-surface-100 pt-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          Released: {caseItem.released}
        </span>
        <span>·</span>
        <span>Official CRF-OC Sanctioned File</span>
      </div>
    </div>
  );
}
