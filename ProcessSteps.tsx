import React from 'react';

function Process() {
  const steps = [
    {
      id: 1,
      title: "Build Your Profile",
      description: "Add your skills, GitHub, LinkedIn, and resume.",
      meta: "5 MINUTES",
    },
    {
      id: 2,
      title: "Complete Verified Tasks",
      description: "Apply to internships or cohort programs and complete real, mentor-reviewed work.",
    },
    {
      id: 3,
      title: "Earn Your Score & Badges",
      description: "Your Employability Score updates weekly. Pass skill assessments for verified badges.",
    },
    {
      id: 4,
      title: "Get Discovered",
      description: "85+ companies search CareerOS profiles directly. Recruiters message you — you don't have to chase them.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-xs font-bold uppercase tracking-widest block mb-3">
            THE PROCESS
          </span>
          <h2 className="text-gray-950 text-4xl font-extrabold tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Process Items Row Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col relative group">
              
              {/* Row Layout for Circle and Connected Dotted Lines */}
              <div className="flex items-center w-full mb-6 relative">
                
                {/* Number Circle Badge */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: '#1e3a8a' }}
                >
                  {step.id}
                </div>

                {/* Dotted Connection Pipe Line between numbers (Hidden on the last step) */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden md:block absolute left-10 right-[-16px] h-[2px] z-0"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #d1d5db 40%, rgba(255,255,255,0) 20%)',
                      backgroundPosition: 'bottom',
                      backgroundSize: '7px 2px',
                      backgroundRepeat: 'repeat-x',
                      top: '50%',
                      transform: 'clientY(-50%)'
                    }}
                  />
                )}
              </div>

              {/* Title Content */}
              <h3 className="text-gray-950 font-extrabold text-lg mb-3 tracking-tight group-hover:text-[#141111] transition-colors duration-200">
                {step.title}
              </h3>

              {/* Paragraph Info */}
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {step.description}
              </p>

              {/* Red Meta Text Tag (Only if present in object) */}
              {step.meta && (
                <span className="text-[#ef4444] text-[11px] font-extrabold tracking-wider uppercase mt-1">
                  {step.meta}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;