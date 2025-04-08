import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function OrderSuccessPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-primary/10 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you for choosing Tumbler Rizz. Your order has been confirmed.
          </p>
        </div>

        <div className="bg-secondary p-8 rounded-lg space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">What's Next?</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We'll send you a confirmation email with your order details and tracking information.
            </p>
            <p className="text-muted-foreground">
              Your order will be processed within 24 hours and shipped to your address.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Need Help?</h2>
          </div>
          
          <p className="text-muted-foreground">
            If you have any questions about your order, please contact our customer support at{' '}
            <a href="mailto:support@tumbler-rizz.shop" className="text-primary hover:underline">
              support@tumbler-rizz.shop
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto" variant="outline">
              <Home className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}