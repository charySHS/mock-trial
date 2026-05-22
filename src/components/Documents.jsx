import React from 'react';
import { FolderOpen, ExternalLink, FileText, Users, Gavel, BookOpen, Shield } from 'lucide-react';

const DRIVE_FOLDER = "https://drive.google.com/drive/u/1/folders/1qMSr6EuIg0hc5CvfnFcvdXrFvmvdCGJC";

const categories = [
  {
    title: "Case Files",
    icon: Gavel,
    accent: "bg-navy-800",
    iconColor: "text-gold-400",
    docs: [
      "People v. Clark — Official CRF-OC Case Packet",
      "Exhibit A–E Reference Sheet",
      "CRF-OC Official Errata Archive",
      "Stipulations Summary Document",
    ]
  },
  {
    title: "Opening & Closing Materials",
    icon: BookOpen,
    accent: "bg-blue-600",
    iconColor: "text-white",
    docs: [
      "Opening Statement Template (Prosecution)",
      "Opening Statement Template (Defense)",
      "Closing Argument Outline Framework",
      "Theme Development Worksheet",
    ]
  },
  {
    title: "Examination Scripts",
    icon: FileText,
    accent: "bg-emerald-600",
    iconColor: "text-white",
    docs: [
      "Direct Examination Question Banks",
      "Cross-Examination Control Techniques",
      "Impeachment Protocol Checklist",
      "Witness Prep Practice Forms",
    ]
  },
  {
    title: "Rules & Reference",
    icon: Shield,
    accent: "bg-gold-500",
    iconColor: "text-navy-900",
    docs: [
      "CRF-OC Rules of Evidence (Mock Trial Edition)",
      "Objections Quick-Reference Card",
      "Courtroom Etiquette & Procedure Guide",
      "Scoring Rubric Breakdown",
    ]
  },
  {
    title: "Team & Admin",
    icon: Users,
    accent: "bg-surface-300",
    iconColor: "text-text-primary",
    docs: [
      "Tournament Schedule & Assignments",
      "Team Contact List",
      "Uniform & Attire Checklist",
      "Coach Contact & Office Hours",
    ]
  }
];

export default function Documents() {
  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="card overflow-hidden">
        <div className="h-1 gold-accent" />
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="badge badge-navy">Google Drive</span>
              <span className="badge badge-success">Shared Folder</span>
            </div>
            <h1 className="text-2xl font-bold font-serif text-navy-900">Team Documents</h1>
            <p className="text-sm text-text-secondary">
              Case files, templates, and reference materials for the Servite Mock Trial team.
              All docs live in Google Drive — click any item to open.
            </p>
          </div>
          <a
            href={DRIVE_FOLDER}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs shrink-0"
          >
            <FolderOpen className="w-4 h-4" />
            Open Drive Folder
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Document category cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.title} className="card">
              <div className="px-5 py-3.5 border-b border-surface-200 flex items-center gap-2.5">
                <div className={`${cat.accent} p-1.5 rounded-md`}>
                  <Icon className={`w-3.5 h-3.5 ${cat.iconColor}`} />
                </div>
                <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">
                  {cat.title.toUpperCase()}
                </h2>
              </div>
              <div className="divide-y divide-surface-100">
                {cat.docs.map((docName) => (
                  <a
                    key={docName}
                    href={DRIVE_FOLDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3 hover:bg-surface-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-3.5 h-3.5 text-text-muted shrink-0" />
                      <span className="text-sm text-text-primary group-hover:text-navy-800 transition-colors">
                        {docName}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-navy-600 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-text-muted text-center pb-2">
        Documents open directly in Google Drive. Contact a team lead if you need access to the shared folder.
      </p>
    </div>
  );
}
