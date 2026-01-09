import { motion } from "framer-motion";
import { TrendingUp, Ruler, Flower, Shovel, FlaskConical, Sparkles } from "lucide-react";
import { PlantData } from "@/data/samplePlant";

interface CharacteristicsSectionProps {
  plant: PlantData;
}

const CharacteristicsSection = ({ plant }: CharacteristicsSectionProps) => {
  const getGrowthRateWidth = (rate: string) => {
    switch (rate) {
      case "slow":
        return "33%";
      case "moderate":
        return "66%";
      case "fast":
        return "100%";
      default:
        return "50%";
    }
  };

  const characteristics = [
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: plant.growth_rate.charAt(0).toUpperCase() + plant.growth_rate.slice(1),
      hasProgress: true,
      progressWidth: getGrowthRateWidth(plant.growth_rate),
    },
    {
      icon: Ruler,
      label: "Max Height",
      value: plant.max_height,
    },
    {
      icon: Flower,
      label: "Bloom Season",
      value: plant.bloom_season,
    },
    {
      icon: Shovel,
      label: "Soil Type",
      value: plant.soil_type,
    },
    {
      icon: FlaskConical,
      label: "Soil pH",
      value: plant.soil_ph,
    },
    {
      icon: Sparkles,
      label: "Fertilizer",
      value: plant.fertilizer,
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
        <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <Ruler className="w-4 h-4 text-accent" />
        </span>
        Characteristics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characteristics.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="quick-fact"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
              <p className="font-medium text-foreground truncate">{item.value}</p>
              {item.hasProgress && (
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.progressWidth }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Propagation Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 p-5 card-botanical"
      >
        <h3 className="font-heading font-medium text-foreground mb-3">Propagation Methods</h3>
        <div className="flex flex-wrap gap-2">
          {plant.propagation_method.map((method) => (
            <span
              key={method}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {method}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CharacteristicsSection;
