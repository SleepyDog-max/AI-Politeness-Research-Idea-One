
import { useState } from "react";

export default function AIPolitenessPlanner() {
  const [step, setStep] = useState(1);
  const [concepts, setConcepts] = useState("");
  const [prompts, setPrompts] = useState("");
  const [rubric, setRubric] = useState("");
  const [reflections, setReflections] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const openChatbotSearch = () => {
    window.open("https://www.perplexity.ai", "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', color: '#3f51b5' }}>🌐 AI & Politeness: Interactive Research Planner</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>Design your project step by step and tailor it to your research interests.</p>

      {step === 1 && (
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
          <h2>Step 1: Choose Your Concepts</h2>
          <p>This project focuses on exploring how well AI can explain and apply theories of linguistic politeness...</p>
          <textarea
            placeholder="E.g., Positive politeness and face-threatening acts; indirectness in requests..."
            value={concepts}
            onChange={(e) => setConcepts(e.target.value)}
            style={{ width: '100%', height: '100px', marginTop: '0.5rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', gap: '10px' }}>
            <button onClick={openChatbotSearch}>🔍 Ask AI</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
          <h2>Step 2: Draft Your AI Prompts</h2>
          <p>Write 3–5 prompts to test with an AI such as ChatGPT...</p>
          <textarea
            placeholder="Write your 3–5 prompts here."
            value={prompts}
            onChange={(e) => setPrompts(e.target.value)}
            style={{ width: '100%', height: '120px', marginTop: '0.5rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', gap: '10px' }}>
            <button onClick={prevStep}>Back</button>
            <button onClick={openChatbotSearch}>🔍 Ask AI</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
          <h2>Step 3: Design Your Rubric</h2>
          <p>Use this step to develop a clear evaluation rubric...</p>
          <textarea
            placeholder="Design your rubric or checklist here."
            value={rubric}
            onChange={(e) => setRubric(e.target.value)}
            style={{ width: '100%', height: '120px', marginTop: '0.5rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', gap: '10px' }}>
            <button onClick={prevStep}>Back</button>
            <button onClick={openChatbotSearch}>🔍 Ask AI</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
          <h2>Step 4: Reflect on Your Findings</h2>
          <p>Now that you’ve gathered and evaluated responses, it’s time to reflect...</p>
          <textarea
            placeholder="Write a short summary of your findings and critical insights."
            value={reflections}
            onChange={(e) => setReflections(e.target.value)}
            style={{ width: '100%', height: '140px', marginTop: '0.5rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', gap: '10px' }}>
            <button onClick={prevStep}>Back</button>
            <button onClick={openChatbotSearch}>🔍 Ask AI</button>
            <button disabled>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}
