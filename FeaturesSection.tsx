import React from 'react';

function FeaturesSection() {
  
  // Features Data representing the 6 cards from the images
  const features = [
    {
      num: "01",
      title: "Real-Time Placement Dashboard",
      desc: "See enrolled students, active internships, placement rate, and average Employability Score by department — updated live, no manual surveys.",
      link: "#"
    },
    {
      num: "02",
      title: "White-Label Branding",
      desc: "Your logo, your brand color, your own subdomain — [university].careeros.pk. Students see your university first, CareerOS second.",
      link: "#"
    },
    {
      num: "03",
      title: "Custom Certificate Co-Branding",
      desc: "Every certificate your students earn carries your university's crest alongside CareerOS's — verifiable instantly via QR code.",
      link: "#"
    },
    {
      num: "04",
      title: "Department-Level Reporting",
      desc: "Placement, skill distribution, mentor feedback, and freelancing-income reports, broken down by department, exportable as PDF or Excel.",
      link: "#"
    },
    {
      num: "05",
      title: "Zero Setup Cost",
      desc: "Students self-link to your university during onboarding via domain verification — no IT integration required to get started.",
      link: "#"
    },
    {
      num: "06",
      title: "Dedicated Partnership Manager",
      desc: "A single point of contact for your career office, with response SLAs and quarterly placement reviews.",
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-[#e6eaef] py-20 px-6 md:px-16 font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-14 text-left">
          <span className="block text-[11px] font-bold uppercase tracking-widest text-[#ef4444] mb-3">
            WHY UNIVERSITIES PARTNER WITH US
          </span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#050b14]">
            Built for Career Services Offices
          </h3>
        </div>

        {/* 2. FEATURES CARDS GRID (3 Columns Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Card Number & Top Icon Placeholder Layout */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[13px] font-bold text-slate-300 tracking-wider">
                    {item.num}
                  </span>
                  {/* Subtle Light Icon Shape Box */}
                  <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-100 transition-colors duration-300 group-hover:bg-slate-100/70" />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-[#050b14] tracking-tight mb-4 group-hover:text-[#0c0c0c] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Functional Interactive 'Learn more' Redirect Link */}
              <div>
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/features/${item.num}`;
                  }}
                  className="inline-flex items-center font-bold text-[13px] text-slate-700 hover:text-[#141111] tracking-wide transition-colors duration-200"
                >
                  Learn more
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;