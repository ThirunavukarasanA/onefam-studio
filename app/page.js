import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/HomeComponents/AboutSection";
import ClientsSection from "@/components/HomeComponents/ClientsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClientsSection />
    </>
  );
}
