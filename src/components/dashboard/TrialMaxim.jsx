import React, { useEffect, useRef } from 'react';
import { Gavel } from 'lucide-react';
import { gsap } from 'gsap';

export default function TrialMaxim() {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Subtle float animation for the gavel watermark
    gsap.to(iconRef.current, {
      y: -6,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      borderColor: 'rgba(212, 175, 55, 0.45)',
      boxShadow: '0 15px 45px 0 rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.08)',
      y: -3,
      duration: 0.3,
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      borderColor: 'rgba(197, 168, 128, 0.15)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      y: 0,
      duration: 0.3,
      ease: 'power1.out'
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-6 bg-gradient-to-br from-navy-dark/90 to-navy-medium/30 relative overflow-hidden transition-all duration-300"
    >
      <div ref={iconRef} className="absolute -right-6 -bottom-6 text-gold-primary/5 pointer-events-none">
        <Gavel className="w-32 h-32 transform rotate-45" />
      </div>
      <h2 className="text-xs uppercase tracking-widest text-gold-brass font-bold mb-3">
        Weekly Trial Maxim
      </h2>
      <blockquote className="space-y-2">
        <p className="text-sm font-serif italic text-gold-light">
          "In a courtroom, facts alone are cold. You must weave them into a compelling story of human truth. Credibility is won or lost in the details."
        </p>
        <footer className="text-xs text-slate-400 text-right">
          — Courtroom Advocate Counsel
        </footer>
      </blockquote>
    </div>
  );
}
