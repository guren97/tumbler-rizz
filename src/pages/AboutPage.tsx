import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { 
  Droplet, 
  Shield, 
  Heart,  
  Leaf, 
  Award, 
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export function AboutPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Tumbler Rizz</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're passionate about creating premium tumblers that combine style, functionality, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-secondary p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Droplet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              To provide high-quality, stylish tumblers that help people stay hydrated while making a positive impact on the environment.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Our Values</h3>
            </div>
            <p className="text-muted-foreground">
              Quality, sustainability, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Tumbler Rizz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Crafted with the finest materials for durability and style
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Sustainable materials and responsible manufacturing
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Innovative Design</h3>
              <p className="text-muted-foreground">
                Modern aesthetics with practical functionality
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Story</h2>
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-muted-foreground mb-4">
              Founded in 2024, Tumbler Rizz emerged from a simple idea: create tumblers that people love to use and show off. 
              We started with a small collection of premium tumblers and have grown into a trusted brand known for quality and style.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to serve customers worldwide, helping them stay hydrated in style while making a positive impact on the environment.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Follow us on social media for the latest updates and exclusive offers
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}