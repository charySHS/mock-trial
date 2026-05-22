import React from 'react';
import { Download, FileText, Calendar } from 'lucide-react';

export default function CaseCard({ caseItem }) {
  const handleDownload = () => {
    alert(`Simulated Download: Starting transfer for ${caseItem.title} case package.`);
  };

  return (
    <div className="glass-card p-6 md:p-8 space-y-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-bold text-gold-light">{caseItem.title}</h3>
          <span className="text-xs text-gold-brass uppercase tracking-wider font-semibold block">{caseItem.type}</span>
        </div>
        <button onClick={handleDownload} className="btn-gold text-xs px-4 py-2 self-start flex items-center gap-1.5">
          <Download className="w-3.5 h-3.5" />
          DOWNLOAD CASE PACKET ({caseItem.fileSize})
        </button>
      </div>
      
      <p className="text-sm text-slate-300 font-light leading-relaxed">{caseItem.desc}</p>
      
      {/* Prosecution / Defense Witnesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-900 pt-6">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-brass font-bold mb-3">Prosecution Witnesses</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {caseItem.witnesses.pros.map((w, i) => (
              <li key={i} className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-brass font-bold mb-3">Defense Witnesses</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {caseItem.witnesses.def.map((w, i) => (
              <li key={i} className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[10px] text-slate-muted border-t border-slate-950 pt-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-gold-brass" /> Released: {caseItem.released}
        </span>
        <span>•</span>
        <span>Official CRF-OC Sanctioned File</span>
      </div>
    </div>
  );
}
