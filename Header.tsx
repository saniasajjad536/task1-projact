import React, { useState } from 'react';

interface HeaderProps {
  setShowAuthModal?: (show: boolean) => void;
  setAuthMode?: (mode: 'login' | 'signup') => void;
}

function Header({ setShowAuthModal, setAuthMode }: HeaderProps) {
  // Navigation Links State (Image ke mutabiq 'For Students' active hai)
  const [activeTab, setActiveTab] = useState<string>('For Students');
  
  // Language Toggle State (Default English)
  const [lang, setLang] = useState<'EN' | 'UR'>('EN');

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Students", href: "#for-students" },
    { name: "For Employers", href: "#for-employers" },
    { name: "For Universities", href: "#for-universities" },
    { name: "Pricing", href: "#pricing" }
  ];

  const handleAuthAction = (mode: 'login' | 'signup') => {
    if (setAuthMode && setShowAuthModal) {
      setAuthMode(mode);
      setShowAuthModal(true);
    } else {
      console.log(`Open ${mode} action`);
    }
  };

  return (
    <nav className="w-full bg-[#030712] border-b border-[#111827] sticky top-0 z-50 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Logo Container */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Rounded Blue Icon Box 'co' */}
          <div className="bg-[#1E3A8A] text-white font-extrabold text-sm px-3 py-2 rounded-xl font-mono tracking-tight shadow-md transition-transform group-hover:scale-105">
            co
          </div>
          {/* Main Logo Text matching image_e5f39f.png */}
          <span className="text-white font-black text-xl tracking-tight">
            Career<span className="text-[#E04326]">OS</span>
          </span>
        </div>

        {/* Center: Dynamic Interactive Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isCurrentActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link.name);
                }}
                className={`text-[13px] font-semibold tracking-wide relative pb-2 pt-2 transition-all duration-200 ease-in-out ${
                  isCurrentActive 
                    ? "text-white font-bold" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link.name}
                {/* Active Underline matching image_e5f39f.png */}
                {isCurrentActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E04326] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side: Action Buttons Section */}
        <div className="flex items-center gap-4">
          
          {/* 1. Language Pill Selector Button */}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'UR' : 'EN')}
            className="text-gray-300 hover:text-white text-xs font-bold bg-[#0B1329]/60 px-4 py-2 rounded-full border border-gray-800 transition-all active:scale-95 flex items-center gap-1.5 font-sans"
          >
            <span className={lang === 'EN' ? 'text-white font-extrabold' : 'text-gray-500'}>EN</span>
            <span className="text-gray-700 font-normal">|</span>
            <span className={`font-medium ${lang === 'UR' ? 'text-white font-extrabold' : 'text-gray-400'}`} dir="rtl">اردو</span>
          </button>

          {/* 2. Transparent/Bordered Sign In Button */}
          <button 
            onClick={() => handleAuthAction('login')}
            className="text-white hover:bg-white/5 text-[13px] font-bold border border-gray-800 px-5 py-2.5 rounded-full transition-all active:scale-95"
          >
            Sign In
          </button>

          {/* 3. Solid Premium Orange/Red Action Button */}
          <button 
            onClick={() => handleAuthAction('signup')}
            className="bg-[#E04326] hover:bg-[#c2351a] text-white text-[13px] font-black px-6 py-2.5 rounded-full transition-all duration-150 shadow-lg hover:shadow-[#E04326]/20 active:scale-95"
          >
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Header;