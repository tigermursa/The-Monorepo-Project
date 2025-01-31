import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import MainLayout from "@/components/Layouts/MainLayout";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

// const PricingPage = dynamic(() => import("pricing/PricingPage"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <MainLayout /> */}
      {/* <Footer /> */}
    </div>
  );
}
