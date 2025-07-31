import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/light/Hero";
import Services from "@/components/sections/light/Services";
import Cases from "@/components/sections/light/Cases";
import WhyChooseUs from "@/components/sections/light/WhyChooseUs";
import SocialImpact from "@/components/sections/light/SocialImpact";
import Content from "@/components/sections/light/Content";
import FAQ from "@/components/sections/light/FAQ";
import Footer from "@/components/sections/light/Footer";

const Light = () => {
  return (
    <div className="min-h-screen bg-slate-50">
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

export default Light;