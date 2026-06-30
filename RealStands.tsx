import React from 'react';

function RealStands() {
  const testimonials = [
    {
      id: 1,
      initials: "HT",
      name: "Hamza Tariq",
      subline: "Software Engineering, FAST-NUCES",
      quote: '"I had zero internships before CareerOS. Three months later I had a paid offer from a fintech startup."',
      tagText: "Hired at Careem",
    },
    {
      id: 2,
      initials: "AN",
      name: "Areeba Noor",
      subline: "Marketing, LUMS",
      quote: '"My Employability Score gave me something concrete to put in my LinkedIn headline."',
      tagText: "94 Employability Score",
    },
    {
      id: 3,
      initials: "BA",
      name: "Bilal Ahmed",
      subline: "Computer Science, NUST",
      quote: '"The Freelancing Coach helped me land my first Upwork client in 2 weeks."',
      tagText: "+Rs62K/mo freelancing",
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-xs font-bold uppercase tracking-widest block mb-3">
            REAL STUDENTS, REAL RESULTS
          </span>
          <h2 className="text-gray-950 text-4xl font-extrabold tracking-tight">
            From Campus to Career
          </h2>
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((student) => (
            <div
              key={student.id}
              /* Is main div par hover effects inline style aur classes dono se handle kiya hai */
              className="bg-white border border-gray-100/80 rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              style={{ 
                minHeight: '280px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div>
                {/* Header: Avatar + Identity Info */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Circular Avatar Box */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm tracking-wide shrink-0 transition-transform duration-300 hover:rotate-6"
                    style={{ backgroundColor: '#1e3a8a' }}
                  >
                    {student.initials}
                  </div>
                  
                  {/* Name and University Info */}
                  <div className="flex flex-col">
                    <h3 className="text-gray-950 font-extrabold text-[15px] tracking-tight leading-snug">
                      {student.name}
                    </h3>
                    <span className="text-gray-400 text-xs font-medium mt-0.5">
                      {student.subline}
                    </span>
                  </div>
                </div>

                {/* Main Quote Text */}
                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6 tracking-wide">
                  {student.quote}
                </p>
              </div>

              {/* Pill Tag Status Badge Footer */}
              <div className="pt-2">
                <span 
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 hover:opacity-90"
                  style={{ 
                    backgroundColor: '#e6f4ea', 
                    color: '#137333' 
                  }}
                >
                  {student.tagText}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RealStands;