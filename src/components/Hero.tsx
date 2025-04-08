import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0 rounded-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl font-bold mb-6">Transform Your Fitness Journey</h1>
          <p className="text-xl mb-8">
            Premium gym equipment for professional athletes and fitness enthusiasts.
            Build your perfect workout space with GymGear.
          </p>
          <Link to="/products" >
          <Button size="lg" className="group   bg-white text-black hover:bg-white/80">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}