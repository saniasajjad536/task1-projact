import React, { useState } from 'react';

function FAQSection() {
  // activeId track karega ke kaun sa question open hai (null matlab sab closed hain)
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Is CareerOS really free to start?",
      answer: "Yes — creating your profile, building your portfolio, and getting your first Employability Score is completely free. We charge for premium AI coaching tools and advanced analytics, but the core platform that gets you discovered by employers will always be free for students."
    },
    {
      id: 2,
      question: "Do I need work experience to join?",
      answer: "Not at all. Most students join with zero internships or paid work — that's exactly the gap CareerOS is built to close. You'll complete verified tasks and mini-projects that become your first real portfolio pieces."
    },
    {
      id: 3,
      question: "How is my Employability Score calculated?",
      answer: "Your score blends 12 factors — from verified skills and task completion to communication and consistency — into one number out of 100. It updates weekly as you complete tasks, earn badges, and stay active on the platform."
    },
    {
      id: 4,
      question: "Can universities see my private messages?",
      answer: "No. Universities and career offices can see your public profile, Employability Score, and verification status — never your private messages, applications, or freelance earnings unless you choose to share them."
    },
    {
      id: 5,
      question: "Does CareerOS work in Urdu?",
      answer: "Yes. Use the EN | اردو toggle in the header to switch the entire interface, including navigation and key content, into Urdu with full right-to-left layout support."
    },
    {
      id: 6,
      question: "How do I get a verified skill badge?",
      answer: "Pick a skill, pass a focused 10-question assessment, and you'll earn a blue verified-tick badge that appears on your public profile instantly — no waiting period, no manual review needed."
    }
  ];

  const toggleFAQ = (id: number) => {
    // Agar pehle se open wale par click ho to close kar do, warna naya open karo
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Mini Header Label */}
        <div className="text-center mb-12">
          <span className="text-[#ef4444] text-xs font-bold uppercase tracking-widest block mb-3">
            QUESTIONS
          </span>
          <h2 className="text-gray-950 text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Questions List Stack */}
        <div className="space-y-1">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="border-b border-gray-100 transition-colors duration-200"
              >
                {/* Question Clickable Trigger Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                >
                  <span className="text-gray-950 font-bold text-[16px] md:text-[17px] tracking-tight transition-colors duration-200 group-hover:text-[#ef4444]">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Fluent Interactive Icon Indicator */}
                  <span className="text-gray-400 font-light text-xl ml-4 select-none transform transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Animated Smooth Expanding Reveal Dynamic Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[95%]">
                    {faq.answer}
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

export default FAQSection;