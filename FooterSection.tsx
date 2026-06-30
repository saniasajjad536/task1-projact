import React from 'react';

function FooterSection() {
  // Function to smoothly scroll the window back to the top of the page
  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#050b14] pt-20 pb-10 px-6 md:px-16 font-sans text-gray-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* UPPER MAIN LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-y-12 gap-x-8 pb-16">
          
          {/* Column 1: Brand Info Block */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex flex-col items-start gap-4">
            {/* Logo Row */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#1e40af] flex items-center justify-center">
                <span className="text-white text-[10px] font-black">co</span>
              </div>
              <span className="text-white font-black text-[15px] tracking-tight">
                Career<span className="text-[#ef4444]">OS</span>
              </span>
            </div>
            
            {/* Short Tagline Paragraph */}
            <p className="text-slate-400 text-[13px] font-medium leading-relaxed max-w-xs text-left">
              CareerOS helps Pakistani students turn coursework and side projects into a verified portfolio employers trust.
            </p>
            
            {/* Social Empty Circles Placeholder */}
            <div className="flex gap-2 mt-2">
              <span className="w-8 h-8 rounded-full border border-slate-800 inline-block" />
              <span className="w-8 h-8 rounded-full border border-slate-800 inline-block" />
              <span className="w-8 h-8 rounded-full border border-slate-800 inline-block" />
              <span className="w-8 h-8 rounded-full border border-slate-800 inline-block" />
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-3.5">
            <h4 className="text-white text-[11px] font-black tracking-wider uppercase mb-1">
              Platform
            </h4>
            <a href="#students" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">For Students</a>
            <a href="#employers" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">For Employers</a>
            <a href="#universities" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">For Universities</a>
            <a href="#pricing" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Pricing</a>
            <a href="#how-it-works" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">How It Works</a>
          </div>

          {/* Column 3: Company Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-3.5">
            <h4 className="text-white text-[11px] font-black tracking-wider uppercase mb-1">
              Company
            </h4>
            <a href="#about" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">About Us</a>
            <a href="#careers" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Careers</a>
            <a href="#blog" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Blog</a>
            <a href="#press" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Press</a>
            <a href="#contact" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Contact</a>
          </div>

          {/* Column 4: Resources Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-3.5">
            <h4 className="text-white text-[11px] font-black tracking-wider uppercase mb-1">
              Resources
            </h4>
            <a href="#help" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Help Center</a>
            <a href="#student-guide" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Student Guide</a>
            <a href="#employer-guide" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Employer Guide</a>
            <a href="#api" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">API Docs</a>
            <a href="#community" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Community</a>
          </div>

          {/* Column 5: Legal Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-3.5">
            <h4 className="text-white text-[11px] font-black tracking-wider uppercase mb-1">
              Legal
            </h4>
            <a href="#privacy" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Privacy Policy</a>
            <a href="#terms" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Terms of Service</a>
            <a href="#cookie" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Cookie Policy</a>
            <a href="#data-protection" onClick={handleFooterLinkClick} className="text-[13px] font-medium hover:text-white transition-colors duration-150">Data Protection</a>
          </div>

        </div>

        {/* LOWER BAR: COPYRIGHT */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-medium text-slate-500">
          <div>
            © 2026 CareerOS. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 tracking-wide">
            Made in Pakistan <span className="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded-sm border border-slate-800 font-bold text-slate-400">PK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterSection;