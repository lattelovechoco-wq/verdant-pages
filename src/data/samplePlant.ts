// Sample plant data structure matching MongoDB schema
export interface PlantData {
  _id: string;
  common_name: string;
  scientific_name: string;
  short_description: string;
  long_description: string;
  plant_type: string[];
  growth_rate: 'slow' | 'moderate' | 'fast';
  max_height: string;
  bloom_season: string;
  maintenance_level: 'easy' | 'medium' | 'hard';
  sunlight_needs: 'low' | 'medium' | 'high' | 'indirect';
  watering_frequency: string;
  soil_type: string;
  soil_ph: string;
  fertilizer: string;
  propagation_method: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  toxic_to_cats: boolean;
  toxic_to_dogs: boolean;
  toxic_to_humans: boolean;
  toxicity_details: string;
  common_pests: string[];
  common_diseases: string[];
  special_feature: string;
  images: string[];
}

export const samplePlant: PlantData = {
  _id: "monstera001",
  common_name: "Monstera Deliciosa",
  scientific_name: "Monstera deliciosa",
  short_description: "The iconic Swiss Cheese Plant, beloved for its dramatic split leaves and tropical vibes. A statement plant that brings the jungle indoors.",
  long_description: "Native to the tropical rainforests of Central America, the Monstera deliciosa has become one of the most recognizable houseplants in the world. Its large, glossy leaves develop their signature splits and holes (called fenestrations) as the plant matures, creating a stunning architectural display. In its natural habitat, this climbing vine can reach heights of 60 feet or more, attaching itself to trees with its aerial roots. As a houseplant, it brings a touch of the tropics to any space and is surprisingly easy to care for.",
  plant_type: ["Tropical", "Climbing", "Foliage", "Indoor"],
  growth_rate: "moderate",
  max_height: "10-15 feet indoors",
  bloom_season: "Rarely blooms indoors",
  maintenance_level: "easy",
  sunlight_needs: "indirect",
  watering_frequency: "Every 1-2 weeks",
  soil_type: "Well-draining potting mix",
  soil_ph: "5.5 - 7.0",
  fertilizer: "Balanced liquid fertilizer monthly during growing season",
  propagation_method: ["Stem cuttings", "Air layering", "Division"],
  difficulty: "easy",
  toxic_to_cats: true,
  toxic_to_dogs: true,
  toxic_to_humans: true,
  toxicity_details: "Contains calcium oxalate crystals which can cause mouth and throat irritation, drooling, and difficulty swallowing if ingested. Keep away from curious pets and children.",
  common_pests: ["Spider mites", "Mealybugs", "Scale", "Thrips"],
  common_diseases: ["Root rot", "Leaf spot", "Bacterial wilt"],
  special_feature: "The famous fenestrations (holes and splits) in mature leaves aren't just beautiful—they're thought to help the plant survive heavy rains and high winds in its native rainforest habitat.",
  images: []
};
