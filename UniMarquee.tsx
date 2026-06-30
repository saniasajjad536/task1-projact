
import React from 'react';

export default function UniMarquee() {
  const brands = [
    "Arbisoft",
    "10Pearls",
    "Careem",
    "LUMS",
    "NUST",
    "FAST-NUCES",
    "IBA Karachi",
    "COMSATS"
  ];

  // Infinite effect ke liye list ko duplicate karte hain
  const doubleBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-[#f9fafb] py-12 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
          WHERE CAREEROS STUDENTS STUDY & GET HIRED
        </h3>
      </div>

      {/* Main Slider Container */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee gap-6 px-4">
          {doubleBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white text-gray-500 font-bold text-xs tracking-wide px-5 py-2.5 rounded-full shadow-sm border border-gray-100 min-w-[120px] flex items-center justify-center cursor-pointer hover:shadow-md hover:text-gray-800 transition-all duration-200"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}