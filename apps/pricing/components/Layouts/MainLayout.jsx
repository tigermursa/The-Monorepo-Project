import PricingCards from "../Sections/PricingPlans/PricingPlans";
import StartTrial from "../Sections/StartTrial/StartTrial";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <PricingCards />
      <StartTrial />
    </div>
  );
};

export default MainLayout;
