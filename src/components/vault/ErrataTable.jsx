import React, { useState } from 'react';

const CATEGORIES = ['All', 'Stipulation', 'Officer Smith', 'Dr. Sterling', 'Exhibit'];

export default function ErrataTable({ erratas, searchQuery }) {
  const [errataFilter, setErrataFilter] = useState('All');

  const filtered = erratas.filter(e => {
    const matchesSearch =
      e.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.correction.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = errataFilter === 'All' || e.category.includes(errataFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="card">
      <div className="px-5 py-4 border-b border-surface-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">CRF-OC ERRATA ARCHIVE</h3>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setErrataFilter(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all cursor-pointer ${
                errataFilter === cat
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-text-secondary border-surface-300 hover:border-surface-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-100 text-text-muted text-xs uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="text-left px-5 py-3 font-medium">Case</th>
              <th className="text-left px-5 py-3 font-medium">Target</th>
              <th className="text-left px-5 py-3 font-medium">Correction</th>
              <th className="text-right px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100">
            {filtered.length > 0 ? (
              filtered.map((err) => (
                <tr key={err.id} className="hover:bg-surface-50 transition-colors align-top">
                  <td className="px-5 py-3.5 font-mono text-xs text-text-muted whitespace-nowrap">{err.date}</td>
                  <td className="px-5 py-3.5 font-semibold text-navy-800 whitespace-nowrap">{err.case}</td>
                  <td className="px-5 py-3.5 font-medium text-text-primary whitespace-nowrap">{err.target}</td>
                  <td className="px-5 py-3.5 text-text-secondary max-w-md italic leading-relaxed">
                    "{err.correction}"
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="badge badge-danger">Update Speech</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-text-muted">
                  No errata match your search or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
