import React from 'react';

export default function FeaturesGrid() {
  const features = [
    {
      id: "01",
      title: "Portfolio Builder",
      description: "Turn every completed task into a public, shareable portfolio project — not just a line on your CV.",
    },
    {
      id: "02",
      title: "Employability Score",
      description: "A single trusted number, scored across 12 real factors, updated weekly as you build.",
    },
    {
      id: "03",
      title: "AI Career Assistant",
      description: "CV Builder, Interview Prep, LinkedIn Optimizer, English Coach, and a Freelancing Coach — all in your pocket.",
    },
    {
      id: "04",
      title: "Verified Skill Badges",
      description: "Pass a 10-question assessment and earn a blue verified-tick badge employers actually trust.",
    },
    {
      id: "05",
      title: "Freelancing Dashboard",
      description: "Track Upwork/Fiverr income, hit monthly goals, and feed your freelance earnings straight into your score.",
    },
    {
      id: "06",
      title: "Gamification & Leaderboard",
      description: "Earn XP, unlock 30+ badges, and climb the city, university, or national leaderboard.",
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-12">
          <span className="text-[#ef4444] text-xs font-bold uppercase tracking-widest block mb-3">
            Built For You
          </span>
          <h2 className="text-gray-950 text-3xl md:text-4xl font-extrabold tracking-tight">
            Everything You Need to Get Hired Remote-Ready
          </h2>
        </div>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100/80 rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* ID Number */}
                <span className="text-gray-300 font-bold text-xs block mb-4 tracking-wider">
                  {item.id}
                </span>
                
                {/* Minimalist Square Placeholder for icon */}
                <div className="w-10 h-10 bg-[#f3f4f6] rounded-xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Title */}
                <h3 className="text-gray-950 font-bold text-lg mb-3 tracking-tight group-hover:text-[#ef4444] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div>
                <a
                  href="#learn-more"
                  className="text-[#1e3a8a] hover:text-[#2563eb] font-bold text-xs tracking-wide transition-colors duration-200 inline-flex items-center gap-1"
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