import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const { toast } = useToast();
  const [addingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setAddingToCart(true);
    try {
      addToCart(product);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add product to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <Link to={`/products/${product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group"
      >
        <Card className="overflow-hidden border-indigo-100 hover:border-indigo-200 transition-all hover:-translate-y-1">
          <div className="relative h-[300px] bg-indigo-50">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
            />
            {product.stock === 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </div>
              </div>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Low Stock
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                variant="secondary" 
                className="mb-4"
              >
                <Eye className="mr-2 h-4 w-4" />
                Quick View
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-indigo-600 font-medium capitalize">{product.category}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{product.rating.value}</span>
                <span className="text-xs text-muted-foreground">({product.rating.count})</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-900">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-indigo-600">Rs {product.price.toLocaleString()}</span>
                <p className="text-sm text-muted-foreground line-through">
                  Rs {(product.price * 1.2).toLocaleString()}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-indigo-200 hover:bg-indigo-50"
                onClick={handleAddToCart}
                disabled={addingToCart || product.stock === 0}
              >
                {addingToCart ? (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}