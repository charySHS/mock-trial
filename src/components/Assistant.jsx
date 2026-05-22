import React, { useState } from 'react';
import PrepConsole from './assistant/PrepConsole';
import AuditReport from './assistant/AuditReport';
import { RefreshCw } from 'lucide-react';

export default function Assistant() {
  const [taskType, setTaskType] = useState('opening');
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [result, setResult] = useState(null);

  const simulateAI = () => {
    if (!inputText.trim()) {
      alert("Counsel, please enter some text before consulting the assistant.");
      return;
    }

    setLoading(true);
    setResult(null);

    const steps = [
      "Securing courtroom evidence archives...",
      "Analyzing against CRF-OC Rules of Evidence...",
      "Simulating cross-examination counters...",
      "Formulating rhetorical improvements..."
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        generateFeedback();
      }
    }, 900);
  };

  const generateFeedback = () => {
    let feedbackText = "";
    let scoreVal = 0;
    let objectionsList = [];
    let recommendations = [];

    const lowerInput = inputText.toLowerCase();

    if (taskType === 'opening') {
      scoreVal = 88;
      
      const hasTheme = lowerInput.includes("theme") || lowerInput.includes("case of") || lowerInput.includes("about");
      const hasClark = lowerInput.includes("clark") || lowerInput.includes("jordan");
      const hasSterling = lowerInput.includes("sterling") || lowerInput.includes("bennett");

      feedbackText = `### ScalesAI Legal Review: Advocacy Argumentation

Your opening outline presents a solid foundational narrative. However, Mock Trial judges evaluate advocacy on narrative clarity, legal precision, and dramatic force. Here is your courtroom audit:

#### ⚖️ Narrative & Thematic Assessment
${hasTheme ? '✅ Excellent job establishing a clear, unifying theme early in your speech. This frames the evidentiary details nicely.' : '⚠️ CRITICAL WEAKNESS: Your opening currently lacks a strong, one-sentence "Theme". Judges score heavily on a theme (e.g., "This is a case of words used as weapons" or "A shield of safety turned into a weapon of spite"). Establish this in the first 30 seconds.'}
${hasClark ? '✅ Good contextual integration of the defendant Jordan Clark. This makes the accused human and grounds the narrative.' : 'ℹ️ TIP: Incorporate the specific names of key actors (Jordan, Hayden) earlier in your storytelling to build emotional resonance before describing the crime.'}

#### 🛑 Evidentiary & Objection Risk Audit
- **"What the evidence will show"**: Make sure you do not argue the facts or make legal conclusions during opening. Only state what you expect witnesses to testify.
- **Speculation Hazard**: If you declare Jordan's *exact thoughts* during the cyberbullying posts, Defense will object to speculation. Frame it as "The evidence will show Jordan's actions, which speak louder than words."
${hasSterling ? '- **Expert Credentials**: Excellent mention of expert forensic testimony. Ensure you state they will be qualified under Rule 702.' : '- **Digital Evidence Warning**: You mention the text messages. Ensure you lay the foundation through Officer Smith to prevent a defense objection on authenticity.'}

#### 📋 Strategic Recommendations
1. **The Hook**: Start directly with your theme. Do not say "Good morning, my name is..."—it is a wasted opportunity. Let your first word be a powerful statement.
2. **Pathos & Logos**: Balance the emotional impact of the cyberbullying with technical cell-tower evidence. Let witnesses speak to details; you speak to the big picture.
3. **Closing Promise**: Conclude with a clear, firm request: "At the end of this trial, we will ask you to find Jordan Clark guilty / not guilty."`;

      objectionsList = ["Speculation on Defendant's Intent", "Argumentative (During Opening)"];
      recommendations = ["Add 1-sentence theme hook", "Shift legal arguments to Closing", "Frame digital logs as authenticated under Stipulation 4"];

    } else if (taskType === 'witness') {
      scoreVal = 82;
      const isCross = lowerInput.includes("cross") || lowerInput.includes("impeach") || lowerInput.includes("inconsistent");
      const hasOfficer = lowerInput.includes("officer") || lowerInput.includes("smith");

      feedbackText = `### ScalesAI Legal Review: Examination Outline

Your witness examination outline is highly structured, but requires tighter phrasing to ensure compliance with direct/cross regulations under the California Evidence Code.

#### 🎙️ Questioning Structure & Pacing
${isCross ? '✅ Under Cross-Examination: Your draft utilizes closed, leading questions. Excellent job keeping control of the witness.' : '⚠️ Under Direct Examination: Ensure you are asking ONLY open-ended questions. Avoid starting questions with "Did you see", "Can you confirm", or "Is it true that". Instead, use "What, if anything, did you observe?" or "Describe your interaction."'}
${hasOfficer ? '✅ You have mapped key evidentiary logs to Officer Smith. This establishes a clean foundational custody record.' : 'ℹ️ Witness Foundation: Ensure you establish the witness\'s background and position *before* asking them to describe the night of the incident.'}

#### 🛑 Evidentiary & Objection Risk Audit
- **Leading on Direct (Rule 611)**: Several questions are borderline leading. Rephrase to allow the witness to give the details, keeping you as the facilitator, not the speaker.
- **Hearsay Vulnerability (Rule 801)**: If a witness begins reciting what another student told them at school, opposing counsel will shout hearsay. Ensure you qualify these statements under exceptions (e.g., State of Mind, Admission of Party Opponent).
- **Impeachment Prep**: If cross-examining, prepare the exact page and line number of the witness\'s statement to read immediately if they deviate.

#### 📋 Strategic Recommendations
1. **Control (Cross-Ex)**: Do not ask "Why" or "Explain" on cross-examination. That gives the witness permission to give a long, self-serving explanation. Stick to short, undeniable factual statements.
2. **Theme Integration**: Ensure your witness repeats a key theme word (e.g. "honesty", "fear", "impulsive") at least twice during their testimony.
3. **Exhibit Entry**: Practice the four-step exhibit entry dance: (1) Mark for ID, (2) Show opposing counsel, (3) Ask witness to identify, (4) Move to admit.`;

      objectionsList = ["Leading Question on Direct", "Hearsay on Out-of-Court Declarant", "Narrative Answer"];
      recommendations = ["Rephrase direct questions to start with 'What' or 'How'", "Keep cross questions under 10 words", "Establish Officer foundation for Exhibit B first"];

    } else {
      scoreVal = 92;
      const isHearsay = lowerInput.includes("hearsay") || lowerInput.includes("801");
      const isCharacter = lowerInput.includes("character") || lowerInput.includes("404");

      feedbackText = `### ScalesAI Legal Review: Objection Defeater Draft

Excellent legal inquiry. Overcoming evidentiary hurdles requires calm, precise citations to the California Mock Trial Rules of Evidence.

#### ⚖️ Legal Shield Construction
${isHearsay ? '🛡️ TARGET: Hearsay Objection (Rule 801/802/803)\n\nTo defeat this, choose one of these standard responses based on your trial goals:\n\n1. **Not for the Truth (Rule 801)**: "Your Honor, the statement is not offered to prove the truth of the matter asserted, but rather to show the state of mind of the listener and explain their subsequent actions."\n2. **Admission by Party-Opponent (Rule 803)**: "Your Honor, these are Jordan Clark\'s own text messages. As Jordan is the defendant, these fall under the Admission by Party-Opponent exception."\n3. **Excited Utterance**: "Your Honor, the victim made this statement immediately following the online threat while under the stress of excitement caused by the event."' : ''}
${isCharacter ? '🛡️ TARGET: Improper Character Evidence (Rule 404)\n\nIf the opposition claims you are attacking character, respond with:\n\n"Your Honor, this is not offered to show propensity. It is offered under Rule 404(b) to show the defendant\'s motive, intent, plan, and lack of accident in sending the online threatening communications."' : ''}
${!isHearsay && !isCharacter ? '🛡️ GENERAL OBJECTION DEFENSE STRATEGY:\n\n1. Always stand up. Say: "Your Honor, opposing counsel\'s objection should be overruled because..."\n2. Cite the exact Mock Trial evidence rule if possible.\n3. Offer an alternative theory of admissibility (e.g., layout foundation, lay opinion, or rephrase the question immediately).' : ''}

#### 📋 Courtroom Advocacy Tips
- **Be Prepared to Pivot**: If the judge looks doubtful, offer to rephrase immediately to maintain trial momentum.
- **Scoring Points**: Scoring judges award massive points to attorneys who handle objections with respect, poise, and precise legal citations.`;

      objectionsList = ["Hearsay Exclusion", "Improper Character Attack"];
      recommendations = ["Memorize Rule 803(a) Admission exception", "Maintain professional posture during argument", "Practice smooth transition sentences"];
    }

    setResult({
      score: scoreVal,
      feedback: feedbackText,
      objections: objectionsList,
      actions: recommendations
    });
    setLoading(false);
  };

  return (
    <div className="fade-in space-y-6">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-xl font-serif font-bold text-white tracking-wide">AI SPEECH & CLAIMS ASSISTANT</h1>
        <p className="text-xs text-slate-400">"ScalesAI" - Professional analysis of openings, questioning scripts, and objection scenarios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Input Panel Left */}
        <div className="lg:col-span-1">
          <PrepConsole 
            taskType={taskType}
            setTaskType={setTaskType}
            inputText={inputText}
            setInputText={setInputText}
            loading={loading}
            onSubmit={simulateAI}
          />
        </div>

        {/* Results Panel Right */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="glass-card p-12 text-center text-slate-400 h-full flex flex-col justify-center items-center space-y-4 border-dashed border-2 border-slate-800 min-h-[400px]">
              <RefreshCw className="w-8 h-8 text-gold-brass animate-spin" />
              <h3 className="font-serif text-sm text-gold-light">{loadingStep}</h3>
              <p className="text-xs max-w-xs font-light">Associate counsel is auditing legal transcripts and formatting defense files.</p>
            </div>
          ) : (
            <AuditReport result={result} />
          )}
        </div>

      </div>
    </div>
  );
}
