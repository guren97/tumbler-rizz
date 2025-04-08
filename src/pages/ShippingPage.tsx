import { motion } from 'framer-motion';
import { Truck, Clock, Shield, Package, MapPin } from 'lucide-react'; 
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function ShippingPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">
              On orders over Rs. 13,900
            </p>
          </div>
          
          <div className="text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              3-5 business days
            </p>
          </div>
          
          <div className="text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Secure Shipping</h3>
            <p className="text-muted-foreground">
              Fully insured
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-secondary rounded-lg">
                <Package className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Standard Shipping</h3>
                  <p className="text-muted-foreground text-sm">3-5 business days</p>
                  <p className="text-muted-foreground text-sm mt-1">Free on orders over Rs. 13,900</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-secondary rounded-lg">
                <Truck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Express Shipping</h3>
                  <p className="text-muted-foreground text-sm">1-2 business days</p>
                  <p className="text-muted-foreground text-sm mt-1">Rs. 4,500 flat rate</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Shipping Costs</h2>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-muted-foreground">
                Standard shipping is free on orders over Rs. 13,900. For orders under Rs. 13,900,
                standard shipping costs Rs. 1,800. Express shipping is available for
                Rs. 4,500 flat rate to all locations.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
            <div className="flex items-start space-x-3 p-4 bg-secondary rounded-lg">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-muted-foreground">
                  We ship to most countries worldwide. International shipping costs
                  vary by location and are calculated at checkout. Delivery times
                  typically range from 5-15 business days.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
            <p className="text-muted-foreground">
              Once your order ships, you will receive a tracking number via email
              to monitor your delivery status. You can also track your order through
              your account dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Shipping Protection</h2>
            <p className="text-muted-foreground">
              All orders are fully insured against loss or damage during transit.
              If your package arrives damaged, please contact our customer service
              team within 48 hours of delivery.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}