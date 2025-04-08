import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Clock, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';


// Import hero images
import hero1 from '@/assets/images/hero-images/hero_image.webp';
import hero2 from '@/assets/images/hero-images/hero_image_2.webp';
import hero3 from '@/assets/images/hero-images/hero_image_3.webp';

const heroImages = [
  {
    src: hero1,
    title: "Premium Insulated Tumblers",
    description: "Keep your drinks at the perfect temperature",
    cta: "Shop Now",
    features: ["24-Hour Insulation", "Leak-Proof Design", "BPA-Free Materials"],
    price: "Starting from Rs 1,999",
    href: "/products"
  },
  {
    src: hero2,
    title: "Sports Water Bottles",
    description: "Perfect for your active lifestyle",
    cta: "Explore Collection",
    features: ["Quick-Fill Design", "Anti-Slip Grip", "Easy to Clean"],
    price: "Starting from Rs 1,499",
    href: "/products"
  },
  {
    src: hero3,
    title: "Customizable Tumblers",
    description: "Create your own design",
    cta: "Design Now",
    features: ["Customizable Design", "Personalized Logo", "BPA-Free Materials"],
    price: "Starting from Rs 2,499",
    href: "/products"
  }   
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-900/70 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white/90 text-sm">4.9/5 Rating</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4 text-white/90" />
                      <span className="text-white/90 text-sm">Limited Time Offer</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {heroImages[currentIndex].title}
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    {heroImages[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {heroImages[currentIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Shield className="w-4 h-4 text-white/90" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <Link to={heroImages[currentIndex].href} className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                      {heroImages[currentIndex].cta}         
                    </Link>
                    <span className="text-white/90 text-lg font-semibold">  
                      {heroImages[currentIndex].price}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Truck className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">Free Shipping</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/90">✓ Free delivery on orders over Rs 5,000</p>
                      <p className="text-white/90">✓ 2-3 business days delivery</p>
                      <p className="text-white/90">✓ 30-day money-back guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Dots Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
} 