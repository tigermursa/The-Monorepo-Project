import Features from "../Sections/Features/Features";
import PricingCards from "../Sections/PricingPlans/PricingPlans";
import StartTrial from "../Sections/StartTrial/StartTrial";
import Container from "./Containter";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <PricingCards />
      </Container>
      <Container>
        <StartTrial />
      </Container>
      <Features />
    </div>
  );
};

export default MainLayout;
