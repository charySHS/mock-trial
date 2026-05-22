import React from 'react';
import { AlertOctagon, HelpCircle, FileText } from 'lucide-react';

export default function ObjectionExplainer({ selectedObjection }) {
  if (!selectedObjection) {
    return (
      <div className="h-full min-h-[240px] flex flex-col items-center justify-center text-center p-8 rounded-lg border-2 border-dashed border-surface-300 bg-surface-50 space-y-2">
        <AlertOctagon className="w-7 h-7 text-surface-300" />
        <h3 className="font-serif text-sm text-text-muted">No Objection Selected</h3>
        <p className="text-xs text-text-muted max-w-xs">
          Select an objection from the list to view its definition, scenario, and argument scripts.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gold-500">
            CRF-OC EVIDENCE CODE {selectedObjection.rule}
          </span>
          <h3 className="text-base font-serif font-bold text-navy-900 mt-0.5">{selectedObjection.name}</h3>
        </div>
        <AlertOctagon className="w-5 h-5 text-gold-500 shrink-0" />
      </div>

      <p className="text-xs text-text-secondary leading-relaxed bg-surface-50 border border-surface-200 rounded-lg p-3">
        {selectedObjection.definition}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <h4 className="text-[10px] uppercase tracking-widest text-red-500 font-bold flex items-center gap-1">
            <HelpCircle className="w-3 h-3" /> Sample Scenario
          </h4>
          <p className="text-xs text-text-secondary italic bg-red-50 border border-red-100 p-3 rounded-lg leading-relaxed">
            "{selectedObjection.scenario}"
          </p>
        </div>
        <div className="space-y-1.5">
          <h4 className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold flex items-center gap-1">
            <FileText className="w-3 h-3" /> How to Object
          </h4>
          <p className="text-xs text-text-primary font-medium italic bg-emerald-50 border border-emerald-100 p-3 rounded-lg leading-relaxed">
            "{selectedObjection.objectionText}"
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
        <h4 className="text-[10px] uppercase tracking-widest text-navy-700 font-bold">How to Respond (Opposition)</h4>
        <p className="text-xs text-text-secondary italic bg-surface-100 border border-surface-200 p-3 rounded-lg leading-relaxed">
          "{selectedObjection.responseText}"
        </p>
      </div>
    </div>
  );
}
