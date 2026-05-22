import React from 'react';
import { Gavel } from 'lucide-react';

export default function TrialMaxim() {
  return (
    <div className="card overflow-hidden">
      <div className="h-0.5 gold-accent" />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Gavel className="w-3.5 h-3.5 text-gold-500" />
          <span className="section-title">Weekly Maxim</span>
        </div>
        <blockquote className="space-y-2">
          <p className="text-sm text-text-primary italic leading-relaxed font-serif">
            "In a courtroom, facts alone are cold. You must weave them into a compelling story of human truth. Credibility is won or lost in the details."
          </p>
          <footer className="text-xs text-text-muted text-right">
            — Courtroom Advocate Counsel
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
