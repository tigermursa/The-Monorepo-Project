import AppointmentStacks from "../Sections/AppointmentStacks/AppointmentStacks";
import Features from "../Sections/Features/Features";
import HeroSection from "../Sections/HeroSection/HeroSection";
import Industries from "../Sections/Industries/Industries";
import SocialProofSection from "../Sections/SocialProofSection/SocialProofSection";
import Container from "./Containter";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <HeroSection />
      </Container>
      <Container>
        <SocialProofSection />
      </Container>
      <Container>
        <Industries />
      </Container>
      <Features />
      <Container>
        <AppointmentStacks />
      </Container>
    </div>
  );
};

export default MainLayout;
