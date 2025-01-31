// const HomePage = dynamic(() => import("home/HomePage"), {
//   ssr: false,
//   loading: () => <p>Loading HomePage...</p>,
// });

import MainLayout from "@/components/Layouts/MainLayout";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

export default function Pricing() {
  return (
    <div>
      <div>
        <Navbar />
        <MainLayout />
        <Footer />
      </div>
    </div>
  );
}

// Keep button styles...
