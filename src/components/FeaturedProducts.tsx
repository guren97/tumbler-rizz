import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import type { Product } from '@/data/products';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
}

export function FeaturedProducts({ title, products }: FeaturedProductsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}