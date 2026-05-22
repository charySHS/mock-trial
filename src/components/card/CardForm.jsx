import React from 'react';
import { Award, Download } from 'lucide-react';

export default function CardForm({ formData, setFormData, onDownload }) {
  const roles = [
    "Pre-Trial Attorney",
    "Lead Trial Attorney",
    "Co-Counsel Attorney",
    "Prosecution Clerk",
    "Defense Bailiff",
    "Material Witness",
    "Expert Witness",
    "Team Captain"
  ];

  const teams = [
    "Varsity Gold",
    "Varsity Blue",
    "Junior Varsity Black",
    "Junior Varsity White"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="glass-card p-6 space-y-5">
      <h2 className="text-sm font-serif font-semibold text-gold-light flex items-center gap-2 border-b border-slate-900 pb-3">
        <Award className="w-4.5 h-4.5 text-gold-brass" /> CARD CREATION TOOL
      </h2>
      
      <div className="space-y-4">
        
        {/* Name Input */}
        <div className="space-y-1">
          <label className="text-xs text-slate-400 uppercase font-bold tracking-wider">Member Name</label>
          <input 
            type="text" 
            name="name"
            maxLength="24"
            className="input-gold text-xs" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter member name..."
          />
        </div>

        {/* Role Select */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-400 uppercase font-bold tracking-wider">Trial Role</label>
            <select 
              name="role"
              className="input-gold text-xs h-10 bg-navy-dark"
              value={formData.role}
              onChange={handleInputChange}
            >
              {roles.map((r, i) => (
                <option key={i} value={r} className="bg-navy-darkest text-slate-300">{r}</option>
              ))}
            </select>
          </div>

          {/* Team Select */}
          <div className="space-y-1">
            <label className="text-xs text-slate-400 uppercase font-bold tracking-wider">Team Tier</label>
            <select 
              name="team"
              className="input-gold text-xs h-10 bg-navy-dark"
              value={formData.team}
              onChange={handleInputChange}
            >
              {teams.map((t, i) => (
                <option key={i} value={t} className="bg-navy-darkest text-slate-300">{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Academic Year & Avatar Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-400 uppercase font-bold tracking-wider">Academic Year</label>
            <input 
              type="text" 
              name="academicYear"
              className="input-gold text-xs" 
              value={formData.academicYear}
              onChange={handleInputChange}
              placeholder="e.g. 2026 - 2027"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-400 uppercase font-bold tracking-wider">Insignia Shield</label>
            <div className="flex gap-2">
              {[
                { id: 'scales', label: '⚖️' },
                { id: 'gavel', label: '🔨' },
                { id: 'shield', label: '🛡️' }
              ].map((x) => (
                <button
                  key={x.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, avatarIcon: x.id }))}
                  className={`flex-1 py-1 text-base rounded border transition-all cursor-pointer ${formData.avatarIcon === x.id ? 'bg-gold-brass/25 border-gold-primary text-gold-light font-bold' : 'border-slate-800 bg-navy-dark/40 hover:border-slate-700'}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info tip */}
        <div className="bg-navy-dark/40 border border-slate-900 rounded p-3 text-[11px] text-slate-400 leading-relaxed">
          * Note: The generated image includes standard print formats that comply with standard wallet badge protectors (3.375" x 2.125"). Use heavy cardstock for best results.
        </div>

        {/* Action */}
        <button onClick={onDownload} className="btn-gold w-full justify-center">
          <Download className="w-4 h-4" />
          DOWNLOAD MEMBER CARD PNG
        </button>
      </div>
    </div>
  );
}
