import React from 'react';

function PricingSection() {
  // Click handler function for links
  const handlePricingClick = (tierName: string, e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Navigating to full pricing details for ${tierName}`);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6 md:px-16 font-sans text-slate-800 border-t border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. SECTION HEADER (Exactly like image text weights) */}
        <div className="mb-14 text-center">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-[#ef4444] mb-3">
            SIMPLE, TRANSPARENT PRICING
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#050b14]">
            Partnership Tiers
          </h2>
        </div>

        {/* 2. PRICING CARDS GRID (2 Columns Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: University Basic */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-xs flex flex-col justify-between items-start transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-slate-200/30">
            <div className="w-full">
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#64748b] mb-4">
                UNIVERSITY BASIC
              </span>
              <div className="flex items-baseline mb-4 text-[#050b14]">
                <span className="text-[22px] md:text-[26px] font-black tracking-tight">PKR 200,000</span>
                <span className="text-xs font-semibold text-slate-400 ml-1">/year</span>
              </div>
              <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-8">
                Up to 500 students, standard reports
              </p>
            </div>
            
            {/* Interactive Link */}
            <a 
              href="#full-pricing" 
              onClick={(e) => handlePricingClick("University Basic", e)}
              className="text-[#1e40af] text-[12px] font-bold tracking-wide inline-flex items-center gap-1 group hover:text-blue-800 transition-colors duration-150"
            >
              See Full Pricing <span className="transform transition-transform duration-150 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Card 2: University Enterprise */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-xs flex flex-col justify-between items-start transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-slate-200/30">
            <div className="w-full">
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#64748b] mb-4">
                UNIVERSITY ENTERPRISE
              </span>
              <div className="flex items-baseline mb-4 text-[#050b14]">
                <span className="text-[22px] md:text-[26px] font-black tracking-tight">Custom Pricing</span>
              </div>
              <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-8">
                Unlimited students, full white-label, API access, dedicated manager
              </p>
            </div>
            
            {/* Interactive Link */}
            <a 
              href="#full-pricing" 
              onClick={(e) => handlePricingClick("University Enterprise", e)}
              className="text-[#1e40af] text-[12px] font-bold tracking-wide inline-flex items-center gap-1 group hover:text-blue-800 transition-colors duration-150"
            >
              See Full Pricing <span className="transform transition-transform duration-150 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PricingSection;