import React from 'react';

function CTASection() {

  const handleGetStarted = () => {
    // Vite/React mein simple page change karne ke liye yeh standard tareeqa hai
    window.location.href = '/signup'; 
  };

  return (
    <section className="w-full bg-[#030712] py-28 px-6 text-center relative overflow-hidden font-sans">
      
      {/* Background Radial Glow Effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] opacity-20 pointer-events-none blur-[100px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #ef4444 0%, transparent 80%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Tiny Subheading Red Label */}
        <span className="text-[#ef4444] text-xs font-bold uppercase tracking-widest block mb-4">
          GET STARTED TODAY
        </span>

        {/* Main Powerful Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Your career capital starts today.
        </h2>

        {/* Short Subtitle Paragraph Text */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 tracking-wide">
          Join 2,400+ Pakistani students already building verified portfolios and landing remote roles.
        </p>

        {/* Action Call Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Solid Action Button with onClick */}
          <button 
            onClick={handleGetStarted} 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-95 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: '#dc2626' }}
          >
            Start Free — It's Free
          </button>

          {/* Secondary Outline Transparent Button */}
          <button  
             className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border text-gray-300 text-sm font-bold tracking-wide transition-all duration-200 hover:text-white hover:bg-white/5 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ borderColor: '#1f2937' }}
          >
            Talk to an Advisor
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTASection;