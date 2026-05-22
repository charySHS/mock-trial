import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { gsap } from 'gsap';
import VaultHeader from './vault/VaultHeader';
import CaseCard from './vault/CaseCard';
import ErrataTable from './vault/ErrataTable';
import StipulationsGrid from './vault/StipulationsGrid';

export default function CaseVault() {
  const [activeSubTab, setActiveSubTab] = useState('packets');
  const [searchQuery, setSearchQuery] = useState('');
  
  const containerRef = useRef(null);

  const casePackets = [
    {
      title: "People v. Clark (2026 - Current)",
      type: "Criminal - Cyberbullying & Threat of Violence",
      desc: "This year's case involves a student charged under CA Penal Code sections for making criminal threats online. Key legal issues include digital authentication, free speech limitations (true threats), and cell tower tri-angulation.",
      witnesses: {
        pros: ["Officer Alexis Smith (Arresting Officer)", "Hayden Hayes (Victim)", "Dr. Casey Sterling (Forensic Psychiatrist)"],
        def: ["Jordan Clark (Defendant)", "Sam Taylor (Mutual Friend)", "Dr. River Bennett (Digital Forensic Expert)"]
      },
      fileSize: "4.8 MB",
      released: "August 15, 2026"
    },
    {
      title: "People v. Cobey (2025)",
      type: "Criminal - Murder & Toxic Exposure",
      desc: "The defendant was charged with murder and reckless endangerment after a tenant died from toxic mold exposure in a managed apartment building. Examined landlord liability and expert testimony on toxicological analysis.",
      witnesses: {
        pros: ["Dr. Evelyn Gray", "Officer Reese Miller", "Pat Martinez"],
        def: ["Jamie Cobey (Defendant)", "Dr. Terry Oakwood", "Chris Hernandez"]
      },
      fileSize: "4.2 MB",
      released: "August 18, 2025"
    },
    {
      title: "People v. Franks (2024)",
      type: "Criminal - Robbery & Battery",
      desc: "A robbery occurred in a high-end department store where the defendant was accused of stealing designer clothes and physically assaulting a security officer. Raised questions about eyewitness identification and circumstantial evidence.",
      witnesses: {
        pros: ["Officer Billie Rivera", "Kendall Reyes", "Dr. Alex Martinez"],
        def: ["Taylor Franks (Defendant)", "Drew Bailey", "Dr. Morgan Vance"]
      },
      fileSize: "3.9 MB",
      released: "August 20, 2024"
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

  // GSAP animations for internal sub-tabs
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power1.out', clearProps: 'transform' }
      );
    }
  }, [activeSubTab]);

  const filteredPackets = casePackets.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fade-in space-y-6">
      
      {/* 1. Header Navigation Bar */}
      <VaultHeader 
        activeSubTab={activeSubTab} 
        setActiveSubTab={setActiveSubTab} 
        onClearQuery={() => setSearchQuery('')}
      />

      {/* 2. Search Input */}
      {activeSubTab !== 'stips' && (
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder={activeSubTab === 'packets' ? "Search CRF-OC cases (e.g., 'Clark', 'Cobey')..." : "Search official errata targets or corrections..."}
            className="input-gold pl-11 py-2 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {/* 3. Render Area with GSAP ref */}
      <div ref={containerRef}>
        
        {activeSubTab === 'packets' && (
          <div className="grid grid-cols-1 gap-6">
            {filteredPackets.length > 0 ? (
              filteredPackets.map((p, idx) => (
                <CaseCard key={idx} caseItem={p} />
              ))
            ) : (
              <div className="glass-card p-12 text-center text-slate-400">
                No cases matching your search criteria were found in our legal database records.
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

    </div>
  );
}
