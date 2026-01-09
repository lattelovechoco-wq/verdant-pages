import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CareDashboard from "@/components/CareDashboard";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import ToxicitySection from "@/components/ToxicitySection";
import SpecialFeatureSection from "@/components/SpecialFeatureSection";
import QuickFactsSidebar from "@/components/QuickFactsSidebar";
import Footer from "@/components/Footer";
import { samplePlant } from "@/data/samplePlant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background leaf-pattern">
      <Header />
      
      <main>
        <HeroSection plant={samplePlant} />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4">
              <CareDashboard plant={samplePlant} />
              
              <div className="section-divider my-8" />
              
              <CharacteristicsSection plant={samplePlant} />
              
              <div className="section-divider my-8" />
              
              <ToxicitySection plant={samplePlant} />
              
              <div className="section-divider my-8" />
              
              <SpecialFeatureSection plant={samplePlant} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <QuickFactsSidebar plant={samplePlant} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
