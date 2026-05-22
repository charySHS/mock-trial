import React, { useState } from 'react';
import RoleDetails from './guides/RoleDetails';
import ObjectionSelector from './guides/ObjectionSelector';
import ObjectionExplainer from './guides/ObjectionExplainer';

const rolePlaybooks = {
  attorney: {
    title: "Trial & Pre-Trial Attorneys",
    subtitle: "The courtroom advocates directing the trial, making objections, and framing the arguments.",
    duties: [
      "Opening Statements: Set the trial's thematic tone, outline undisputed facts, and state what the evidence will prove.",
      "Direct Examination: Ask open-ended, non-leading questions (Who, What, Where, Why, How) to allow your witness to tell their story.",
      "Cross-Examination: Ask leading questions (usually yes/no) to target credibility gaps, expose bias, and highlight favorable facts.",
      "Closing Arguments: Synthesize the testimony, apply facts to the legal burden of proof, explain why witnesses are credible, and demand a verdict."
    ],
    proTips: [
      "Never ask a question on cross-examination to which you do not already know the answer (impeachment safety).",
      "When objecting, stand up immediately, state the legal ground clearly, and wait for the judge to recognize you.",
      "Use active transitions between witness points to make the narrative clear for the scorers."
    ]
  },
  witness: {
    title: "Witness Roles",
    subtitle: "The actors portraying the characters in the case. The trial's evidence comes exclusively from their mouths.",
    duties: [
      "Memorize the Affidavit: You must know your witness statement perfectly. Any material deviation is grounds for impeachment.",
      "Maintain Characterization: Exhibit the professional demeanor, emotions, and characteristics described in the packet.",
      "Direct Examination: Answer clearly, look at the scoring panel when testifying, and elaborate on key themes.",
      "Cross-Examination Defense: Remain polite but firm. Do not let the cross-examining attorney force you into agreeing to harmful generalizations. Refer back to context."
    ],
    proTips: [
      "During cross, pause slightly before answering to give your attorney time to stand up and object if needed.",
      "If impeached with an inconsistent statement, admit the statement immediately, then explain the surrounding context on redirect.",
      "Work on eye contact with the scoring judges; they are your primary audience."
    ]
  },
  clerk: {
    title: "Court Clerk (Prosecution)",
    subtitle: "The official responsible for court timekeeping and maintaining official exhibit logs.",
    duties: [
      "Timekeeping: Keep exact time for opening, direct, cross, and closing speeches using a stopwatch.",
      "Time Cards: Hold up official CRF-OC time-remaining cards (5, 4, 3, 2, 1, 0:30, STOP) so speakers are aware.",
      "Exhibit Administration: Maintain records of which exhibits are identified, offered, and admitted into evidence.",
      "Time Sheet: Fill out the official CRF-OC time sheet and coordinate with defense timers to resolve discrepancies."
    ],
    proTips: [
      "Practice timing drills with speakers during team scrimmages to sync clocks.",
      "Be assertive with STOP cards; a speaker who exceeds time limits can suffer major scoring penalties.",
      "Always remain neutral and highly professional at the clerk desk."
    ]
  },
  bailiff: {
    title: "Court Bailiff (Defense)",
    subtitle: "The officer of the court responsible for order, calling the court to order, and swearing in witnesses.",
    duties: [
      "Court Announcement: When the judge enters, stand and announce: 'All rise. The Superior Court of Orange County, Department [Number], is now in session. The Honorable Judge [Name] presiding. Please draw near.'",
      "Swearing In: Step forward, raise your right hand, and swear in witnesses using the official CRF-OC oath: 'Do you solemnly swear that the testimony you are about to give...'",
      "Exhibit Security: Assist in handing exhibits to witnesses and the judge as instructed by attorneys.",
      "Courtroom Safety: Maintain general professional order and silence during proceedings."
    ],
    proTips: [
      "Practice delivering the court opening and the witness oath with a clear, authoritative, and audible courtroom voice.",
      "Be prepared with extra case packets and water for the judge if requested.",
      "Always remain standing straight and alert by the witness box."
    ]
  }
};

