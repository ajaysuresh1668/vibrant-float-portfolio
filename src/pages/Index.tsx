import FloatingBlobs from "@/components/FloatingBlobs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LoginSection from "@/components/LoginSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
