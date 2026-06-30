import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

function FaqSection() {
  // State to track which FAQ item is currently open (-1 means all closed)
  const [openIdx, setOpenIdx] = useState<number>(-1);

  // FAQ data mapping exactly from your provided list and image_479c11.png
  const faqData: FaqItem[] = [
    {
      question: "How do students get linked to our university?",
      answer: "Students self-link to your university during onboarding by verifying their official university email address or student ID — no manual list upload or IT integration required on your end."
    },
    {
      question: "Can we customize the certificate design?",
      answer: "Yes. Every certificate carries your university crest alongside CareerOS's branding, and you can adjust colors, wording, and signatory details to match your existing certificate templates."
    },
    {
      question: "Is there an API for our existing student information system?",
      answer: "Yes — University Enterprise partners get API access to sync placement and student data with your existing Student Information System, with documentation and onboarding support from your dedicated partnership manager."
    },
    {
      question: "How long does setup take?",
      answer: "Most universities are live within two weeks. Since there's no IT integration required to start, the bulk of that time is spent on branding approval and onboarding your career office staff."
    },
    {
      question: "Can we control which departments are visible to which staff?",
      answer: "Yes. Role-based access lets you grant department heads visibility into only their own department's data, while your central career office sees the full university-wide dashboard."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-24 px-6 md:px-16 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        
        {/* 1. SECTION HEADER (Centered & Small Weight matching image_479c11.png) */}
        <div className="mb-16 text-center">
          <span className="block text-[10px] font-normalbold uppercase tracking-widest text-[#ef4444] mb-3">
            QUESTIONS
          </span>
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-[#050b14]">
            Frequently Asked Questions
          </h3>
        </div>

        {/* 2. ACCORDION LIST CONTENT */}
        <div className="border-t border-slate-200/70 divide-y divide-slate-200/70">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="w-full py-1">
                {/* Clickable Question Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between py-5 text-left group cursor-pointer focus:outline-hidden"
                >
                  <span className="text-[14px] md:text-[15px] font-bold text-[#050b14] tracking-tight pr-4 transition-colors duration-200 group-hover:text-blue-800">
                    {item.question}
                  </span>
                  
                  {/* Subtle Interactive Arrow Indicator */}
                  <span className={`text-slate-400 text-xs font-bold transition-transform duration-300 transform ${isOpen ? 'rotate-180 text-blue-800' : ''}`}>
                    ↓
                  </span>
                </button>

                {/* Animated Expandable Answer Box */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[200px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-500 text-[13px] leading-relaxed font-medium max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FaqSection;