

import React from 'react';

function TrustedBy() {
  const brands = [
    "LUMS", 
    "Netsol Technologies", 
    "FAST-NUCES", 
    "Arbisoft", 
    "IBA Karachi", 
    "10Pearls", 
    "COMSATS", 
    "Bazaar Tech", 
    "UET Lahore", 
    "NUST", 
    "Systems Limited", 
    "GIKI"
  ];

  // Infinite scroll ke liye list ko double kar rahe hain taake break na aaye
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-white py-10 border-y border-gray-100 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        
        {/* Top Heading */}
        <p className="text-[11px] font-black tracking-widest text-gray-400 uppercase mb-6">
          Trusted by Pakistan's Leading Institutions & Companies
        </p>
        
        {/* Marquee Container */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          
          {/* Moving Track */}
          <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee whitespace-nowrap py-2">
            {duplicatedBrands.map((brand, i) => (
              <span 
                key={i} 
                className="bg-[#f7f6f3] border border-gray-200/60 text-gray-700 px-5 py-2.5 rounded-xl text-xs font-bold tracking-tight shadow-sm transition-all duration-200 hover:scale-105"
              >
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustedBy;

