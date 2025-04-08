import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag,
  Package,
  Truck,
  Shield,
  ArrowRight
} from 'lucide-react';

export function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useStore();
  useScrollToTop();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-secondary p-8 rounded-lg">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any tumblers to your cart yet.
            </p>
            <Button onClick={() => navigate('/products')}>
              Browse Products
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-4">Rs {item.price.toLocaleString()}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>Rs {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rs {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Free Shipping</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Free shipping on all orders over Rs. 13,900
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Secure Checkout</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your payment information is encrypted and secure
              </p>
            </Card>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}