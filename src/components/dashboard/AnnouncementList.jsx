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
      badgeColor: "bg-gold-dark/40 text-gold-light border-gold-primary/30"
    },
    {
      id: 2,
      title: "CRF-OC Official Errata #2 Released",
      date: "Sep 28, 2026",
      desc: "The county released new errata affecting Stipulation #4 and Witness Jordan's official statement. Ensure your direct examinations reflect these changes immediately.",
      badge: "Case Update",
      badgeColor: "bg-red-950/40 text-red-300 border-red-500/20"
    },
    {
      id: 3,
      title: "Uniform & Suit Check",
      date: "Sep 15, 2026",
      desc: "Make sure your courtroom attire matches the professional legal requirements (Navy/Black suit, white button-downs, professional ties). Meet in the library.",
      badge: "Courtroom Prep",
      badgeColor: "bg-slate-800 text-slate-300 border-slate-700"
    }
  ];

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold font-serif mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
        <Bell className="w-5 h-5 text-gold-brass" />
        TEAM ANNOUNCEMENTS
      </h2>
      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
        {announcements.map((item) => (
          <div key={item.id} className="border-l-2 border-gold-brass bg-navy-dark/30 p-4 rounded-r-lg space-y-2 border border-y-slate-900 border-r-slate-900">
            <div className="flex justify-between items-start gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                {item.badge}
              </span>
              <span className="text-[10px] text-slate-muted">{item.date}</span>
            </div>
            <h3 className="font-semibold text-sm text-slate-200">{item.title}</h3>
            <p className="text-xs text-slate-400 font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
