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

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-heading font-bold text-2xl">
                SeedSphere<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your comprehensive guide to houseplants. Discover, learn, and grow with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">All Plants</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Care Guides</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Plant Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shop Plants</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Beginner's Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seasonal Tips</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Get weekly plant care tips and exclusive content.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <button className="px-4 py-2 rounded-full bg-primary-foreground text-primary font-medium text-sm hover:bg-primary-foreground/90 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
