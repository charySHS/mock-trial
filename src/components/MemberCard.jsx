import React, { useState } from 'react';
import CardForm from './card/CardForm';
import CardPreview from './card/CardPreview';

export default function MemberCard() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    role: "Lead Trial Attorney",
    team: "Varsity Gold",
    academicYear: "2026 - 2027",
    avatarIcon: "scales"
  });

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 675; // 3.375 * 200
    canvas.height = 425; // 2.125 * 200
    const ctx = canvas.getContext('2d');

    // 1. Draw Background
    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, '#050814');
    bgGradient.addColorStop(0.5, '#0a1128');
    bgGradient.addColorStop(1, '#121f45');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Subtle Watermark Scales
    ctx.globalAlpha = 0.04;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 200px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚖️', canvas.width / 2, canvas.height / 2);
    ctx.globalAlpha = 1.0;

    // 3. Draw Outer Double Borders (Gold)
    ctx.strokeStyle = '#c5a880';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.lineWidth = 1;
    ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

    // 4. Header Bar
    ctx.fillStyle = 'rgba(197, 168, 128, 0.08)';
    ctx.fillRect(19, 19, canvas.width - 38, 60);
    ctx.strokeStyle = 'rgba(197, 168, 128, 0.2)';
    ctx.beginPath();
    ctx.moveTo(19, 79);
    ctx.lineTo(canvas.width - 19, 79);
    ctx.stroke();

    // 5. Header Typography
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 15px serif';
    ctx.textAlign = 'center';
    ctx.fillText('SERVITE HIGH SCHOOL MOCK TRIAL ASSOCIATION', canvas.width / 2, 45);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px sans-serif';
    ctx.fillText('CRF-OC BAR PREPARATION DIVISION', canvas.width / 2, 62);

    // 6. Left Side: Avatar Box or Seal
    ctx.fillStyle = '#050814';
    ctx.strokeStyle = 'rgba(197, 168, 128, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 110, 120, 140);
    ctx.fillRect(40, 110, 120, 140);

    // Draw avatar icon
    ctx.fillStyle = '#c5a880';
    ctx.font = '50px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const avatarGlyph = formData.avatarIcon === 'scales' ? '⚖️' : formData.avatarIcon === 'gavel' ? '🔨' : '🛡️';
    ctx.fillText(avatarGlyph, 100, 180);

    // 7. Right Side: Member Details
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    
    // Member Name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px serif';
    ctx.fillText(formData.name.toUpperCase(), 185, 135);

    // Role
    ctx.fillStyle = '#d4af37';
    ctx.font = '12px sans-serif';
    ctx.fillText(`ROLE: ${formData.role}`, 185, 165);

    // Team
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '11px sans-serif';
    ctx.fillText(`TEAM TIER: ${formData.team}`, 185, 190);

    // Academic Year
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText(`MEMBER YEAR: ${formData.academicYear}`, 185, 215);

    // Status
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(185, 235, 140, 24);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(185, 235, 140, 24);
    
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('STATUS: ACTIVE MEMBER', 198, 251);

    // 8. Bottom Bar: Justice seal and signature
    ctx.fillStyle = 'rgba(197, 168, 128, 0.05)';
    ctx.fillRect(19, 310, canvas.width - 38, 96);
    ctx.strokeStyle = 'rgba(197, 168, 128, 0.2)';
    ctx.beginPath();
    ctx.moveTo(19, 310);
    ctx.lineTo(canvas.width - 19, 310);
    ctx.stroke();

    // Seal details bottom-left
    ctx.fillStyle = '#c5a880';
    ctx.font = 'italic 10px serif';
    ctx.fillText('Servite Legal Seals Authentic Authority', 40, 350);
    ctx.font = '9px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Validated under CRF-OC Rule 3.4', 40, 368);

    // Signature bottom-right
    ctx.strokeStyle = 'rgba(197, 168, 128, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(420, 360);
    ctx.lineTo(620, 360);
    ctx.stroke();
    
    ctx.fillStyle = '#94a3b8';
    ctx.font = '8px sans-serif';
    ctx.fillText('OFFICIAL COUNSEL SIGNATURE', 450, 375);

    // Fake cursive signature drawing
    ctx.strokeStyle = '#c5a880';
    ctx.lineWidth = 2;
    ctx.font = 'italic 16px Georgia';
    ctx.fillStyle = '#c5a880';
    ctx.fillText(formData.name, 450, 350);

    // 9. Process Export download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `servite-bar-card-${formData.name.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="fade-in space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-xl font-serif font-bold text-white tracking-wide">MEMBER CARD GENERATOR</h1>
        <p className="text-xs text-slate-400">Generate a premium Servite Courtroom Bar Badge to print or share.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <CardForm 
          formData={formData} 
          setFormData={setFormData} 
          onDownload={handleDownload} 
        />
        <CardPreview formData={formData} />
      </div>
    </div>
  );
}
