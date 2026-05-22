import React from 'react';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function WelcomeBanner({ setActiveTab }) {
  return (
    <div className="card overflow-hidden">
      {/* Gold top accent line */}
      <div className="h-1 gold-accent" />
      
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="badge badge-navy">CRF-OC 2026–2027</span>
              <span className="badge badge-gold">Season Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-navy-900">
              Servite Mock Trial
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed">
              Your command center for CRF-OC tournament prep. Access case materials, role playbooks, objection guides, and AI-powered speech coaching.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:flex-col sm:gap-2">
            <button onClick={() => setActiveTab('vault')} className="btn-primary text-xs">
              <BookOpen className="w-4 h-4" />
              Case Vault
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setActiveTab('assistant')} className="btn-outline text-xs">
              <Sparkles className="w-4 h-4" />
              AI Prep
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
