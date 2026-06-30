

import React from 'react';

interface HeroSectionProps {
  setAuthMode?: (mode: 'signup' | 'login') => void;
  setShowAuthModal?: (show: boolean) => void;
  setShowDemoModal?: (show: boolean) => void;
}

export default function HeroSection({ 
  setAuthMode = () => {}, 
  setShowAuthModal = () => {}, 
  setShowDemoModal = () => {} 
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#050B14] overflow-hidden text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient Subtle Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#E24A39]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#0E1E36] border border-gray-800 px-4 py-2 rounded-full text-xs font-medium text-gray-300 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="tracking-wide">Now live across 12 Pakistani universities</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Pakistan's First <br />
            <span className="text-[#E24A39]">AI-Powered</span> Career Operating System
          </h1>
          
          {/* Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Build your portfolio, get verified, and land remote opportunities — without leaving your city.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }} 
              className="w-full sm:w-auto bg-[#E24A39] hover:bg-[#c93f30] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-red-900/10 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Free — It's Free
            </button>
            
            <button 
              onClick={() => setShowDemoModal(true)} 
              className="w-full sm:w-auto bg-[#0A1222] border border-gray-800 hover:bg-[#121F38] text-gray-200 font-semibold px-7 py-4 rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current text-gray-400" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See How It Works
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: DETAILED FLOATING CARD PREVIEW --- */}
        <div className="relative w-full max-w-md lg:mr-8 mt-6 lg:mt-0">
          
          {/* Outer absolute profile status tag */}
          <div className="absolute -top-6 -right-4 bg-white/95 backdrop-blur shadow-xl rounded-xl p-3 border border-gray-100 flex items-center gap-2 z-20 hidden sm:flex animate-pulse duration-1000">
            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Profile Status</p>
              <p className="text-xs font-bold text-gray-900">Verified ✓</p>
            </div>
          </div>

          {/* Absolute Invitation tag */}
          <div className="absolute top-[40%] -right-12 bg-white/95 backdrop-blur shadow-xl rounded-xl p-3 border border-gray-100 flex items-center gap-3 z-20 hidden sm:flex hover:translate-x-2 transition-transform duration-300 ease-out">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Invitations</p>
              <p className="text-xs font-extrabold text-gray-900">3 Interviews</p>
            </div>
          </div>

          {/* Main White Dashboard Window */}
          <div className="w-full bg-white text-gray-900 rounded-2xl p-6 shadow-2xl relative border border-gray-100/80 z-10">
            {/* Top Mac-style dots */}
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
            </div>

            {/* User Meta Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#6C567B] text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-inner">
                  AK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Aiman Khan</h4>
                  <p className="text-xs text-gray-400 font-medium">CS Student · LUMS '25</p>
                </div>
              </div>
              <span className="bg-green-50 text-green-600 text-[11px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 border border-green-100">
                <span className="w-1 h-1 rounded-full bg-green-500"></span> Verified
              </span>
            </div>
            
            {/* Employability Score Grid Group */}
            <div className="bg-gray-50/70 rounded-xl p-4 mb-5 border border-gray-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Score Circular Progress Indicator */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-gray-200" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-[#E24A39]" strokeDasharray="78, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-xs font-black text-gray-900">78</span>
                    <span className="text-[7px] text-gray-400 block -mt-1">/100</span>
                  </div>
                </div>
                {/* Score Labels */}
                <div>
                  <span className="text-xs font-bold text-gray-800 block">Employability Score</span>
                  <span className="text-[11px] text-[#10B981] font-semibold">Top 18% of all students</span>
                </div>
              </div>

              {/* Mini Rightside Stat Bars inside score layout */}
              <div className="flex flex-col gap-1.5 w-24">
                <div className="flex items-center justify-between text-[9px] text-gray-400 font-medium">
                  <span>Skills</span>
                  <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="bg-blue-600 h-full" style={{width: '85%'}}></div></div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-gray-400 font-medium">
                  <span>Portfolio</span>
                  <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="bg-red-500 h-full" style={{width: '70%'}}></div></div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-gray-400 font-medium">
                  <span>Verified</span>
                  <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="bg-green-500 h-full" style={{width: '90%'}}></div></div>
                </div>
              </div>
            </div>

            {/* Active Tasks Grid Section */}
            <p className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Active Tasks</p>
            <div className="space-y-2">
              {/* Task 1 */}
              <div className="bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex justify-between items-center text-xs border border-gray-100/70 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-[10px] font-mono">
                    &lt;/&gt;
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 block">Build REST API</span>
                    <span className="text-[10px] text-gray-400">Django · Due in 2 days</span>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md">In Progress</span>
              </div>
              
              {/* Task 2 */}
              <div className="bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex justify-between items-center text-xs border border-gray-100/70 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 font-bold">
                    📝
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 block">Write Case Study</span>
                    <span className="text-[10px] text-gray-400">Marketing · Due Today</span>
                  </div>
                </div>
                <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-md">Urgent</span>
              </div>

              {/* Task 3 */}
              <div className="bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex justify-between items-center text-xs border border-gray-100/70 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-bold">
                    📊
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 block">Data Analysis Quiz</span>
                    <span className="text-[10px] text-gray-400">Python · Completed</span>
                  </div>
                </div>
                <span className="text-green-600 text-[10px] font-bold px-2 py-0.5">+45 XP</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}