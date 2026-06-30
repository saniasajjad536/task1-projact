import React from 'react';

export default function PakistaniGraduateFeatures() {
  return (
    <section className="bg-white text-[#050b14] py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-14">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#de4e37] block mb-3">
            WHY CAREEROS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#050b14]">
            Built for the Pakistani Graduate
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
            Stop collecting certificates. Start building proof. CareerOS turns your work into verified career capital.
          </p>
        </div>

        {/* 3-Card Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 01 */}
          <div className="bg-[#f7f6f3] rounded-3xl p-8 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:shadow-md">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-wider">—— 01</span>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mt-6 mb-8 shadow-sm">
                <svg className="w-5 h-5 text-[#050b14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-4 text-[#050b14]">
                Proof of Work, Not Just Certificates
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Every task you complete becomes a verified portfolio piece. Employers see what you've actually built — not just your GPA.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#050b14] mt-8 hover:opacity-70 transition-opacity text-left w-fit cursor-pointer">
              Learn more <span>➔</span>
            </button>
          </div>

          {/* Card 02 */}
          <div className="bg-[#f7f6f3] rounded-3xl p-8 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:shadow-md">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-wider">—— 02</span>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mt-6 mb-8 shadow-sm">
                <svg className="w-5 h-5 text-[#050b14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 012 15.484V5.416a2 2 0 011.106-1.789l5.447-2.724a2 2 0 011.789 0l5.447 2.724A2 2 0 0116 5.416v10.068a2 2 0 01-1.106 1.789l-5.447 2.724a2 2 0 01-1.789 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 1v18M2 5h14M2 15h14" />
                </svg>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-4 text-[#050b14]">
                AI-Powered Career Roadmap
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Your personal AI career coach analyzes your skills, suggests roles, and builds a week-by-week action plan tailored to your goals.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#050b14] mt-8 hover:opacity-70 transition-opacity text-left w-fit cursor-pointer">
              Learn more <span>➔</span>
            </button>
          </div>

          {/* Card 03 */}
          <div className="bg-[#f7f6f3] rounded-3xl p-8 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:shadow-md">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-wider">—— 03</span>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center mt-6 mb-8 shadow-sm">
                <svg className="w-5 h-5 text-[#050b14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-4 text-[#050b14]">
                Verified by Employers
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Your Employability Score is co-developed with 85+ hiring companies. When they see it, they trust it — it's the credential they asked for.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#050b14] mt-8 hover:opacity-70 transition-opacity text-left w-fit cursor-pointer">
              Learn more <span>➔</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}