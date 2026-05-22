import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function ObjectionSelector({ objections, selectedObjection, onSelectObjection }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = objections.filter(obj =>
    obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.rule.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-3.5 h-3.5" />
        <input
          type="text"
          placeholder="Search objections..."
          className="input pl-9 py-2 text-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-1 max-h-[320px] overflow-y-auto pr-1">
        {filtered.map((obj) => (
          <button
            key={obj.name}
            onClick={() => onSelectObjection(obj)}
            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all border flex justify-between items-center cursor-pointer ${
              selectedObjection?.name === obj.name
                ? 'bg-navy-800 text-white border-navy-800 shadow-sm'
                : 'bg-white border-surface-200 text-text-primary hover:bg-surface-50 hover:border-surface-300'
            }`}
          >
            <span>{obj.name}</span>
            <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
              selectedObjection?.name === obj.name
                ? 'bg-white/20 text-gold-300'
                : 'bg-surface-100 text-text-muted'
            }`}>
              {obj.rule}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
