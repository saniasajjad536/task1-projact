import React from 'react';

function footer() {
  const linksData = [
    {
      title: "PLATFORM",
      links: ["For Students", "For Employers", "For Universities", "Pricing", "How It Works"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Blog", "Press", "Contact"]
    },
    {
      title: "RESOURCES",
      links: ["Help Center", "Student Guide", "Employer Guide", "API Docs", "Community"]
    },
    {
      title: "LEGAL",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Protection"]
    }
  ];

  return (
    <footer className="w-full bg-[#030712] pt-24 pb-12 px-6 border-t border-gray-900 font-sans text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 pb-16">
          
          {/* Left Column: Logo + Bio Block (Takes 2 Columns Spacing) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Brand Logo Box */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1e3a8a] rounded flex items-center justify-center text-white font-bold text-sm">
                co
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                Career<span className="text-[#ef4444]">OS</span>
              </span>
            </div>

            {/* Platform short details text */}
            <p className="leading-relaxed max-w-xs text-gray-400">
              CareerOS helps Pakistani students turn coursework and side projects into a verified portfolio employers trust.
            </p>

            {/* Social Media Circular Icon Placeholders */}
            <div className="flex items-center gap-3 mt-2">
              {[1, 2, 3, 4].map((iconId) => (
                <div 
                  key={iconId} 
                  className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:border-gray-600 hover:bg-white/5"
                />
              ))}
            </div>
          </div>

          {/* Right Columns: Structured Navigation Links Links Grid (Takes 4 Columns Spacing) */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {linksData.map((group, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* Column Section Heading */}
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                  {group.title}
                </h4>
                
                {/* Links Stack Group List */}
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="transition-colors duration-200 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar Content Row Section */}
        <div className="pt-8 border-t border-gray-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 CareerOS. All rights reserved.
          </div>
          <div className="flex items-center gap-1 tracking-wide">
            Made in Pakistan <span className="text-[14px]">🇵🇰</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default footer;