const objections = [
  {
    rule: "Rule 401/402",
    name: "Relevance",
    definition: "Evidence must have a logical tendency to prove or disprove a disputed fact of consequence to the trial.",
    scenario: "Prosecution asks a cyberbullying witness about their middle school spelling bee victory.",
    objectionText: "Objection, Your Honor. Relevance. The witness's spelling bee victory has no bearing on whether the defendant sent the alleged cyberbullying threats in consequence of school safety.",
    responseText: "Your Honor, this goes to the witness's credibility regarding academic competition, which defense plans to attack."
  },
  {
    rule: "Rule 801",
    name: "Hearsay",
    definition: "An out-of-court statement offered in court to prove the truth of the matter asserted. Generally inadmissible.",
    scenario: "Witness testifies: 'My cousin told me that Jordan sent the text threat.'",
    objectionText: "Objection, Your Honor. Hearsay. The witness is testifying to a statement made by their cousin, an out-of-court declarant, to prove Jordan sent the text.",
    responseText: "Your Honor, the statement is not offered for the truth of the matter, but to show the effect it had on the witness's subsequent actions."
  },
  {
    rule: "Rule 602",
    name: "Lack of Personal Knowledge / Speculation",
    definition: "A witness may not testify to a matter unless evidence is introduced sufficient to support a finding that they have personal knowledge of the matter.",
    scenario: "Witness testifies: 'Jordan must have felt extremely jealous when Hayden posted that picture.'",
    objectionText: "Objection, Your Honor. Speculation and lack of personal knowledge. The witness cannot testify to Jordan's internal emotional state.",
    responseText: "Your Honor, the witness was present and observed Jordan's physical reaction, which they are describing under Rule 701."
  },
  {
    rule: "Rule 611(a)",
    name: "Leading Question",
    definition: "A question asked on direct examination that suggests the desired answer to the witness.",
    scenario: "On direct exam, attorney asks: 'You saw Jordan send the message at 9:00 PM, correct?'",
    objectionText: "Objection, Your Honor. Leading question. This is direct examination, and counsel is testifying for the witness.",
    responseText: "Apologies, Your Honor. I will rephrase. (To witness): What, if anything, did you observe at 9:00 PM?"
  },
  {
    rule: "Rule 702",
    name: "Improper Expert Opinion",
    definition: "An expert may not express an opinion on a technical matter unless they have been formally qualified as an expert and the proper foundational facts are established.",
    scenario: "Officer Smith testifies about the server latency logs without establishing expertise in networks.",
    objectionText: "Objection, Your Honor. Improper opinion and lack of foundation. The officer has not been qualified as a digital forensic expert to interpret latency logs.",
    responseText: "Your Honor, this is lay opinion under Rule 701, based on the officer's routine training and observations."
  },
  {
    rule: "Rule 403",
    name: "More Prejudicial Than Probative",
    definition: "Although relevant, evidence may be excluded if its probative value is substantially outweighed by the danger of unfair prejudice.",
    scenario: "Offering graphic, unrelated photos of a car crash to show the defendant was reckless in sending texts.",
    objectionText: "Objection, Your Honor. Under Rule 403, the probative value of these graphic crash images is substantially outweighed by the danger of unfair prejudice.",
    responseText: "Your Honor, this directly shows the severity of impact which is a material element of the recklessness charge."
  }
];

export default function RoleGuides() {
  const [activeRole, setActiveRole] = useState('attorney');
  const [selectedObjection, setSelectedObjection] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header + Role Switcher */}
      <div className="card overflow-hidden">
        <div className="h-1 gold-accent" />
        <div className="px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl font-serif font-bold text-navy-900 tracking-wide">COURTROOM ROLE PLAYBOOKS</h1>
            <p className="text-xs text-text-muted mt-0.5">
              Guides, checklists, and objections for every position on the Servite team.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(rolePlaybooks).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all cursor-pointer ${
                  activeRole === role
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-surface-100 text-text-secondary hover:bg-surface-200 hover:text-text-primary'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Role Details */}
      <RoleDetails roleData={rolePlaybooks[activeRole]} />

      {/* Objection Coach */}
      <div className="card overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
        <div className="px-5 py-4 border-b border-surface-200">
          <h2 className="text-sm font-semibold text-navy-900 font-serif tracking-wide">THE OBJECTION COACH</h2>
          <p className="text-xs text-text-muted mt-0.5">Quick-reference courtroom objections under the CRF-OC Rules of Evidence.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-surface-200">
          <div className="p-4">
            <ObjectionSelector
              objections={objections}
              selectedObjection={selectedObjection}
              onSelectObjection={setSelectedObjection}
            />
          </div>
          <div className="lg:col-span-2 p-4">
            <ObjectionExplainer selectedObjection={selectedObjection} />
          </div>
        </div>
      </div>
    </div>
  );
}
