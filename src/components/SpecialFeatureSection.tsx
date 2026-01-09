import { motion } from "framer-motion";
import { Sparkles, Lightbulb } from "lucide-react";
import { PlantData } from "@/data/samplePlant";

interface SpecialFeatureSectionProps {
  plant: PlantData;
}

const SpecialFeatureSection = ({ plant }: SpecialFeatureSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-sunlight/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-sunlight-foreground" />
        </span>
        Did You Know?
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-accent/5 p-8"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sunlight/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-sunlight-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                Special Feature
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                "{plant.special_feature}"
              </p>
            </div>
          </div>
        </div>

        {/* Leaf Pattern Decoration */}
        <svg
          className="absolute bottom-0 right-0 w-40 h-40 opacity-5"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 5C42 17 25 20 25 35s17 20 25 20 25-5 25-20S58 17 50 5z" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default SpecialFeatureSection;
