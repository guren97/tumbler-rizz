import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, ArrowLeft, ShoppingCart, CheckCircle2, Droplet, Thermometer, Droplets } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast'; 
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const addToCart = useStore((state) => state.addToCart);
  const { toast } = useToast();
  const [addingToCart, setAddingToCart] = useState(false);
  useScrollToTop();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = async () => {
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/products" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/50 to-transparent shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {product.stock === 0 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
                </div>
              )}
             
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="text-base px-4 py-1 bg-indigo-50 text-indigo-600 border-indigo-200 mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 text-indigo-900">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{product.rating.value}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-indigo-600">Rs {product.price.toLocaleString()}</p>
                <p className="text-muted-foreground line-through text-lg">
                 Rs {(product.price * 1.2).toLocaleString()}
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700"
                onClick={handleAddToCart}
                disabled={addingToCart || product.stock === 0}
              >
                {addingToCart ? (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5 animate-spin" />
                    Adding to Cart...
                  </>
                ) : product.stock === 0 ? (
                  'Out of Stock'
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-md transition-shadow border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 rounded-full">
                    <Truck className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-900">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">On orders over Rs5000</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 rounded-full">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-900">Secure Payment</p>
                    <p className="text-sm text-muted-foreground">100% secure checkout</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Thermometer className="h-5 w-5 text-indigo-600" />,
                text: "24-hour temperature retention"
              },
              {
                icon: <Droplets className="h-5 w-5 text-indigo-600" />,
                text: "Leak-proof design"
              },
              {
                icon: <Droplet className="h-5 w-5 text-indigo-600" />,
                text: "BPA-free materials"
              },
              {
                icon: <Shield className="h-5 w-5 text-indigo-600" />,
                text: "2-year warranty"
              },
              {
                icon: <Truck className="h-5 w-5 text-indigo-600" />,
                text: "Free shipping on orders over Rs5000"
              },
              {
                icon: <CheckCircle2 className="h-5 w-5 text-indigo-600" />,
                text: "Professional customer support"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 rounded-full">
                    {feature.icon}
                  </div>
                  <p className="font-medium text-indigo-900">{feature.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-indigo-900">Related Products</h2>
            <Button variant="outline" asChild className="border-indigo-200 hover:bg-indigo-50">
              <Link to="/products" className="flex items-center gap-2 text-indigo-600">
                View All Products
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/products/${relatedProduct.id}`}
                  className="block group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full border-indigo-100">
                    <div className="aspect-square relative bg-gradient-to-b from-indigo-50/50 to-transparent">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      {relatedProduct.stock === 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-600 border-indigo-200">
                          {relatedProduct.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2 text-indigo-900 group-hover:text-indigo-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm font-medium">{relatedProduct.rating.value}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({relatedProduct.rating.count} reviews)
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-indigo-600">
                         Rs {relatedProduct.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground line-through">
                          Rs {(relatedProduct.price * 1.2).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 