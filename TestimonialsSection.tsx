import React from 'react';

interface TestimonialCardProps {
  initials: string;
  name: string;
  designation: string;
  quote: string;
  badge: string;
}

function TestimonialsSection() {
  // Exact data from image_4739e3.png
  const testimonials: TestimonialCardProps[] = [
    {
      initials: "SM",
      name: "Dr. Sarah Malik",
      designation: "Director of Career Services, LUMS",
      quote: '"We went from spreadsheet tracking to a live placement dashboard in two weeks. Our department heads finally trust the numbers."',
      badge: "Live in 2 Weeks"
    },
    {
      initials: "IA",
      name: "Imran Aslam",
      designation: "Placement Officer, FAST-NUCES",
      quote: '"The white-label branding made adoption painless — students didn\'t even realize it was a third-party platform."',
      badge: "Seamless Adoption"
    },
    {
      initials: "AF",
      name: "Ayesha Farooq",
      designation: "Career Services Lead, COMSATS",
      quote: '"Certificate co-branding alone increased our employer engagement at career fairs."',
      badge: "+Employer Engagement"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6 md:px-16 font-sans text-slate-800 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. SECTION HEADER (Centered & Clean) */}
        <div className="mb-14 text-center">
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#ef4444] mb-3">
            FROM CAREER SERVICES OFFICES
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#050b14]">
            Trusted by Placement Directors
          </h2>
        </div>

        {/* 2. TESTIMONIALS 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/60 shadow-xs flex flex-col justify-between items-start transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-slate-200/40"
            >
              <div className="w-full">
                {/* Profile Header Block */}
                <div className="flex items-center gap-3.5 mb-6">
                  {/* Blue Initials Avatar Circle */}
                  <div className="w-11 h-11 rounded-full bg-[#1e40af] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black tracking-wider">
                      {item.initials}
                    </span>
                  </div>
                  {/* Name and University Info */}
                  <div className="flex flex-col">
                    <h3 className="text-[14px] font-extrabold text-[#050b14] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                      {item.designation}
                    </p>
                  </div>
                </div>

                {/* Main Quote Content Text (Kept small and exact as requested) */}
                <p className="text-slate-600 text-[13px] leading-relaxed font-medium mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Status Green Tag Badge */}
              <div className="inline-flex items-center bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/70">
                <span className="text-[11px] font-bold text-emerald-700 tracking-wide">
                  {item.badge}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;