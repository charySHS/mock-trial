import React from 'react';
import { Calendar } from 'lucide-react';

export default function ScheduleTable() {
  const upcomingRounds = [
    { round: "Round 1", date: "Nov 10, 2026 - 5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD" },
    { round: "Round 2", date: "Nov 12, 2026 - 5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD" },
    { round: "Round 3", date: "Nov 17, 2026 - 5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD" },
    { round: "Round 4", date: "Nov 19, 2026 - 5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD" },
  ];

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold font-serif mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
        <Calendar className="w-5 h-5 text-gold-brass" />
        CRF-OC TOURNAMENT SCHEDULE
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-muted">
              <th className="pb-2 font-medium">Round</th>
              <th className="pb-2 font-medium">Date & Time</th>
              <th className="pb-2 font-medium">Court Location</th>
              <th className="pb-2 font-medium text-right">Opposing School</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {upcomingRounds.map((r, i) => (
              <tr key={i} className="hover:bg-navy-dark/45 transition-colors">
                <td className="py-3 font-semibold text-gold-light">{r.round}</td>
                <td className="py-3 text-slate-200">{r.date}</td>
                <td className="py-3 text-slate-300">{r.location}</td>
                <td className="py-3 text-right text-slate-400 font-serif">{r.opponent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
