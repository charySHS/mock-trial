import React from 'react';
import { Award } from 'lucide-react';

export default function ProgressMetrics() {
  const metrics = [
    { label: "Case Packet Reading", val: 100, color: "bg-emerald-500" },
    { label: "Opening/Closing Outlines", val: 85, color: "bg-blue-500" },
    { label: "Direct/Cross Written", val: 70, color: "bg-gold-500" },
    { label: "Witness Prepping", val: 60, color: "bg-amber-500" },
  ];

  return (
    <div className="card">
      <div className="px-5 py-4 border-b border-surface-200 flex items-center gap-2">
        <Award className="w-4 h-4 text-gold-500" />
        <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">TEAM PREP PROGRESS</h2>
      </div>
      <div className="p-5 space-y-4">
        {metrics.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-text-primary font-medium">{item.label}</span>
              <span className="text-xs font-bold text-text-secondary">{item.val}%</span>
            </div>
            <div className="progress-track">
              <div
                className={`progress-fill ${item.color}`}
                style={{ width: `${item.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
