import MainLayout from "@/components/Layouts/MainLayout";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* My main layout to maintain full project more organized  */}
      <MainLayout />
      <Footer />
    </div>
  );
}
