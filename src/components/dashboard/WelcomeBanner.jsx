import React, { useEffect, useRef } from 'react';
import { BookOpen, Gavel } from 'lucide-react';
import { gsap } from 'gsap';

export default function WelcomeBanner({ setActiveTab }) {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bannerRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(textRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bannerRef} className="relative glass-card overflow-hidden p-8 md:p-12 gold-gradient-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-primary/10 via-transparent to-transparent opacity-60"></div>
      <div ref={textRef} className="relative z-10 max-w-4xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-gold-brass font-bold border border-gold-primary/30 px-3 py-1 rounded-full bg-gold-dark/10 inline-block">
          SERVITE HIGH SCHOOL MOCK TRIAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif gold-text leading-tight">
          Credo ut Intelligam <br/>
          <span className="text-white text-2xl md:text-3xl block mt-1 font-sans font-light tracking-wide">
            The Courtroom is Our Arena
          </span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light">
          Welcome to the official **Servite Mock Trial Team Hub**. This is your command center for CRF-OC tournament materials, role playbooks, objections, and speech building. Prepare with honor, argue with conviction.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button onClick={() => setActiveTab('vault')} className="btn-gold">
            <BookOpen className="w-4 h-4" />
            Access Case Vault
          </button>
          <button onClick={() => setActiveTab('assistant')} className="btn-outline">
            <Gavel className="w-4 h-4" />
            Prep Speeches with AI
          </button>
        </div>
      </div>
    </div>
  );
}
