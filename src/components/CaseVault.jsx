import React, { useState } from 'react';
import { Search } from 'lucide-react';
import VaultHeader from './vault/VaultHeader';
import CaseCard from './vault/CaseCard';
import ErrataTable from './vault/ErrataTable';
import StipulationsGrid from './vault/StipulationsGrid';
import fromholzPages from '../data/cases/people-v-fromholz.json';

const DRIVE_FOLDER = "https://drive.google.com/drive/u/1/folders/1qMSr6EuIg0hc5CvfnFcvdXrFvmvdCGJC";

const casePackets = [
  {
    id: "fromholz",
    title: "People v. Fromholz",
    label: "Official CRF-OC Case Packet",
    driveUrl: DRIVE_FOLDER,
    pages: fromholzPages,
  },
];

// Errata and stipulations start empty — fill in when CRF-OC publishes official updates.
const erratas = [];
const stipulations = [];

export default function CaseVault() {
  const [activeSubTab, setActiveSubTab] = useState('packets');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackets = casePackets.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <VaultHeader
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onClearQuery={() => setSearchQuery('')}
      />

      {/* Search only shown on errata tab — only one case packet right now */}
      {activeSubTab === 'errata' && (
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
          <input
            type="text"
            placeholder="Search errata targets or corrections..."
            className="input pl-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {activeSubTab === 'packets' && (
        <div className="space-y-4">
          {filteredPackets.length > 0 ? (
            filteredPackets.map((p) => <CaseCard key={p.id} caseItem={p} />)
          ) : (
            <div className="card p-12 text-center text-text-muted">
              No cases match your search.
            </div>
          )}
        </div>
      )}

      {activeSubTab === 'errata' && (
        <ErrataTable erratas={erratas} searchQuery={searchQuery} />
      )}

      {activeSubTab === 'stips' && (
        <StipulationsGrid stipulations={stipulations} />
      )}
    </div>
  );
}
