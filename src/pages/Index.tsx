import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SocialImpact from "@/components/sections/SocialImpact";
import Content from "@/components/sections/Content";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Cases />
      <WhyChooseUs />
      <SocialImpact />
      <Content />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
