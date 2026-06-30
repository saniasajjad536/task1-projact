
import React from 'react';

interface FactorProps {
  index: number;
  label: string;
  score: number;
}

// 12-Factor Breakdown ke single row ka component
const FactorRow: React.FC<FactorProps> = ({ index, label, score }) => {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-800/40 last:border-b-0 text-xs sm:text-sm">
      <div className="flex items-center gap-3">
        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#162235] text-[10px] font-bold text-gray-400 border border-gray-800">
          {index}
        </span>
        <span className="text-gray-300 font-medium tracking-wide">{label}</span>
      </div>
      <div className="flex items-center gap-4 w-1/2 justify-end">
        {/* Progress Bar Container */}
        <div className="w-24 sm:w-36 h-1.5 bg-[#162235] rounded-full overflow-hidden relative border border-gray-900">
          {/* Progress fill using the exact red gradient from left to right */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#203656] to-[#E24A39]"
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="w-5 text-right font-bold text-gray-200 tabular-nums">{score}</span>
      </div>
    </div>
  );
};

export default function EmployabilityScore() {
  const factors = [
    { label: "Verified Skills", score: 88 },
    { label: "Portfolio Projects", score: 72 },
    { label: "Communication Score", score: 80 },
    { label: "Task Completion Rate", score: 92 },
    { label: "Employer Endorsements", score: 65 },
    { label: "Industry Certifications", score: 60 },
    { label: "Leadership Activity", score: 55 },
    { label: "Peer Collaboration", score: 78 },
    { label: "Interview Readiness", score: 70 },
    { label: "GitHub / Work Samples", score: 83 },
    { label: "Consistency & Streak", score: 90 },
    { label: "Remote Work Readiness", score: 74 },
  ];

  return (
    <section className="w-full min-h-screen bg-[#070D19] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 font-sans flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Main Score & Hero Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
          <div>
            <p className="text-[#E24A39] text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Your Score. Your Future.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              See Exactly Whare you Stand
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              A single, trusted number — calculated across 12 real factors — that tells employers exactly how ready you are. Updated weekly as you learn, build, and ship.
            </p>
          </div>

          {/* Circular Progress Section */}
          <div className="flex flex-col items-start space-y-6">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {/* SVG for Circular Progress with Design Gradients */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <defs>
                  {/* Track Gradient (Dark blue) */}
                  <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B2E4A" />
                    <stop offset="100%" stopColor="#0B1324" />
                  </linearGradient>
                  {/* Progress Glow/Fill Gradient (Red-Orange to Blue) */}
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E24A39" />
                    <stop offset="50%" stopColor="#8C354E" />
                    <stop offset="100%" stopColor="#254676" />
                  </linearGradient>
                </defs>
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#trackGradient)"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Foreground Active Score Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#scoreGradient)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="263.89"
                  strokeDashoffset={263.89 - (263.89 * 78) / 100}
                  strokeLinecap="round"
                />
              </svg>
              {/* Inner Center Text */}
              <div className="absolute text-center flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">78</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">out of 100</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-[#111A2E] border border-gray-800 text-gray-400 text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-sm">
                Skills Verified
              </span>
              <span className="bg-[#111A2E] border border-gray-800 text-gray-400 text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-sm">
                Portfolio Live
              </span>
              <span className="bg-[#111A2E] border border-gray-800 text-gray-400 text-[11px] font-medium px-3 py-1.5 rounded-xl shadow-sm">
                Top 18%
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-[#E24A39] hover:bg-[#c93f30] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-red-900/20 transition-all duration-200 group active:scale-95">
              <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get My Score Free
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 12-Factor Breakdown */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#0A1222] to-[#080E1A] border border-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="mb-6">
            <h2 className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
              12-Factor Breakdown
            </h2>
          </div>
          
          <div className="flex flex-col">
            {factors.map((factor, index) => (
              <FactorRow
                key={index}
                index={index + 1}
                label={factor.label}
                score={factor.score}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}