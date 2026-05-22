import React from 'react';
import { Sparkles, Send, RefreshCw } from 'lucide-react';

const taskOptions = [
  {
    id: 'opening',
    name: 'Opening / Closing Audit',
    placeholder: "Paste your opening statement or closing argument draft here (e.g. 'Ladies and gentlemen, this is a case about cyberbullying...')"
  },
  {
    id: 'witness',
    name: 'Witness Direct / Cross Prep',
    placeholder: "Paste your planned questioning outline or testimony ideas here (e.g. 'Officer Smith, you arrived at 9:00 PM, correct? And you observed...')"
  },
  {
    id: 'objection',
    name: 'Objection Defeater',
    placeholder: "Describe the objection you need to defeat (e.g. 'Prosecution is trying to keep Exhibit B out based on hearsay. How do I argue business records exception?')"
  }
];

export default function PrepConsole({ taskType, setTaskType, inputText, setInputText, loading, onSubmit }) {
  return (
    <div className="card p-5 space-y-4">
      <h2 className="text-sm font-semibold text-navy-900 font-serif flex items-center gap-2 border-b border-surface-200 pb-3">
        <Sparkles className="w-4 h-4 text-gold-500" /> PREP CONSOLE
      </h2>

      <div className="space-y-1.5">
        {taskOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setTaskType(opt.id)}
            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${
              taskType === opt.id
                ? 'bg-navy-800 text-white border-navy-800 shadow-sm'
                : 'bg-white border-surface-200 text-text-primary hover:bg-surface-50'
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        <label className="section-title">Draft Text Segment</label>
        <textarea
          className="input text-xs h-56 resize-none leading-relaxed"
          placeholder={taskOptions.find(o => o.id === taskType)?.placeholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <button onClick={onSubmit} className="btn-primary w-full justify-center" disabled={loading}>
        {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
        {loading ? "Consulting Assistant..." : "Analyze Draft"}
      </button>
    </div>
  );
}
