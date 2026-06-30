import Header from "./Header";

import HeroBlueSection from "./HeroBlueSection";
import UniMarquee from "./UniMarquee";
import FeaturesGrid from "./feature";
import Process from "./ProcessSteps";
import EmployabilityScore from "./Employability";
import RealStands from "./RealStands";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import footer from "./footer";


function App(){
  
  return(
<div>
  <Header/>
  <HeroBlueSection
  setShowAuthModal={() => {}}
  setAuthMode={() =>{}}
  setShowDemoModal={()=> {}}/>
  <UniMarquee/>
  <FeaturesGrid/>
  <Process/>
  <EmployabilityScore/>
  <RealStands/>
  <FAQSection/>
  <CTASection/>
  <footer/>
</div>
  );
}
export default App;