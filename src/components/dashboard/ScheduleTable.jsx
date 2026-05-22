import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function ScheduleTable() {
  const upcomingRounds = [
    { round: "Round 1", date: "Nov 10, 2026", time: "5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD", status: "upcoming" },
    { round: "Round 2", date: "Nov 12, 2026", time: "5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD", status: "upcoming" },
    { round: "Round 3", date: "Nov 17, 2026", time: "5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD", status: "upcoming" },
    { round: "Round 4", date: "Nov 19, 2026", time: "5:00 PM", location: "Central Justice Center, Santa Ana", opponent: "TBD", status: "upcoming" },
  ];

  return (
    <div className="card">
      <div className="px-5 py-4 border-b border-surface-200 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-gold-500" />
        <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">TOURNAMENT SCHEDULE</h2>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-100 text-text-muted text-xs uppercase tracking-wider">
              <th className="text-left px-5 py-3 font-medium">Round</th>
              <th className="text-left px-5 py-3 font-medium">Date & Time</th>
              <th className="text-left px-5 py-3 font-medium">Location</th>
              <th className="text-right px-5 py-3 font-medium">Opponent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100">
            {upcomingRounds.map((r, i) => (
              <tr key={i} className="hover:bg-surface-50 transition-colors">
                <td className="px-5 py-3.5 font-semibold text-navy-800">{r.round}</td>
                <td className="px-5 py-3.5 text-text-secondary">{r.date} · {r.time}</td>
                <td className="px-5 py-3.5 text-text-secondary flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-text-muted" />{r.location}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <span className="badge badge-muted">{r.opponent}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden divide-y divide-surface-100">
        {upcomingRounds.map((r, i) => (
          <div key={i} className="px-5 py-4 space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-navy-800 text-sm">{r.round}</span>
              <span className="badge badge-muted">{r.opponent}</span>
            </div>
            <p className="text-xs text-text-secondary">{r.date} · {r.time}</p>
            <p className="text-xs text-text-muted flex items-center gap-1">
              <MapPin className="w-3 h-3" />{r.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
