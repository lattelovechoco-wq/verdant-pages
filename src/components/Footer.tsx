import { motion } from "framer-motion";
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const relatedPlants = [
  "Philodendron Brasil",
  "Pothos Golden",
  "Bird of Paradise",
  "Fiddle Leaf Fig",
  "Rubber Plant",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      {/* Related Plants Section */}
      <div className="container mx-auto px-4 py-12 border-b border-primary-foreground/10">
        <h3 className="font-heading text-xl font-semibold mb-6">
          You Might Also Like
        </h3>
        <div className="flex flex-wrap gap-3">
          {relatedPlants.map((plant) => (
            <motion.button
              key={plant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm font-medium transition-colors"
            >
              {plant}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 SeedSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
