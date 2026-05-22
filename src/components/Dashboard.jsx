import React from 'react';
import WelcomeBanner from './dashboard/WelcomeBanner';
import CountdownClock from './dashboard/CountdownClock';
import ScheduleTable from './dashboard/ScheduleTable';
import ProgressMetrics from './dashboard/ProgressMetrics';
import AnnouncementList from './dashboard/AnnouncementList';
import TrialMaxim from './dashboard/TrialMaxim';

export default function Dashboard({ setActiveTab }) {
  return (
    <div className="space-y-6">
      {/* Header + Quick Actions */}
      <WelcomeBanner setActiveTab={setActiveTab} />

      {/* Stats row */}
      <CountdownClock />

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ScheduleTable />
          <ProgressMetrics />
        </div>
        <div className="space-y-6">
          <AnnouncementList />
          <TrialMaxim />
        </div>
      </div>
    </div>
  );
}
