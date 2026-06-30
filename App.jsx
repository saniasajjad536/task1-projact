
import React, { useState } from "react";

// =========================================================
// 1. MAIN INTERN PROJECT ORIGINAL COMPONENTS (Aapki Pehli Image ke mutabiq)
// =========================================================
// import DashboardCard from "./DashboardCard";
import Employability from "./Employability";
import Footer from "./Footer";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import CareerCapitalCTA from "./CareerCapitalCTA";
import PakistaniGraduateFeatures from "./PakistaniGraduateFeatures";
// Note: Agar aapka purana layout inhi files se mil kar banta tha, to humne inko niche render kiya hai.

// =========================================================
// 2. UNIVERSITY COMPONENTS (Aapki image_490c77.png wali files)
// =========================================================
import Navbar from "./universitypage/Navbar";
import HeroSection from "./universitypage/HeroSection";
 import PartnerUniversities from "./universitypage/PartnerUniversities";
 import FeaturesSection from "./universitypage/FeaturesSection";
 import UniversityPortalSection from "./universitypage/UniversityPortalSection";
 import TestimonialsSection from "./universitypage/TestimonialsSection";
 import PricingSection from "./universitypage/PricingSection";
 import FaqSection from "./universitypage/FaqSection";
import ContactFormSection from "./universitypage/ContactFormSection";
import FooterSection from "./universitypage/FooterSection";

// =========================================================
// 3. STUDENT COMPONENTS (Aapke Student Project ki files)
// =========================================================
import Header from "./studentpage/Header";

import HeroBlueSection from "./studentpage/HeroBlueSection";
import UniMarquee from "./studentpage/UniMarquee";
import FeaturesGrid from "./studentpage/feature";
import Process from "./studentpage/ProcessSteps";
import EmployabilityScore from "./studentpage/Employability";
import RealStands from "./studentpage/RealStands";
import FAQSection from "./studentpage/FAQSection";
import CTASection from "./studentpage/CTASection";
import footer from "./studentpage/footer";


function App() {
  // Ab aapke paas 3 views hain: 'intern' (main), 'student', aur 'university'
  const [currentView, setCurrentView] = useState("intern");

  const handleViewChange = (viewName) => {
    setCurrentView(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-white antialiased font-sans">
      
      {/* =========================================================
          GLOBAL BRAND NAVBAR (As per image_49ed2f.png)
          ========================================================= */}
      <nav className="w-full bg-[#050b14]/90 backdrop-blur-md border-b border-slate-900/60 sticky top-0 z-50 py-4 px-6 md:px-16 flex items-center justify-between">
        
        {/* Left Side: Brand Logo (Click karne par original intern project khulega) */}
        <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => handleViewChange("intern")}>
          <div className="w-7 h-7 rounded-xl bg-[#de4e37] flex items-center justify-center shadow-md">
            <span className="text-white text-[11px] font-black tracking-tighter">co</span>
          </div>
          <span className="text-white font-black text-[18px] tracking-tight">
            Career<span className="text-white/90 font-bold">OS</span>
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
          <button 
            onClick={() => handleViewChange("intern")} 
            className={`transition-colors duration-150 cursor-pointer ${currentView === "intern" ? "text-white font-bold underline underline-offset-4 decoration-[#de4e37]" : "hover:text-white"}`}
          >
            How It Works
          </button>
          
          {/* FOR STUDENTS LINK */}
          <button 
            onClick={() => handleViewChange("student")} 
            className={`transition-colors duration-150 cursor-pointer ${currentView === "student" ? "text-white font-bold underline underline-offset-4 decoration-[#de4e37]" : "hover:text-white"}`}
          >
            For Students
          </button>
          
          <a href="#employers" className="hover:text-white transition-colors duration-150">
            For Employers
          </a>
          
          {/* FOR UNIVERSITY LINK */}
          <button 
            onClick={() => handleViewChange("university")} 
            className={`transition-colors duration-150 cursor-pointer ${currentView === "university" ? "text-white font-bold underline underline-offset-4 decoration-[#de4e37]" : "hover:text-white"}`}
          >
            For University
          </button>
          
          <a href="#pricing" className="hover:text-white transition-colors duration-150">
            Pricing
          </a>
        </div>

        {/* Right Side: Auth & Get Started */}
        <div className="flex items-center gap-5 text-[13px] font-semibold">
          <span className="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors text-xs hidden sm:inline">
            EN | Urdu
          </span>
          <button onClick={() => handleViewChange("intern")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            Sign In
          </button>
          <button 
            onClick={() => handleViewChange("university")}
            className="bg-[#de4e37] hover:bg-[#cb3f29] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* =========================================================
          DYNAMIC MAIN RENDERER (3 Folders Connection)
          ========================================================= */}
      <main>
        {currentView === "intern" && (
          /* 1. ORIGINAL INTERN PROJECT LANDING VIEW */
          <div className="transition-all duration-300">
            <Hero />
            <TrustedBy />
            <PakistaniGraduateFeatures />
            {/* <DashboardCard /> */}
            <Employability />
            <CareerCapitalCTA />
            <Footer />
          </div>
        )}

        {currentView === "university" && (
          /* 2. UNIVERSITY VIEW PORTAL LAYOUT */
          <div className="transition-all duration-300">
            <HeroSection />
            <PartnerUniversities />
            <FeaturesSection />
            <UniversityPortalSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <ContactFormSection />
            <FooterSection />
          </div>
        )}

        {currentView === "student" && (
          /* 3. STUDENT VIEW INTAKE LAYOUT */
          <div className="transition-all duration-300">
            <HeroBlueSection />
            <UniMarquee />
            <FeaturesGrid />
            <Process />
            <EmployabilityScore />
            <RealStands />
            <FAQSection />
            <CTASection />
            <StudentFooter />
          </div>
        )}
      </main>

    </div>
  );
}

export default App;


