import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, FileImage } from 'lucide-react';

export default function CaseCard({ caseItem }) {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-200">
        <div className="space-y-1">
          <span className="badge badge-navy">{caseItem.label}</span>
          <h3 className="text-lg font-serif font-bold text-navy-900 mt-1">{caseItem.title}</h3>
        </div>
        <a
          href={caseItem.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs shrink-0"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Open in Google Drive
        </a>
      </div>

      {/* Page preview toggle */}
      {caseItem.pages?.length > 0 && (
        <div>
          <button
            onClick={() => setPagesOpen(v => !v)}
            className="w-full flex items-center justify-between px-5 py-3 text-sm text-text-secondary hover:bg-surface-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FileImage className="w-4 h-4 text-text-muted" />
              Preview pages ({caseItem.pages.length} available)
            </span>
            {pagesOpen
              ? <ChevronUp className="w-4 h-4 text-text-muted" />
              : <ChevronDown className="w-4 h-4 text-text-muted" />}
          </button>

          {pagesOpen && (
            <div className="border-t border-surface-100 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseItem.pages.map((url, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-surface-200 bg-surface-50">
                  <div className="px-2 py-1 border-b border-surface-200 text-[10px] text-text-muted font-medium">
                    Page {idx + 1}
                  </div>
                  <img
                    src={url}
                    alt={`${caseItem.title} — page ${idx + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
              <p className="col-span-full text-xs text-text-muted text-center pt-1">
                For the full document, open in Google Drive above.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
