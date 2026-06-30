import React from 'react';

interface HeroBlueSectionProps {
  setShowAuthModal: (show: boolean) => void;
  setAuthMode: (mode: 'login' | 'signup') => void;
  setShowDemoModal: (show: boolean) => void;
}

export default function HeroBlueSection({ setShowAuthModal, setAuthMode, setShowDemoModal }: HeroBlueSectionProps) {
  const triggerAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="bg-[#050B14] text-white pt-16 pb-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6 lg:pr-6">
          <div className="inline-flex items-center gap-2 bg-[#0A1322] border border-gray-800 px-4 py-2 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-400 font-medium">2,400+ students already building their portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Your Career Capital, <br />
            <span className="text-[#D93B29]">Verified</span> <br />
            Not Just a CV.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Build real projects, earn a verified Employability Score, and get discovered by 85+ hiring companies — all without leaving your city.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => triggerAuth('signup')} className="bg-[#D93B29] hover:bg-[#b83222] text-white font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wide shadow-lg transition-transform active:scale-95">
              Create My Free Profile
            </button>
            <button onClick={() => setShowDemoModal(true)} className="bg-[#0C1625] border border-gray-800 hover:bg-gray-950 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wide transition-transform active:scale-95">
              See a Sample Profile
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-900/60 max-w-lg">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">2,400+</h3>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Students</p>
            </div>
            <div className="border-l border-gray-900/80 pl-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">78</h3>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Avg. Score</p>
            </div>
            <div className="border-l border-gray-900/80 pl-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Rs45K</h3>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Avg. Income</p>
            </div>
          </div>
        </div>

        {/* Right Side: Aiman Khan Card Mock */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto">
          <div className="absolute -top-4 right-12 bg-white text-green-700 font-bold text-[11px] px-3 py-1.5 rounded-full border border-gray-100 shadow-md flex items-center gap-1 z-20">
            Profile Status: Verified ✓
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-2xl text-gray-900 border border-gray-100 relative">
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-[10px] text-gray-400 font-mono ml-2">CareerOS Dashboard</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white font-black flex items-center justify-center text-sm">AK</div>
              <div>
                <h4 className="font-black text-base text-gray-900 leading-tight">Aiman Khan</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">CS Student • LUMS '25</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-[#FAF9F6] p-4 rounded-2xl mb-6 border border-gray-100">
              <div className="w-16 h-16 rounded-full border-4 border-r-transparent border-b-transparent border-[#D93B29] flex items-center justify-center relative">
                <span className="text-sm font-black text-gray-900">78</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">Employability Score</span>
                <span className="text-sm font-black text-gray-900 block mt-0.5">Top 18% nationally</span>
              </div>
            </div>

            {/* Micro Bars */}
            <div className="space-y-3 mb-6">
              {[{ label: "Skills", val: "82%" }, { label: "Portfolio", val: "70%" }].map((m, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 w-16 font-medium">{m.label}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full mx-3 overflow-hidden">
                    <div className="bg-[#D93B29] h-full" style={{ width: m.val }}></div>
                  </div>
                  <span className="font-mono font-bold text-gray-700 w-8 text-right">{m.val}</span>
                </div>
              ))}
            </div>

            {/* Active Tasks */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Active Tasks</span>
              <div className="flex items-center justify-between text-xs bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-50/60">
                <span className="font-bold text-gray-800">Build Portfolio Site</span>
                <span className="bg-orange-50 text-orange-600 font-bold text-[9px] px-2 py-0.5 rounded-md">In Review</span>
              </div>
              <div className="flex items-center justify-between text-xs bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-50/60">
                <span className="font-bold text-gray-800">React Skill Assessment</span>
                <span className="bg-green-50 text-green-600 font-bold text-[9px] px-2 py-0.5 rounded-md">Verified ✓</span>
              </div>
            </div>
          </div>

          {/* Absolute Overlays */}
          <div className="absolute top-1/2 -left-6 bg-white text-gray-900 shadow-xl rounded-2xl p-3 border border-gray-100 hidden sm:block z-20 transform -translate-y-12">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block">This Week</span>
            <span className="text-sm font-black text-[#D93B29] block mt-0.5">+120 XP</span>
          </div>

          <div className="absolute -bottom-6 right-4 bg-white text-orange-800 font-black text-[11px] px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 z-20">
            Invitations: <span className="text-orange-600">3 Interviews</span>
          </div>
        </div>

      </div>
    </div>
  );
}