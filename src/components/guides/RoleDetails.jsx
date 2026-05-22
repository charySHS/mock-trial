import React from 'react';
import { Shield, BookOpen, ArrowRight } from 'lucide-react';

export default function RoleDetails({ roleData }) {
  return (
    <div className="card p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <div className="space-y-1">
          <span className="badge badge-navy">Servite Role Outline</span>
          <h2 className="text-lg font-serif font-bold text-navy-900 mt-2">{roleData.title}</h2>
          <p className="text-xs text-text-muted italic">{roleData.subtitle}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-text-secondary flex items-center gap-1.5 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-gold-500" /> Core Duties & Competition Checks
          </h3>
          <ul className="space-y-2.5">
            {roleData.duties.map((duty, idx) => {
              const [title, desc] = duty.split(': ');
              return (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-lg border border-surface-200 bg-surface-50">
                  <div className="bg-navy-800 text-gold-400 rounded w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-serif">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-navy-800 block mb-0.5">{title}</strong>
                    <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-gold-100/50 rounded-xl border border-gold-200 p-5 space-y-3 h-fit">
        <h3 className="text-xs font-semibold text-gold-500 flex items-center gap-1.5 uppercase tracking-wider border-b border-gold-200 pb-2.5">
          <BookOpen className="w-3.5 h-3.5" /> Advocate Pro Tips
        </h3>
        <ul className="space-y-3">
          {roleData.proTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
              <ArrowRight className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
