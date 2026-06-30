import React, { useState } from 'react';

function UniversityPortalSection() {
  // State to manage selected brand color dynamically
  const [activeColorIdx, setActiveColorIdx] = useState<number>(0);

  // Color map arrays for tailwind logic configurations
  const colorThemes = [
    { primaryBg: 'bg-[#122e56]', progressBg: 'bg-gradient-to-r from-blue-900 to-blue-700', ring: 'ring-[#122e56]' },
    { primaryBg: 'bg-[#dc2626]', progressBg: 'bg-gradient-to-r from-red-700 to-red-500', ring: 'ring-[#dc2626]' },
    { primaryBg: 'bg-[#16a34a]', progressBg: 'bg-gradient-to-r from-emerald-700 to-emerald-500', ring: 'ring-[#16a34a]' },
    { primaryBg: 'bg-[#7c3aed]', progressBg: 'bg-gradient-to-r from-purple-700 to-purple-500', ring: 'ring-[#7c3aed]' }
  ];

  // Progress Data List
  const departments = [
    { num: "01", name: "Computer Science", percentage: "81%" },
    { num: "02", name: "Business Administration", percentage: "68%" },
    { num: "03", name: "Engineering", percentage: "75%" },
    { num: "04", name: "Design & Media", percentage: "64%" },
    { num: "05", name: "Social Sciences", percentage: "58%" }
  ];

  return (
    <section className="w-full bg-[#050b14] py-24 px-6 md:px-16 font-sans text-white overflow-hidden selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT SIDE: TEXT CONTENT AND CARD (6 Columns) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
          
          {/* Section Subtitle */}
          <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#ef4444] mb-4">
            YOUR BRAND. YOUR PORTAL.
          </span>
          
          {/* Main Typography Header (Now on the Left Side) */}
          <h2 className="text-4xl md:text-[48px] font-black tracking-tight leading-[1.1] mb-8">
            It Looks Like Your <br />
            University — <span className="text-gray-400">Because It Is.</span>
          </h2>

          {/* Compact Portal Card positioned nicely below the text */}
          <div className="w-full max-w-[380px] bg-white rounded-[24px] p-6 mt-4 shadow-2xl shadow-black/90 border border-gray-100/5 transition-all duration-300 transform hover:scale-[1.01]">
            
            {/* Custom Browser Control Dots */}
            <div className="flex gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]/90" />
              <span className="w-2 h-2 rounded-full bg-amber-400/90" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
            </div>

            {/* Content List Block */}
            <div className="space-y-5 text-sm text-gray-500">
              
              {/* Row 1: University Name */}
              <div className="flex items-start justify-between pb-3 border-b border-gray-100">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-wide text-gray-400">University Name</span>
                  <span className="text-[10px] font-medium text-gray-400 mt-0.5">Admin</span>
                </div>
                <span className="text-gray-900 font-black text-sm tracking-tight">
                  Lahore University
                </span>
              </div>

              {/* Row 2: Subdomain URL */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-[11px] font-bold tracking-wide text-gray-400">Subdomain</span>
                <span className="text-gray-900 font-extrabold text-[12px] tracking-tight bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                  lahoreu.careeros.pk
                </span>
              </div>

              {/* Row 3: Interactive Dynamic Brand Colors */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-[11px] font-bold tracking-wide text-gray-400">Brand Color</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveColorIdx(0)}
                    className={`w-5 h-5 rounded-full bg-[#122e56] cursor-pointer transition-all duration-200 hover:scale-110 ${activeColorIdx === 0 ? 'ring-2 ring-offset-2 ring-[#122e56]' : ''}`}
                  />
                  <button 
                    onClick={() => setActiveColorIdx(1)}
                    className={`w-5 h-5 rounded-full bg-[#dc2626] cursor-pointer transition-all duration-200 hover:scale-110 ${activeColorIdx === 1 ? 'ring-2 ring-offset-2 ring-[#dc2626]' : ''}`}
                  />
                  <button 
                    onClick={() => setActiveColorIdx(2)}
                    className={`w-5 h-5 rounded-full bg-[#16a34a] cursor-pointer transition-all duration-200 hover:scale-110 ${activeColorIdx === 2 ? 'ring-2 ring-offset-2 ring-[#16a34a]' : ''}`}
                  />
                  <button 
                    onClick={() => setActiveColorIdx(3)}
                    className={`w-5 h-5 rounded-full bg-[#7c3aed] cursor-pointer transition-all duration-200 hover:scale-110 ${activeColorIdx === 3 ? 'ring-2 ring-offset-2 ring-[#7c3aed]' : ''}`}
                  />
                </div>
              </div>

              {/* Row 4: Custom Certificate Status Toggle */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold tracking-wide text-gray-400">Custom Certificate Design</span>
                <div className="flex items-center gap-1 font-black text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100/60">
                  <span>ON</span>
                  <span>✓</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE: METRIC PROGRESS TRACKS (6 Columns) */}
        <div className="lg:col-span-6 w-full lg:pt-16">
          <div className="space-y-6 w-full max-w-2xl">
            {departments.map((dept, idx) => (
              <div key={idx} className="grid grid-cols-12 items-center gap-4 group py-1">
                
                {/* Index */}
                <div className="col-span-1 text-slate-600 font-bold text-xs tracking-wider">
                  {dept.num}
                </div>

                {/* Department Name */}
                <div className="col-span-5 text-gray-200 text-[15px] font-bold tracking-wide group-hover:text-white transition-colors duration-150">
                  {dept.name}
                </div>

                {/* Progress bar */}
                <div className="col-span-5 h-1.5 bg-gray-900/80 rounded-full overflow-hidden flex items-center">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${colorThemes[activeColorIdx].progressBg}`}
                    style={{ width: dept.percentage }}
                  />
                </div>

                {/* Percentage */}
                <div className="col-span-1 text-right text-gray-200 text-[14px] font-extrabold tracking-tight">
                  {dept.percentage}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default UniversityPortalSection;