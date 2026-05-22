import React, { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function CountdownClock() {
  const targetDate = new Date('2026-11-10T17:00:00-07:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="card p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: label */}
        <div className="flex items-center gap-3">
          <div className="bg-navy-800 p-2 rounded-lg text-gold-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">
              CRF-OC ROUND 1
            </h2>
            <p className="text-xs text-text-muted flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" /> Orange County Superior Court · Nov 10, 2026
            </p>
          </div>
        </div>

        {/* Right: countdown */}
        <div className="flex gap-3">
          {units.map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="bg-navy-900 text-white font-bold text-xl sm:text-2xl font-serif rounded-lg w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-text-muted uppercase font-semibold mt-1 block">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
