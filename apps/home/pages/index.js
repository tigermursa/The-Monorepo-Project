import HeroSection from "@/components/HeroSection/HeroSection";
import MainLayout from "@/components/Layouts/MainLayout";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";

// const PricingPage = dynamic(() => import("pricing/PricingPage"), {
//   ssr: false,
// });

export default function Home({ Children }) {
  return (
    <div>
      <Navbar />
      <MainLayout />
      <Footer />
    </div>
  );
}
