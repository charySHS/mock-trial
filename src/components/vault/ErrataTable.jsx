import React, { useState } from 'react';

export default function ErrataTable({ erratas, searchQuery }) {
  const [errataFilter, setErrataFilter] = useState('All');

  const filteredErratas = erratas.filter(e => {
    const matchesSearch = e.target.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.correction.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = errataFilter === 'All' || e.category.includes(errataFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="glass-card p-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-800 pb-4">
        <h3 className="text-base font-serif font-bold text-white">CRF-OC COUNTY ERRATA ARCHIVE</h3>
        
        {/* Category togglers */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Stipulation', 'Smith', 'Dr. Sterling', 'Exhibit'].map((cat, i) => (
            <button
              key={i}
              onClick={() => setErrataFilter(cat)}
              className={`px-3 py-1 rounded text-[10px] font-semibold border transition-all ${errataFilter === cat ? 'bg-gold-brass/25 border-gold-primary text-gold-light' : 'border-slate-800 text-slate-400 hover:border-slate-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-muted">
              <th className="pb-3 pl-2">Date</th>
              <th className="pb-3">Case</th>
              <th className="pb-3">Witness/Stipulation Target</th>
              <th className="pb-3">Correction Details</th>
              <th className="pb-3 text-right pr-2">Action Required</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {filteredErratas.length > 0 ? (
              filteredErratas.map((err) => (
                <tr key={err.id} className="hover:bg-navy-dark/35 transition-colors">
                  <td className="py-4 pl-2 font-mono text-slate-muted">{err.date}</td>
                  <td className="py-4 text-slate-400 font-semibold">{err.case}</td>
                  <td className="py-4 text-gold-light font-medium font-serif">{err.target}</td>
                  <td className="py-4 text-slate-300 max-w-md pr-4 leading-relaxed font-light italic">"{err.correction}"</td>
                  <td className="py-4 text-right pr-2">
                    <span className="inline-block text-[9px] bg-red-950/60 text-red-300 font-bold border border-red-500/20 px-2 py-0.5 rounded">
                      UPDATE SPEECH
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-slate-muted">
                  No errata found matching search query or selected category filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
