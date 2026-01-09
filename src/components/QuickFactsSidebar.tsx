import { motion } from "framer-motion";
import { Sun, Droplets, Gauge, Ruler, Leaf, Calendar, Bell, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlantData } from "@/data/samplePlant";
import { toast } from "sonner";

interface QuickFactsSidebarProps {
  plant: PlantData;
}

const QuickFactsSidebar = ({ plant }: QuickFactsSidebarProps) => {
  const quickFacts = [
    { icon: Gauge, label: "Difficulty", value: plant.difficulty },
    { icon: Sun, label: "Light", value: plant.sunlight_needs },
    { icon: Droplets, label: "Water", value: plant.watering_frequency },
    { icon: Leaf, label: "Maintenance", value: plant.maintenance_level },
    { icon: Ruler, label: "Max Height", value: plant.max_height },
    { icon: Calendar, label: "Growth", value: plant.growth_rate },
  ];

  const handleSetReminder = () => {
    toast.success("Reminder feature coming soon!", {
      description: "You'll be able to set watering and care reminders.",
    });
  };

  const handlePrint = () => {
    toast.success("Preparing care guide...", {
      description: "Your printable care sheet will be ready shortly.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: plant.common_name,
        text: plant.short_description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="lg:sticky lg:top-24"
    >
      <div className="card-botanical p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
          Quick Facts
        </h3>

        <div className="space-y-3">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <fact.icon className="w-4 h-4" />
                <span className="text-sm">{fact.label}</span>
              </div>
              <span className="text-sm font-medium text-foreground capitalize">
                {fact.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Button
            onClick={handleSetReminder}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Bell className="w-4 h-4 mr-2" />
            Set Care Reminder
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePrint}
              className="flex-1"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Guide
            </Button>
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex-1"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Plant Type Tags */}
      <div className="card-botanical p-6 mt-4">
        <h3 className="font-heading font-semibold text-foreground mb-3">
          Plant Type
        </h3>
        <div className="flex flex-wrap gap-2">
          {plant.plant_type.map((type) => (
            <span
              key={type}
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 cursor-pointer transition-colors"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default QuickFactsSidebar;
