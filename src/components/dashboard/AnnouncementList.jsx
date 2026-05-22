import React from 'react';
import { Bell } from 'lucide-react';

export default function AnnouncementList() {
  const announcements = [
    {
      id: 1,
      title: "Scrimmage with Rosary Academy",
      date: "Oct 22, 2026",
      desc: "Our annual joint scrimmage is scheduled! Prosecution will host in the Servite Lecture Hall, Defense will travel. Uniforms are mandatory.",
      badge: "Crucial Match",
      badgeClass: "badge-gold"
    },
    {
      id: 2,
      title: "CRF-OC Official Errata #2 Released",
      date: "Sep 28, 2026",
      desc: "New errata affecting Stipulation #4 and Witness Jordan's official statement. Update your directs immediately.",
      badge: "Case Update",
      badgeClass: "badge-danger"
    },
    {
      id: 3,
      title: "Uniform & Suit Check",
      date: "Sep 15, 2026",
      desc: "Courtroom attire check — navy/black suit, white button-down, professional tie. Meet in the library.",
      badge: "Prep",
      badgeClass: "badge-muted"
    }
  ];

  return (
    <div className="card">
      <div className="px-5 py-4 border-b border-surface-200 flex items-center gap-2">
        <Bell className="w-4 h-4 text-gold-500" />
        <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">ANNOUNCEMENTS</h2>
      </div>
      <div className="divide-y divide-surface-100">
        {announcements.map((item) => (
          <div key={item.id} className="px-5 py-4 space-y-2 hover:bg-surface-50 transition-colors">
            <div className="flex justify-between items-start gap-2">
              <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
              <span className="text-[10px] text-text-muted whitespace-nowrap">{item.date}</span>
            </div>
            <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
