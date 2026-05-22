import React, { useState, useEffect, useRef } from 'react';
import { Clock, Landmark } from 'lucide-react';
import { gsap } from 'gsap';

export default function CountdownClock() {
  const targetDate = new Date('2026-11-10T17:00:00-07:00'); 
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  const containerRef = useRef(null);

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".time-box", 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.5)' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="glass-card p-6 relative overflow-hidden">
      <h2 className="text-lg font-semibold font-serif mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
        <Clock className="w-5 h-5 text-gold-brass" />
        COUNTDOWN TO CRF-OC ROUND 1
      </h2>
      <div className="grid grid-cols-4 gap-4 text-center max-w-md mx-auto py-2">
        <div className="time-box bg-navy-dark/70 rounded-lg p-3 border border-slate-800/80">
          <span className="text-3xl md:text-4xl font-bold font-serif text-white">{timeLeft.days ?? 0}</span>
          <span className="text-xs text-slate-400 block uppercase mt-1">Days</span>
        </div>
        <div className="time-box bg-navy-dark/70 rounded-lg p-3 border border-slate-800/80">
          <span className="text-3xl md:text-4xl font-bold font-serif text-white">{timeLeft.hours ?? 0}</span>
          <span className="text-xs text-slate-400 block uppercase mt-1">Hours</span>
        </div>
        <div className="time-box bg-navy-dark/70 rounded-lg p-3 border border-slate-800/80">
          <span className="text-3xl md:text-4xl font-bold font-serif text-white">{timeLeft.minutes ?? 0}</span>
          <span className="text-xs text-slate-400 block uppercase mt-1">Mins</span>
        </div>
        <div className="time-box bg-navy-dark/70 rounded-lg p-3 border border-slate-800/80">
          <span className="text-3xl md:text-4xl font-bold font-serif text-white">{timeLeft.seconds ?? 0}</span>
          <span className="text-xs text-slate-400 block uppercase mt-1">Secs</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-900 pt-3">
        <span className="flex items-center gap-1">
          <Landmark className="w-3.5 h-3.5 text-gold-brass" /> Orange County Superior Court
        </span>
        <span>November 10, 2026</span>
      </div>
    </div>
  );
}
