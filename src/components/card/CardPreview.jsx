import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

export default function CardPreview({ formData }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // Initial scale bounce animation on mount
    gsap.fromTo(cardRef.current,
      { scale: 0.9, opacity: 0, rotationY: -15 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 0.6, ease: 'back.out(1.4)' }
    );
  }, []);

  // Premium 3D Tilt Effect on mousemove
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x * 0.06,
      rotateX: -y * 0.1,
      transformPerspective: 800,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xs text-slate-400 uppercase font-bold tracking-widest pl-1">Live Card Preview</h2>
      
      {/* 3D Interactive Badge Area */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="printable-card-area w-full aspect-[1.588] bg-gradient-to-br from-navy-darkest via-navy-dark to-navy-medium p-5 rounded-xl border-4 border-double border-gold-brass shadow-2xl relative overflow-hidden flex flex-col justify-between cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Scales Watermark background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none" style={{ transform: 'translateZ(10px)' }}>
          <span className="text-[200px]">⚖️</span>
        </div>

        {/* Header Area */}
        <div className="border-b border-gold-brass/25 pb-2 text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-gold-primary font-serif font-extrabold text-[12px] md:text-[14px] leading-tight tracking-wider uppercase">
            Servite High School Mock Trial Association
          </h3>
          <p className="text-[8px] text-slate-400 tracking-widest uppercase font-bold">
            CRF-OC BAR PREPARATION DIVISION
          </p>
        </div>

        {/* Middle Section: Avatar Photo & Details */}
        <div className="flex gap-4 items-center relative z-10 flex-grow py-3" style={{ transform: 'translateZ(30px)' }}>
          {/* Photo Box */}
          <div className="w-20 md:w-24 aspect-[0.8] bg-slate-950 border border-gold-brass/35 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
            <span className="text-3xl md:text-4xl text-gold-brass select-none">
              {formData.avatarIcon === 'scales' ? '⚖️' : formData.avatarIcon === 'gavel' ? '🔨' : '🛡️'}
            </span>
          </div>

          {/* Details Column */}
          <div className="space-y-1 md:space-y-1.5 flex-grow">
            <h4 className="text-sm md:text-base font-serif font-bold text-white tracking-wide truncate">
              {formData.name.toUpperCase()}
            </h4>
            
            <div className="space-y-0.5 text-[9px] md:text-[10px]">
              <p className="text-gold-brass font-semibold font-sans">
                <span className="text-slate-400">ROLE:</span> {formData.role}
              </p>
              <p className="text-slate-200">
                <span className="text-slate-400">TEAM:</span> {formData.team}
              </p>
              <p className="text-slate-300">
                <span className="text-slate-400">YEAR:</span> {formData.academicYear}
              </p>
            </div>

            {/* Active Tag */}
            <div className="inline-flex items-center gap-1 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px] text-emerald-400 font-bold tracking-wider">
              <CheckCircle2 className="w-2.5 h-2.5" /> ACTIVE MEMBER
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gold-brass/25 pt-2 flex justify-between items-end relative z-10" style={{ transform: 'translateZ(15px)' }}>
          <div className="space-y-0.5">
            <p className="text-[7px] md:text-[8px] text-gold-brass font-serif italic">
              Servite Legal Seals Authority
            </p>
            <p className="text-[6px] md:text-[7px] text-slate-400 font-sans font-light">
              Validated under CRF-OC Rule 3.4
            </p>
          </div>

          {/* Signature Spot */}
          <div className="text-right border-b border-gold-brass/40 pb-0.5 px-3 min-w-[120px]">
            <span className="font-serif italic text-[11px] md:text-[12px] text-gold-brass block leading-none font-medium">
              {formData.name}
            </span>
            <span className="text-[5px] md:text-[6px] text-slate-400 block tracking-widest font-bold uppercase mt-1">
              OFFICIAL COUNSEL SIGNATURE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
