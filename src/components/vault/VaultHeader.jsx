import React from 'react';
import { Database, AlertCircle, ShieldCheck } from 'lucide-react';

export default function VaultHeader({ activeSubTab, setActiveSubTab, onClearQuery }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-navy-dark/60 p-4 rounded-xl border border-slate-800">
      <div>
        <h1 className="text-xl font-serif font-bold text-white tracking-wide">CASE PACKET & EVIDENCE VAULT</h1>
        <p className="text-xs text-slate-muted">Manage mock case packages, official CRF-OC errata updates, and stipulations.</p>
      </div>
      
      {/* Tab Selectors */}
      <div className="flex gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-900 w-full md:w-auto">
        <button 
          onClick={() => { setActiveSubTab('packets'); onClearQuery(); }}
          className={`flex-1 md:flex-none px-4 py-1.5 rounded text-xs font-serif font-semibold tracking-wider transition-all ${activeSubTab === 'packets' ? 'bg-gold-brass text-navy-darkest' : 'text-slate-muted hover:text-slate-200'}`}
        >
          <Database className="w-3.5 h-3.5 inline mr-1.5" />
          PACKETS
        </button>
        <button 
          onClick={() => { setActiveSubTab('errata'); onClearQuery(); }}
          className={`flex-1 md:flex-none px-4 py-1.5 rounded text-xs font-serif font-semibold tracking-wider transition-all ${activeSubTab === 'errata' ? 'bg-gold-brass text-navy-darkest' : 'text-slate-muted hover:text-slate-200'}`}
        >
          <AlertCircle className="w-3.5 h-3.5 inline mr-1.5" />
          ERRATAS
        </button>
        <button 
          onClick={() => { setActiveSubTab('stips'); onClearQuery(); }}
          className={`flex-1 md:flex-none px-4 py-1.5 rounded text-xs font-serif font-semibold tracking-wider transition-all ${activeSubTab === 'stips' ? 'bg-gold-brass text-navy-darkest' : 'text-slate-muted hover:text-slate-200'}`}
        >
          <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5" />
          STIPULATIONS
        </button>
      </div>
    </div>
  );
}
