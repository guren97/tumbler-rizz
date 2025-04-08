import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card'; 
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { 
  CreditCard,  
  User, 
  MapPin,
  Package,
  Shield
} from 'lucide-react';

import easypaisa from '@/assets/images/paymentlogo/easypaisa.png';
import jazzcash from '@/assets/images/paymentlogo/jazzcash-card.png'; 
import jazzcashMobile from '@/assets/images/paymentlogo/jazzcash-mobile.png';

const checkoutSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  postalCode: z.string().min(5, 'Please enter a valid postal code'),
  country: z.string().min(2, 'Please enter a valid country'),
  paymentMethod: z.enum(['easypaisa', 'jazzcash', 'jazzcashMobile'], {
    required_error: 'Please select a payment method',
  }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useStore(); 
  const { toast } = useToast();
  useScrollToTop();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      country: 'Pakistan',
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      console.log('Order data:', data);
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. We'll send you an email confirmation shortly.",
      });
      navigate('/order-success');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem placing your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <p className="text-muted-foreground">
            Complete your purchase securely
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Contact Information</h2>
                  </div>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Shipping Address</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter postal code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Payment Method</h2>
                  </div>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-4"
                          >
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-primary/5 transition-colors">
                              <RadioGroupItem value="easypaisa" id="easypaisa" />
                              <img src={easypaisa} alt="easypaisa" className="w-14 h-10 rounded-md" />
                              <Label htmlFor="easypaisa">EasyPaisa</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-primary/5 transition-colors">
                              <RadioGroupItem value="jazzcash" id="jazzcash" />
                              <img src={jazzcash} alt="jazzcash" className="w-8 h-8 rounded-md" />
                              <Label htmlFor="jazzcash">JazzCash</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-primary/5 transition-colors">
                              <RadioGroupItem value="jazzcashMobile" id="jazzcashMobile" />
                              <img src={jazzcashMobile} alt="jazzcash" className="w-8 h-8 rounded-md" />
                              <Label htmlFor="jazzcashMobile">JazzCash Mobile</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Place Order
                </Button>
              </form>
            </Form>
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
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className='flex items-center gap-4'>
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">Rs {item.price.toLocaleString()}</p>
                  </div>
                ))}
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
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Secure Checkout</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your payment information is encrypted and secure. We never store your full card details.
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}