import { motion } from "framer-motion";
import { Sun, Droplets, Leaf, Gauge, SunMedium, CloudSun, Cloud } from "lucide-react";
import { PlantData } from "@/data/samplePlant";

interface CareDashboardProps {
  plant: PlantData;
}

const CareDashboard = ({ plant }: CareDashboardProps) => {
  const getDifficultyConfig = (level: string) => {
    switch (level) {
      case "easy":
        return {
          emoji: "🌱",
          label: "Easy",
          color: "care-pill-easy",
          description: "Perfect for beginners",
        };
      case "medium":
        return {
          emoji: "🌿",
          label: "Medium",
          color: "care-pill-medium",
          description: "Some experience helpful",
        };
      case "hard":
        return {
          emoji: "🌳",
          label: "Expert",
          color: "care-pill-hard",
          description: "Requires dedication",
        };
      default:
        return {
          emoji: "🌱",
          label: "Easy",
          color: "care-pill-easy",
          description: "Perfect for beginners",
        };
    }
  };

  const getSunlightIcons = (level: string) => {
    switch (level) {
      case "low":
        return { icon: Cloud, count: 1, label: "Low Light", description: "Shade tolerant" };
      case "medium":
        return { icon: CloudSun, count: 2, label: "Medium Light", description: "Partial shade" };
      case "high":
        return { icon: Sun, count: 3, label: "Bright Light", description: "Full sun" };
      case "indirect":
        return { icon: SunMedium, count: 2, label: "Indirect Light", description: "Bright, indirect" };
      default:
        return { icon: SunMedium, count: 2, label: "Medium Light", description: "Partial shade" };
    }
  };

  const difficultyConfig = getDifficultyConfig(plant.difficulty);
  const sunlightConfig = getSunlightIcons(plant.sunlight_needs);

  const careCards = [
    {
      icon: Gauge,
      title: "Difficulty",
      value: difficultyConfig.label,
      subtitle: difficultyConfig.description,
      emoji: difficultyConfig.emoji,
      color: "bg-success/10 text-success",
    },
    {
      icon: sunlightConfig.icon,
      title: "Light Needs",
      value: sunlightConfig.label,
      subtitle: sunlightConfig.description,
      color: "bg-sunlight/20 text-sunlight-foreground",
      sunIcons: sunlightConfig.count,
    },
    {
      icon: Droplets,
      title: "Watering",
      value: plant.watering_frequency,
      subtitle: "Keep soil slightly moist",
      color: "bg-water/10 text-water",
    },
    {
      icon: Leaf,
      title: "Maintenance",
      value: plant.maintenance_level.charAt(0).toUpperCase() + plant.maintenance_level.slice(1),
      subtitle: "Low effort care",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Leaf className="w-4 h-4 text-primary" />
        </span>
        Care Dashboard
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {careCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-botanical p-5"
          >
            <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
              {card.emoji ? (
                <span className="text-2xl">{card.emoji}</span>
              ) : card.sunIcons ? (
                <div className="flex gap-0.5">
                  {Array.from({ length: card.sunIcons }).map((_, i) => (
                    <Sun key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
              ) : (
                <card.icon className="w-6 h-6" />
              )}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {card.title}
            </p>
            <p className="font-heading font-semibold text-foreground text-lg">
              {card.value}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CareDashboard;
