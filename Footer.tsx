
import React from 'react';

export default function Footer() {
  // Functionality for Buttons
  const handleStartFree = () => {
    alert("Redirecting to Registration...");
  };

  const handleTalkToTeam = () => {
    alert("Opening Team Contact Chat...");
  };

  return (
    <footer className="w-full font-sans">
      
      {/* --- 1. TOP CTA SECTION (Jo pehle missing tha) --- */}
      <div className="w-full bg-[#FAF8F5] py-16 px-4 flex flex-wrap justify-center items-center gap-4 border-b border-gray-200">

      </div>

      {/* --- 2. MAIN FOOTER (Aapka purana background aur grids) --- */}
      <div className="w-full bg-[#080F1C] border-t border-gray-800/60 pt-16 pb-8 relative z-10 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand/Logo Column */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 bg-[#E24A39] rounded-lg flex items-center justify-center text-white font-bold text-xs">CO</div>
              <span className="text-white font-bold text-base">Career<span className="text-[#E24A39]">OS</span></span>
            </div>
            <p className="max-w-xs text-gray-500 leading-relaxed mb-4">
              Pakistan's AI-powered career operating system — helping students build verified portfolios and land remote opportunities.
            </p>
            
            {/* Social Media Icons (Jo pehle missing thye) */}
            <div className="flex items-center gap-2 pt-2">
              {['linkedin', 'instagram', 'facebook'].map((platform) => (
                <a 
                  key={platform}
                  href={`#${platform}`}
                  className="w-8 h-8 rounded-lg bg-[#111A2E] border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-700 transition-colors"
                >
                  <span className="text-[10px] uppercase font-mono">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Platform</h5>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#score" className="hover:text-white">Employability Score</a></li>
              <li><a href="#employers" className="hover:text-white">For Employers</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Company</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#help" className="hover:text-white">Help Center</a></li>
              <li><a href="#guide" className="hover:text-white">Student Guide</a></li>
              <li><a href="#universities" className="hover:text-white">Partner Universities</a></li>
            </ul>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR (Copyright & Made in Pakistan) --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <p>© 2026 CareerOS. All rights reserved.</p>
          
          {/* Middle links shifted left matching your previous setup */}
          <div className="flex space-x-6 mr-auto sm:ml-8">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
            <a href="#cookies" className="hover:text-white">Cookie Policy</a>
          </div>

          {/* Region Text (Jo pehle missing tha) */}
          <div className="flex items-center gap-1 font-medium text-gray-600 text-xs">
            Made in Pakistan <span className="text-[10px] bg-gray-800/40 text-gray-500 px-1 rounded uppercase tracking-wider">pk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}