import { motion } from "framer-motion";
import { Heart, Share2, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlantData } from "@/data/samplePlant";
import monsteraHero from "@/assets/monstera-hero.jpg";
import monsteraDetail from "@/assets/monstera-detail.jpg";
import monsteraPropagation from "@/assets/monstera-propagation.jpg";

interface HeroSectionProps {
  plant: PlantData;
}

const HeroSection = ({ plant }: HeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const images = [monsteraHero, monsteraDetail, monsteraPropagation];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative pt-20 md:pt-24">
      {/* Image Gallery */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImage]}
            alt={plant.common_name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage
                  ? "w-8 bg-primary"
                  : "bg-card/60 hover:bg-card"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Gallery */}
        <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
          {images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`gallery-thumb ${
                index === currentImage ? "gallery-thumb-active" : ""
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Plant Title Section */}
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl p-6 md:p-8 shadow-botanical-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {plant.plant_type.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
                {plant.common_name}
              </h1>
              <p className="text-lg text-muted-foreground italic font-light">
                {plant.scientific_name}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full w-12 h-12 transition-all ${
                  isFavorited ? "bg-destructive/10 border-destructive text-destructive" : ""
                }`}
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full w-12 h-12 transition-all ${
                  isBookmarked ? "bg-primary/10 border-primary text-primary" : ""
                }`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
            {plant.short_description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
