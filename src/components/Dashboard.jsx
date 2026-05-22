import React from 'react';
import WelcomeBanner from './dashboard/WelcomeBanner';
import CountdownClock from './dashboard/CountdownClock';
import ScheduleTable from './dashboard/ScheduleTable';
import ProgressMetrics from './dashboard/ProgressMetrics';
import AnnouncementList from './dashboard/AnnouncementList';
import TrialMaxim from './dashboard/TrialMaxim';

export default function Dashboard({ setActiveTab }) {
  return (
    <div className="fade-in space-y-8">
      {/* 1. Hero Banner */}
      <WelcomeBanner setActiveTab={setActiveTab} />

      {/* 2. Primary Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side Col: Countdown & Lists */}
        <div className="lg:col-span-2 space-y-6">
          <CountdownClock />
          <ScheduleTable />
          <ProgressMetrics />
        </div>

        {/* Right Side Col: Bulletins & Maxims */}
        <div className="space-y-6">
          <AnnouncementList />
          <TrialMaxim />
        </div>

      </div>
    </div>
  );
}
