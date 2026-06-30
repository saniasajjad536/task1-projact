import React, { useState } from 'react';

function Navbar() {
  // State to manage language: 'EN' (English) or 'UR' (Urdu)
  const [lang, setLang] = useState<'EN' | 'UR'>('EN');

  // Navigation Links content array based on selected language
  const navLinks = lang === 'EN' ? [
    { label: "How It Works", href: "#how-it-works", active: false },
    { label: "For Students", href: "#for-students", active: false },
    { label: "For Employers", href: "#for-employers", active: false },
    { label: "For Universities", href: "#for-universities", active: true }, // Current active link
    { label: "Pricing", href: "#pricing", active: false }
  ] : [
    { label: "یہ کیسے کام کرتا ہے", href: "#how-it-works", active: false },
    { label: "طالب علموں کے لیے", href: "#for-students", active: false },
    { label: "کمپنیوں کے لیے", href: "#for-employers", active: false },
    { label: "یونیورسٹیوں کے لیے", href: "#for-universities", active: true },
    { label: "قیمتیں", href: "#pricing", active: false }
  ];

  // Functional Handlers
  const toggleLanguage = () => {
    setLang(prev => prev === 'EN' ? 'UR' : 'EN');
  };

  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  const handleScheduleDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <nav 
      // Main container with full width, strict minimum height and dark background
      className={`w-full min-w-full bg-[#030712] border-b border-gray-950 px-6 py-4 flex items-center justify-between font-sans selection:bg-red-500/30 gap-6 ${
        lang === 'UR' ? 'flex-row-reverse' : ''
      }`}
      dir={lang === 'UR' ? 'rtl' : 'ltr'}
      style={{ minHeight: '80px' }} // Explicitly setting a base height for consistency
    >
      
      {/* 1. Left Brand Section: Logo + Title (Explicit minimum width to prevent collapsing) */}
      <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0" style={{ minWidth: '180px' }}>
        {/* Blue Squared Logo Badge */}
        <div className="w-9 h-9 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white font-black text-base tracking-tighter transition-transform duration-200 group-hover:scale-105">
          co
        </div>
        {/* Main CareerOS Dynamic Logotype */}
        <span className="text-white font-black text-[22px] tracking-tight whitespace-nowrap">
          Career<span className="text-[#ef4444]">OS</span>
        </span>
      </div>

      {/* 2. Center Section: Main Interactive Navigation Menu Items (Prevents collapsing and uses full available space) */}
      <div className={`hidden lg:flex items-center gap-8 flex-grow justify-center ${lang === 'UR' ? 'flex-row-reverse' : ''}`} style={{ minWidth: '400px' }}>
        {navLinks.map((item, index) => (
          <div key={index} className="relative py-2 group whitespace-nowrap">
            <a
              href={item.href}
              className={`text-[15px] font-bold tracking-wide transition-colors duration-200 block ${
                item.active 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
            
            {/* Active Link Bottom Flat Border Indicator bar or Hover dynamic line */}
            <div 
              className={`absolute bottom-0 left-0 right-0 h-[2.5px] transition-all duration-200 origin-left ${
                item.active 
                  ? 'bg-[#ef4444] scale-x-100' 
                  : 'bg-white/40 scale-x-0 group-hover:scale-x-100'
              }`}
            />
          </div>
        ))}
      </div>

      {/* 3. Right Section: Language Toggle & Action Buttons (Strictly Right Aligned) */}
      <div className={`flex items-center gap-4 flex-shrink-0 ${lang === 'UR' ? 'flex-row-reverse' : ''}`} style={{ minWidth: '320px' }}>
        
        {/* Interactive EN | اردو Language Select Toggle Button with clean styling */}
        <button 
          onClick={toggleLanguage}
          className={`px-4 py-1.5 rounded-full border text-[13px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
            lang === 'UR' 
              ? 'bg-white/10 text-white border-gray-600' 
              : 'bg-transparent text-gray-300 border-gray-800 hover:text-white hover:bg-white/5 hover:border-gray-700'
          }`}
        >
          <span className={lang === 'EN' ? 'text-white font-bold' : 'text-gray-400'}>EN</span>
          <span className="text-gray-600 font-normal">|</span>
          <span className={`text-[14px] font-serif ${lang === 'UR' ? 'text-white font-bold' : 'text-gray-400'}`}>اردو</span>
        </button>

        {/* Flat Ghost Sign In Button Control */}
        <button 
          onClick={handleSignIn}
          className="px-5 py-2 text-white font-bold text-[14px] tracking-wide whitespace-nowrap transition-colors duration-200 hover:text-gray-300"
        >
          {lang === 'EN' ? 'Sign In' : 'سائن ان'}
        </button>

        {/* Solid Vivid Primary Accent Action Button */}
        <button 
          onClick={handleScheduleDemo}
          className="px-6 py-2.5 rounded-full text-white text-[14px] font-extrabold tracking-wide whitespace-nowrap transition-all duration-200 shadow-lg shadow-red-950/20 hover:opacity-95 transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: '#dc2626' }}
        >
          {lang === 'EN' ? 'Schedule a Demo' : 'ڈیمو بک کریں'}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;