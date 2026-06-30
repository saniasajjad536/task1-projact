import React from 'react';

function HeroSection() {
  
  // Custom button click handlers
  const handleDemoClick = () => {
    window.location.href = '/partnership-demo';
  };

  const handleDownloadClick = () => {
    window.location.href = '/download-one-pager';
  };

  // Stats data array for the bottom row
  const statsData = [
    { value: "12", label: "Partner Universities" },
    { value: "2,400+", label: "Active Students" },
    { value: "73%", label: "Avg. Placement Rate" }
  ];

  return (
    <section className="w-full bg-[#050b14] pt-20 pb-16 px-6 md:px-16 font-sans text-white selection:bg-red-500/30 overflow-hidden">
      
      {/* UPPER MAIN HERO PART */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left Content Side (6 Columns) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Top Live University Alert Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-gray-800/60 mb-6 group hover:border-gray-700 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-400 text-xs font-semibold tracking-wide">
              Now live across 12 Pakistani universities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Give Your Students <br />
            an <br />
            <span className="text-[#e11d48] text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#f43f5e]">
              Unfair Advantage.
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            White-labeled, fully branded career infrastructure for your placement office — track every student's progress, internship pipeline, and placement rate in one dashboard.
          </p>

          {/* Action Functional Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Action Button */}
            <button
              onClick={handleDemoClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#dc2626] text-white font-bold text-sm rounded-full transition-all duration-200 shadow-lg shadow-red-900/10 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              Schedule a Partnership Demo
            </button>

            {/* Secondary Transparent Outline Button */}
            <button
              onClick={handleDownloadClick}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-800 text-gray-300 font-bold text-sm rounded-full transition-all duration-200 hover:text-white hover:bg-white/5 hover:border-gray-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              Download the Partner One-Pager
            </button>
          </div>

        </div>

        {/* Right Dashboard Preview Feature Side (5 Columns) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Floating '12 Universities Live' dynamic floating badge */}
          <div className="absolute -top-6 left-4 md:left-12 bg-white text-[#050b14] px-4 py-2 rounded-full font-bold text-xs tracking-wide shadow-xl shadow-black/40 border border-gray-100/10 z-20 transition-transform duration-300 hover:-translate-y-1">
            12 Universities Live
          </div>

          {/* Premium UI Dashboard Window Box */}
          <div className="w-full max-w-[430px] bg-white rounded-3xl p-6 shadow-2xl shadow-black/80 border border-gray-200/5 transition-transform duration-500 hover:scale-[1.01]">
            
            {/* Window Browser Dots */}
            <div className="flex gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>

            {/* University Profile Header Row */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
              <div className="w-11 h-11 bg-[#1a365d] rounded-xl flex items-center justify-center text-white font-extrabold text-sm tracking-wide">
                LU
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-medium tracking-wide uppercase">University Portal Preview</span>
                <span className="block text-gray-900 font-extrabold text-[15px] tracking-tight leading-tight">Lahore University Career Portal</span>
                <span className="block text-gray-400 text-xs font-medium">career.lahoreu.edu.pk</span>
              </div>
            </div>

            {/* Progress Bars Section */}
            <div className="space-y-4 mb-6">
              <span className="block text-[11px] text-gray-400 font-bold tracking-widest uppercase">Placement by Department</span>
              
              {/* CS Dept Progress */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Computer Science</span>
                  <span className="text-gray-900">81%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a365d] rounded-full transition-all duration-1000" style={{ width: '81%' }} />
                </div>
              </div>

              {/* Business Dept Progress */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Business</span>
                  <span className="text-gray-900">68%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a365d] rounded-full transition-all duration-1000" style={{ width: '68%' }} />
                </div>
              </div>

              {/* Engineering Dept Progress */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Engineering</span>
                  <span className="text-gray-900">75%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a365d] rounded-full transition-all duration-1000" style={{ width: '75%' }} />
                </div>
              </div>
            </div>

            {/* Brand Colors Selection Circle Row */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-50">
              <span className="text-xs font-bold text-gray-400 tracking-wide">Brand Color</span>
              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1a365d] cursor-pointer ring-2 ring-offset-2 ring-[#1a365d]" />
                <span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer transition-transform hover:scale-110" />
                <span className="w-5 h-5 rounded-full bg-emerald-600 cursor-pointer transition-transform hover:scale-110" />
                <span className="w-5 h-5 rounded-full bg-purple-600 cursor-pointer transition-transform hover:scale-110" />
              </div>
            </div>

            {/* Setup Time floating bottom note Tag */}
            <div className="absolute -bottom-4 right-4 md:-right-4 bg-amber-50/90 text-amber-900 px-3 py-1.5 rounded-lg font-bold text-[11px] border border-amber-200/40 tracking-wide">
              Avg. Setup: 2 Weeks
            </div>

          </div>

        </div>

      </div>

      {/* LOWER PART: METRIC STATS ROW ROW (image_465ce1.png) */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-900/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-start md:pl-12 ${
                i !== 0 ? 'md:border-l md:border-gray-900/60' : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-gray-500 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HeroSection;