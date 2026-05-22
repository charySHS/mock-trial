import React from 'react';
import { Database, AlertCircle, ShieldCheck } from 'lucide-react';

const subTabs = [
  { id: 'packets', label: 'Packets', icon: Database },
  { id: 'errata', label: 'Errata', icon: AlertCircle },
  { id: 'stips', label: 'Stipulations', icon: ShieldCheck },
];

export default function VaultHeader({ activeSubTab, setActiveSubTab, onClearQuery }) {
  return (
    <div className="card overflow-hidden">
      <div className="h-1 gold-accent" />
      <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-serif font-bold text-navy-900 tracking-wide">CASE PACKET & EVIDENCE VAULT</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Case packets, official CRF-OC errata, and courtroom stipulations.
          </p>
        </div>

        <div className="flex gap-1 bg-surface-100 p-1 rounded-lg border border-surface-200 w-full sm:w-auto">
          {subTabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setActiveSubTab(id); onClearQuery(); }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeSubTab === id
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
