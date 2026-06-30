import React from 'react';

export default function CareerCapitalCTA() {
  return (
    <section className="relative bg-[#0b0f19] text-white py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Top Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto z-10 flex flex-col items-center">
        {/* Small Top Badge */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e14d3a] mb-5">
          Get Started Today
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white">
          Your career capital starts today.
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Join 2,400+ Pakistani students already building verified portfolios and landing remote roles.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#e14d3a] hover:bg-[#cf4331] text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-red-900/20 text-[15px]">
            Start Free — It's Free
          </button>

          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#111625]/60 hover:bg-[#111625] border border-slate-800 text-white font-semibold rounded-full transition-all duration-200 text-[15px]">
            Talk to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
}

