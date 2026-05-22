import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function ObjectionSelector({ objections, selectedObjection, onSelectObjection }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredObjections = objections.filter(obj => 
    obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.rule.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-card p-4 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
        <input 
          type="text" 
          placeholder="Search objections (e.g. Hearsay)..."
          className="input-gold pl-9 py-1.5 text-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
        {filteredObjections.map((obj, i) => (
          <button
            key={i}
            onClick={() => onSelectObjection(obj)}
            className={`w-full text-left p-3 rounded-lg text-xs font-serif transition-all border flex justify-between items-center cursor-pointer ${selectedObjection?.name === obj.name ? 'bg-gold-brass text-navy-darkest border-gold-primary font-bold shadow-md scale-[1.01]' : 'bg-navy-dark/40 border-slate-900 text-slate-300 hover:border-slate-800'}`}
          >
            <span>{obj.name}</span>
            <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${selectedObjection?.name === obj.name ? 'bg-navy-darkest text-gold-brass' : 'bg-slate-900 text-slate-400'}`}>
              {obj.rule}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
