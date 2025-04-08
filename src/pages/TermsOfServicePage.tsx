import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { 
  Scale, 
  ShoppingBag, 
  CreditCard, 
  Shield, 
  RefreshCw, 
  AlertCircle,
  Package,
  Mail
} from 'lucide-react';

export function TermsOfServicePage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 2024
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-secondary p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            </div>
            <p className="text-muted-foreground">
              By accessing and using Tumbler Rizz, you agree to be bound by these Terms of Service. Please read them carefully before making any purchases.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Product Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Product Descriptions</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• All products are described as accurately as possible</li>
                  <li>• Colors may vary slightly from images</li>
                  <li>• Product specifications are subject to change</li>
                  <li>• Custom designs may have slight variations</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Pricing & Availability</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Prices are in Pakistani Rupees (PKR)</li>
                  <li>• All prices include applicable taxes</li>
                  <li>• Products are subject to availability</li>
                  <li>• We reserve the right to modify prices</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Order & Payment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Payment Terms</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Secure payment processing</li>
                  <li>• Multiple payment methods accepted</li>
                  <li>• Payment verification required</li>
                  <li>• Currency conversion may apply</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Order Processing</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Orders processed within 24 hours</li>
                  <li>• Custom orders may take longer</li>
                  <li>• Order confirmation sent via email</li>
                  <li>• Tracking information provided</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Returns & Warranty</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Return Policy</h4>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• 30-day return window for unused items</li>
                <li>• Original packaging required</li>
                <li>• Custom items may not be eligible</li>
                <li>• Return shipping costs may apply</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Important Notices</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Additional Terms</h4>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• We reserve the right to refuse service</li>
                <li>• Prices and availability may change</li>
                <li>• Custom orders are non-refundable</li>
                <li>• International shipping restrictions apply</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Questions?</h4>
              </div>
              <p className="text-muted-foreground">
                For any questions about our terms of service, please contact us at{' '}
                <a href="mailto:legal@tumbler-rizz.shop" className="text-primary hover:underline">
                  legal@tumbler-rizz.shop
                </a>
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 