import React, { useState } from 'react';
import { Search } from 'lucide-react';
import VaultHeader from './vault/VaultHeader';
import CaseCard from './vault/CaseCard';
import ErrataTable from './vault/ErrataTable';
import StipulationsGrid from './vault/StipulationsGrid';

const casePackets = [
  {
    title: "People v. Jordan Clark",
    type: "CRF-OC Current Season Case",
    desc: "A high school cyberbullying and criminal threat case. Jordan Clark, a junior at Foothill High School, is accused of sending a series of threatening electronic messages to former friend Hayden Reyes after a social falling-out. Digital forensics, cell tower evidence, and expert psychological testimony are central to the case.",
    witnesses: {
      pros: [
        "Officer D. Smith (Investigating Officer)",
        "Dr. Morgan Sterling (Forensic Psychologist)",
        "Hayden Reyes (Victim / Percipient Witness)",
      ],
      def: [
        "Jordan Clark (Defendant)",
        "Dr. Casey Bennett (Defense Expert)",
        "Riley Torres (Character Witness)",
      ]
    },
    released: "Aug 12, 2026",
    fileSize: "4.2 MB"
  },
  {
    title: "People v. Cobey (Reference)",
    type: "CRF-OC Prior Season Archive",
    desc: "A prior-year CRF-OC case used for practice scrimmages. People v. Cobey involves DUI allegations where toxicologist testimony is the central expert witness dispute. Useful for practicing foundational challenges, expert qualification, and cross-examination technique.",
    witnesses: {
      pros: [
        "Officer K. Rivera (Traffic Stop Officer)",
        "Dr. T. Nguyen (State Toxicologist)",
        "M. Sandoval (Eyewitness)",
      ],
      def: [
        "Chris Cobey (Defendant)",
        "Dr. A. Park (Defense Toxicologist)",
        "J. Wells (Character Witness)",
      ]
    },
    released: "Jun 05, 2025",
    fileSize: "3.8 MB"
  }
];

const erratas = [
  { id: 1, case: "People v. Clark", target: "Stipulation 4", correction: "Add sentence: 'The IP address logs listed in Exhibit B are authenticated and belong to Jordan Clark's household router.'", date: "Sep 28, 2026", category: "Stipulation" },
  { id: 2, case: "People v. Clark", target: "Officer Smith Statement", correction: "Page 22, Line 15: Change 'I saw the suspect run past at 9:00 PM' to 'I saw the suspect run past at 10:00 PM.'", date: "Sep 22, 2026", category: "Officer Smith" },
  { id: 3, case: "People v. Clark", target: "Exhibit C (Cell Tower Log)", correction: "Clarified that cell tower measurements indicate connection sectors, not precise global positioning coordinate telemetry.", date: "Sep 12, 2026", category: "Exhibit" },
  { id: 4, case: "People v. Clark", target: "Dr. Sterling Statement", correction: "Page 45, Line 8: The diagnosis is revised to 'generalized anxiety disorder with post-traumatic tendencies' rather than acute psychosis.", date: "Aug 29, 2026", category: "Dr. Sterling" },
  { id: 5, case: "People v. Cobey", target: "Stipulation 11", correction: "Clarified that toxicologist certifications are authenticated and no further foundational testimony is required.", date: "Oct 05, 2025", category: "Stipulation" }
];

const stipulations = [
  { num: 1, text: "All witnesses are deemed to have been duly sworn and are legally competent to testify." },
  { num: 2, text: "The incident in question occurred inside the city limits of Santa Ana, California, which is within Orange County jurisdiction." },
  { num: 3, text: "The chain of custody for all digital exhibits (Exhibits A-E) is authenticated and uncontested." },
  { num: 4, text: "Jordan Clark owns and is the primary user of the mobile device containing cellular phone number 714-555-0199." },
  { num: 5, text: "No hearsay objections may be raised regarding the official text messages in Exhibit D, though relevance objections remain preserved." },
  { num: 6, text: "The CVs and resumes for all designated expert witnesses (Sterling, Bennett) are authentic." }
];

export default function CaseVault() {
  const [activeSubTab, setActiveSubTab] = useState('packets');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackets = casePackets.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <VaultHeader
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        onClearQuery={() => setSearchQuery('')}
      />

      {activeSubTab !== 'stips' && (
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
          <input
            type="text"
            placeholder={
              activeSubTab === 'packets'
                ? "Search cases (e.g. 'Clark', 'Cobey')..."
                : "Search errata targets or corrections..."
            }
            className="input pl-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {activeSubTab === 'packets' && (
        <div className="space-y-4">
          {filteredPackets.length > 0 ? (
            filteredPackets.map((p, idx) => <CaseCard key={idx} caseItem={p} />)
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
