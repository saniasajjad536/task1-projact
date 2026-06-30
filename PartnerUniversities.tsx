import React from 'react';

function PartnerUniversities() {
  // Pakistani Universities list from the image for the marquee
  const universities = [
    "LUMS",
    "NUST",
    "IBA Karachi",
    "FAST-NUCES",
    "COMSATS",
    "UET Lahore",
    "GIKI",
    "Bahria University"
  ];

  // Doubling the array to create a seamless infinite loop transition effect
  const continuousList = [...universities, ...universities, ...universities];

  return (
    <section className="w-full bg-[#f8fafc] py-12 px-6 font-sans text-slate-800 border-t border-b border-slate-100">
      
      {/* 1. Header Title Text */}
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-slate-500 tracking-wide">
          Career Offices Already Partnering With CareerOS.
        </p>
      </div>

      {/* 2. Marquee Outer Wrapper with Smooth Edge Fading Gradients */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#f8fafc] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#f8fafc] after:to-transparent">
        
        {/* Custom Core Styles injection for smooth endless hardware-accelerated movement animation */}
        <style>{`
          @keyframes infiniteScrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: infiniteScrollMarquee 25s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused; /* Hover karne par animation smoothly stop ho jayegi */
          }
        `}</style>

        {/* 3. Track Container holding moving items */}
        <div className="animate-marquee-infinite gap-6 py-2">
          {continuousList.map((uni, idx) => (
            <div
              key={idx}
              className="px-8 py-3 bg-white rounded-full shadow-sm border border-slate-200/60 font-bold text-sm tracking-wide text-slate-600 select-none whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:border-slate-300 cursor-pointer flex items-center justify-center min-w-[140px]"
            >
              {uni}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default PartnerUniversities;