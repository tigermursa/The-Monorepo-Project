import Features from "../Sections/Features/Features";
import HeroSection from "../Sections/HeroSection/HeroSection";
import Industries from "../Sections/Industries/Industries";
import SocialProofSection from "../Sections/SocialProofSection/SocialProofSection";

const MainLayout = () => {
  return (
    <div className="container border border-red-800  mx-auto">
      <HeroSection />
      <SocialProofSection />
      <Industries />
      <Features />
    </div>
  );
};

export default MainLayout;
