import React, { useState } from 'react';
import { Users, Gavel, Shield, Scale, Clock, Star } from 'lucide-react';

const ROLES = {
  attorney: { label: 'Attorney', icon: Gavel, color: 'badge-navy' },
  witness: { label: 'Witness', icon: Scale, color: 'badge-gold' },
  clerk: { label: 'Clerk', icon: Clock, color: 'badge-info' },
  bailiff: { label: 'Bailiff', icon: Shield, color: 'badge-muted' },
  captain: { label: 'Team Captain', icon: Star, color: 'badge-success' },
};

const TEAMS = ['Varsity Gold', 'Varsity Blue', 'Junior Varsity Black', 'Junior Varsity White'];

const INITIAL_MEMBERS = [
  { id: 1, name: "Alex Johnson", role: "attorney", team: "Varsity Gold", year: "Senior", specialty: "Prosecution Opening / Closing" },
  { id: 2, name: "Maria Santos", role: "attorney", team: "Varsity Gold", year: "Junior", specialty: "Defense Cross-Examination" },
  { id: 3, name: "Daniel Kim", role: "witness", team: "Varsity Gold", year: "Senior", specialty: "Jordan Clark (Defendant)" },
  { id: 4, name: "Priya Nair", role: "witness", team: "Varsity Gold", year: "Junior", specialty: "Dr. Sterling (Expert)" },
  { id: 5, name: "Tyler Nguyen", role: "clerk", team: "Varsity Gold", year: "Sophomore", specialty: "Timekeeping & Exhibits" },
  { id: 6, name: "Chris Reyes", role: "captain", team: "Varsity Gold", year: "Senior", specialty: "Team Strategy Lead" },
  { id: 7, name: "Sam Park", role: "attorney", team: "Varsity Blue", year: "Junior", specialty: "Defense Opening / Closing" },
  { id: 8, name: "Jordan Lee", role: "witness", team: "Varsity Blue", year: "Senior", specialty: "Officer Smith (Prosecution)" },
  { id: 9, name: "Ryan Chen", role: "bailiff", team: "Varsity Blue", year: "Sophomore", specialty: "Court Order & Oath Administration" },
  { id: 10, name: "Aiden Walsh", role: "attorney", team: "Junior Varsity Black", year: "Freshman", specialty: "Pre-Trial & Direct Examination" },
];

export default function MemberCard() {
  const [activeTeam, setActiveTeam] = useState('All');
  const [activeRole, setActiveRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = INITIAL_MEMBERS.filter(m => {
    const teamMatch = activeTeam === 'All' || m.team === activeTeam;
    const roleMatch = activeRole === 'All' || m.role === activeRole;
    const searchMatch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return teamMatch && roleMatch && searchMatch;
  });

  const teamCounts = TEAMS.reduce((acc, t) => {
    acc[t] = INITIAL_MEMBERS.filter(m => m.team === t).length;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card overflow-hidden">
        <div className="h-1 gold-accent" />
        <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-serif font-bold text-navy-900 tracking-wide">TEAM ROSTER</h1>
            <p className="text-xs text-text-muted mt-0.5">
              {INITIAL_MEMBERS.length} members · CRF-OC 2026–2027 Season
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gold-500" />
            <span className="text-sm font-semibold text-navy-900">{filtered.length} shown</span>
          </div>
        </div>
      </div>

      {/* Team summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TEAMS.map(team => (
          <button
            key={team}
            onClick={() => setActiveTeam(activeTeam === team ? 'All' : team)}
            className={`card p-4 text-left transition-all cursor-pointer ${activeTeam === team ? 'ring-2 ring-navy-800' : 'hover:shadow-md'}`}
          >
            <span className="text-xl font-bold font-serif text-navy-900 block">{teamCounts[team] ?? 0}</span>
            <span className="text-xs text-text-secondary leading-tight block mt-0.5">{team}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search members..."
          className="input flex-1"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-1.5 flex-wrap">
          {['All', ...Object.keys(ROLES)].map(r => (
            <button
              key={r}
              onClick={() => setActiveRole(r)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer capitalize ${
                activeRole === r
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-text-secondary border-surface-300 hover:bg-surface-50'
              }`}
            >
              {r === 'All' ? 'All Roles' : ROLES[r].label}
            </button>
          ))}
        </div>
      </div>

      {/* Member grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(member => {
            const roleInfo = ROLES[member.role];
            const Icon = roleInfo?.icon ?? Users;
            return (
              <div key={member.id} className="card p-4 flex items-start gap-4">
                <div className="bg-navy-800 text-gold-400 p-2.5 rounded-xl shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-navy-900 truncate">{member.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <span className={`badge ${roleInfo?.color ?? 'badge-muted'}`}>{roleInfo?.label}</span>
                    <span className="badge badge-muted">{member.year}</span>
                  </div>
                  <p className="text-xs text-text-muted mt-2 leading-snug">{member.specialty}</p>
                  <p className="text-[10px] font-semibold text-text-muted mt-1 uppercase tracking-wide">{member.team}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card p-10 text-center text-text-muted">
          No members match your filters.
        </div>
      )}

      <p className="text-xs text-text-muted text-center pb-2">
        Contact your team captain to update roster entries.
      </p>
    </div>
  );
}
