import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'; 
import { Star,  Sparkles, Shield, Thermometer, Droplets, Zap, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ImageSlider } from '@/components/ImageSlider';
import { ProductCard } from '@/components/ProductCard';
import { Newsletter } from '@/components/Newsletter';

const features = [
  {
    icon: <Thermometer className="w-6 h-6 text-indigo-500" />,
    title: "24-Hour Insulation",
    description: "Keep drinks hot or cold for up to 24 hours"
  },
  {
    icon: <Droplets className="w-6 h-6 text-indigo-500" />,
    title: "Leak-Proof Design",
    description: "Spill-free lids for worry-free carrying"
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "Quick Delivery",
    description: "Free shipping on orders over ₹5000"
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: "Quality Guaranteed",
    description: "BPA-free materials and 2-year warranty"
  }
];

const categories = [
  {
    name: "Insulated Tumblers",
    description: "Perfect temperature retention",
    image: products.find(p => p.category === 'insulated')?.image || '',
    link: "/products?category=insulated"
  },
  {
    name: "Sports Bottles",
    description: "Active lifestyle companion",
    image: products.find(p => p.category === 'sports')?.image || '',
    link: "/products?category=sports"
  },
  {
    name: "Travel Mugs",
    description: "Commute in style",
    image: products.find(p => p.category === 'travel')?.image || '',
    link: "/products?category=travel"
  }
];

export function HomePage() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageSlider />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-indigo-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-indigo-500" />
              <span className="text-indigo-600 font-medium">Most Popular</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular tumblers, loved by customers for their quality and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Categories Section */}
       <section className="py-16 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect tumbler for your lifestyle. From insulated tumblers for your daily coffee to sports bottles for your workouts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.link}>
                  <Card className="overflow-hidden group border-indigo-100 hover:border-indigo-200 transition-all hover:-translate-y-1">
                    <div className="relative h-[300px] bg-gradient-to-b from-indigo-50/50 to-transparent">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" className="mb-4">Explore Collection</Button>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-indigo-900">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-purple-600 font-medium">Just Launched</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our latest collection of premium tumblers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and insider updates.
            </p>
          </div>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}