import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import GallerySection from "@/components/GallerySection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FAQChatbot from "@/components/FAQChatbot";
import VideoSection from "@/components/VideoSection";
import SaleBanner from "@/components/SaleBanner";
import SocialFeed from "@/components/SocialFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <StatsSection />
      <SaleBanner />
      <ProductsSection />
      <ParallaxBanner />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <SocialFeed />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <FAQChatbot />
    </div>
  );
};

export default Index;
