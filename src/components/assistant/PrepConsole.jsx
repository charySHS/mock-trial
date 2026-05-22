import React from 'react';
import { Sparkles, Send, RefreshCw } from 'lucide-react';

export default function PrepConsole({ taskType, setTaskType, inputText, setInputText, loading, onSubmit }) {
  const taskOptions = [
    { id: 'opening', name: 'Opening / Closing Audit', placeholder: "Paste your opening statement or closing argument draft here (e.g. 'Ladies and gentlemen of the jury, this is a case about cyberbullying...')" },
    { id: 'witness', name: 'Witness Direct/Cross Prep', placeholder: "Paste your planned questioning outline or testimony ideas here (e.g. 'Officer Smith, you arrived at the residence at 9:00 PM, correct? And you observed...')" },
    { id: 'objection', name: 'Objection Defeater', placeholder: "Describe the objection you are anticipating or struggle to defeat (e.g. 'Prosecution is trying to keep Exhibit B out based on hearsay. How do I argue it is business records exception?')" }
  ];

  return (
    <div className="glass-card p-5 space-y-4 h-full">
      <h2 className="text-sm font-serif font-semibold text-gold-light flex items-center gap-2 border-b border-slate-900 pb-3">
        <Sparkles className="w-4 h-4 text-gold-brass" /> PREP CONSOLE
      </h2>
      
      <div className="space-y-3">
        {taskOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setTaskType(opt.id)}
            className={`w-full text-left p-3 rounded-lg text-xs font-serif transition-all border block cursor-pointer ${taskType === opt.id ? 'bg-gold-brass text-navy-darkest border-gold-primary font-bold' : 'bg-navy-dark/40 border-slate-900 text-slate-300 hover:border-slate-800'}`}
          >
            {opt.name}
          </button>
        ))}
      </div>

      <div className="space-y-1">
        <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Draft Text Segment</label>
        <textarea
          className="input-gold text-xs h-60 resize-none leading-relaxed font-light"
          placeholder={taskOptions.find(o => o.id === taskType)?.placeholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <button onClick={onSubmit} className="btn-gold w-full justify-center text-xs" disabled={loading}>
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-3.5 h-3.5" />
        )}
        {loading ? "CONSULTING ASSOCIATE..." : "ANALYZE DRAFT"}
      </button>
    </div>
  );
}
