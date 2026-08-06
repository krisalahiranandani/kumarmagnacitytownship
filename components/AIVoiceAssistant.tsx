"use client";

import { useState } from "react";
import { Mic, Send, Bot, Sparkles, Volume2, CheckCircle2 } from "lucide-react";
import { useModal } from "@/lib/modal-context";

const QUICK_QUESTIONS = [
  { text: "What is the 2 BHK starting price?", answer: "2 BHK luxury residences (757 sq.ft carpet) start at ₹72.99 Lakhs* with possession scheduled for December 2027." },
  { text: "Is Podar School inside the township?", answer: "Yes! Podar International School is located directly on-campus inside the 150-acre township." },
  { text: "What are the MahaRERA numbers?", answer: "Official RERA Registration numbers are P52100052096 & P52100054476." },
  { text: "How far is Magarpatta and Kharadi?", answer: "Magarpatta City is just 10 minutes away, and Kharadi EON IT Park is 12 minutes via the new Manjari bridge corridor." }
];

export default function AIVoiceAssistant() {
  const { openModal } = useModal();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("English");
  const [activeAnswer, setActiveAnswer] = useState(QUICK_QUESTIONS[0].answer);
  const [isListening, setIsListening] = useState(false);

  const handleVoiceQuery = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setActiveAnswer("Voice query recognized! Connecting you with our AI concierge for personalized floor plan consultation...");
      openModal({ title: "AI Voice Inquiry - Consultation Callback", source: "Voice Assistant" });
    }, 2000);
  };

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="ai-voice-assistant">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-[11px] uppercase tracking-widest">
            <Bot size={14} /> Multilingual AI Voice Concierge
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Ask AI in <span className="text-gradient-gold">English, Marathi & Hindi</span>
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Get instant voice or text answers regarding launch pricing, floor plans, RERA approvals, and location advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Voice & Query Box */}
          <div className="lg:col-span-7 bg-white border border-primary/10 rounded-3xl p-8 backdrop-blur-xl space-y-6">
            {/* Language Selector Tabs */}
            <div className="flex items-center justify-between border-b border-primary/10 pb-4">
              <span className="text-xs font-mono text-primary/60 uppercase font-bold">Select Language</span>
              <div className="flex gap-2">
                {["English", "मराठी (Marathi)", "हिंदी (Hindi)"].map((lang, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLanguage(lang.split(" ")[0])}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      language.includes(lang.split(" ")[0])
                        ? "bg-accent text-white font-bold"
                        : "bg-primary/5 text-primary/60 hover:text-primary"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Questions Buttons */}
            <div>
              <label className="text-xs font-mono text-primary/60 uppercase font-bold mb-3 block">Frequent Buyer Questions</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAnswer(q.answer)}
                    className="p-3.5 rounded-xl border border-primary/10 bg-primary/5 text-left text-xs text-primary/80 hover:border-accent/50 hover:text-primary transition-all flex items-center justify-between"
                  >
                    <span>{q.text}</span>
                    <Sparkles size={14} className="text-accent shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Live AI Response Display */}
            <div className="bg-black/60 border border-accent/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-accent">
                <span className="flex items-center gap-1.5"><Volume2 size={16} /> AI Concierge Response</span>
                <span>Language: {language}</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed font-serif">{activeAnswer}</p>
            </div>

            {/* Voice Input Button */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={handleVoiceQuery}
                className={`flex-1 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                  isListening
                    ? "bg-red-500 text-white border-red-400 animate-pulse"
                    : "bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <Mic size={18} className={isListening ? "animate-bounce text-white" : "text-accent"} />
                {isListening ? "Listening to Voice Query..." : "Tap to Speak (Voice Search)"}
              </button>
            </div>
          </div>

          {/* Right: Instant Callback Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-primary/5 to-transparent border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent mb-2">
                <CheckCircle2 size={16} /> 24x7 AI Assistance
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Need Customized Advice?</h3>
              <p className="text-xs text-primary/60 mt-1">Get an instant audio consultation call from our township property advisor.</p>
            </div>

            <button
              onClick={() => openModal({ title: "Request Instant AI Consultation Call", source: "Voice Assistant UI" })}
              className="w-full py-4 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Request 1-on-1 Advisor Call <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
