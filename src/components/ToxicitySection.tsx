import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Cat, Dog, Baby, ChevronDown, ChevronUp, Bug, Stethoscope } from "lucide-react";
import { useState } from "react";
import { PlantData } from "@/data/samplePlant";

interface ToxicitySectionProps {
  plant: PlantData;
}

const ToxicitySection = ({ plant }: ToxicitySectionProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toxicityItems = [
    { label: "Cats", icon: Cat, isToxic: plant.toxic_to_cats },
    { label: "Dogs", icon: Dog, isToxic: plant.toxic_to_dogs },
    { label: "Humans", icon: Baby, isToxic: plant.toxic_to_humans },
  ];

  const hasToxicity = plant.toxic_to_cats || plant.toxic_to_dogs || plant.toxic_to_humans;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${hasToxicity ? 'bg-destructive/10' : 'bg-success/10'}`}>
          {hasToxicity ? (
            <AlertTriangle className="w-4 h-4 text-destructive" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-success" />
          )}
        </span>
        Health & Safety
      </h2>

      {/* Toxicity Warning Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className={`p-6 rounded-2xl border-2 ${
          hasToxicity ? "toxicity-danger" : "toxicity-safe"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
            hasToxicity ? "bg-destructive/20" : "bg-success/20"
          }`}>
            {hasToxicity ? (
              <AlertTriangle className="w-7 h-7 text-destructive" />
            ) : (
              <ShieldCheck className="w-7 h-7 text-success" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`font-heading font-semibold text-lg ${
              hasToxicity ? "text-destructive" : "text-success"
            }`}>
              {hasToxicity ? "Toxic Plant - Handle with Care" : "Safe for All"}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              {hasToxicity
                ? "This plant may cause irritation if ingested. Keep away from pets and children."
                : "This plant is safe for humans and pets."}
            </p>
          </div>
        </div>

        {/* Toxicity Badges */}
        <div className="flex flex-wrap gap-3 mt-5">
          {toxicityItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                item.isToxic
                  ? "bg-destructive/10 text-destructive"
                  : "bg-success/10 text-success"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
              <span className={`w-2 h-2 rounded-full ${item.isToxic ? "bg-destructive" : "bg-success"}`} />
            </div>
          ))}
        </div>

        {/* Expandable Details */}
        {hasToxicity && plant.toxicity_details && (
          <div className="mt-5 pt-5 border-t border-border/50">
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isDetailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {isDetailsOpen ? "Hide details" : "View toxicity details"}
            </button>
            {isDetailsOpen && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 text-sm text-muted-foreground leading-relaxed"
              >
                {plant.toxicity_details}
              </motion.p>
            )}
          </div>
        )}
      </motion.div>

      {/* Pests & Diseases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="card-botanical p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Bug className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-medium text-foreground">Common Pests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {plant.common_pests.map((pest) => (
              <span
                key={pest}
                className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
              >
                {pest}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-botanical p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-heading font-medium text-foreground">Common Diseases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {plant.common_diseases.map((disease) => (
              <span
                key={disease}
                className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
              >
                {disease}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToxicitySection;
