import React from 'react';
import { Award } from 'lucide-react';

export default function ProgressMetrics() {
  const progressMetrics = [
    { label: "Case Packet Reading", val: 100 },
    { label: "Opening/Closing Outlines", val: 85 },
    { label: "Direct/Cross Written", val: 70 },
    { label: "Witness Prepping", val: 60 },
  ];

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold font-serif mb-5 flex items-center gap-2 border-b border-slate-800 pb-3">
        <Award className="w-5 h-5 text-gold-brass" />
        TEAM PREPARATION METRICS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {progressMetrics.map((item, i) => (
          <div key={i} className="bg-navy-dark/40 border border-slate-900 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 font-medium">{item.label}</span>
              <span className="text-gold-brass font-bold">{item.val}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-900">
              <div 
                className="bg-gradient-to-r from-gold-brass to-gold-primary h-full rounded-full transition-all duration-1000"
                style={{ width: `${item.val}%`, backgroundColor: '#c5a880' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
