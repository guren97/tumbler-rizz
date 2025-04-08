import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Droplet, 
  Shield, 
  Truck, 
  CreditCard, 
  RefreshCw, 
  Package,
  Thermometer,
  Sparkles
} from 'lucide-react';

export function FAQsPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our tumblers, shipping, and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Droplet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Product Care</h3>
            </div>
            <p className="text-muted-foreground">
              Learn how to maintain and care for your tumbler to keep it looking great.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Warranty & Support</h3>
            </div>
            <p className="text-muted-foreground">
              Information about our warranty coverage and customer support services.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                How long do your tumblers keep drinks hot/cold?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Our tumblers are designed to keep hot drinks hot for up to 12 hours and cold drinks cold for up to 24 hours. The exact duration may vary depending on the model and environmental conditions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                What materials are your tumblers made from?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Our tumblers are made from high-quality stainless steel with a durable powder-coated finish. The lids are made from BPA-free materials, ensuring safe and long-lasting use.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                What is your shipping policy?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                We offer free shipping on orders over Rs. 13,900. Standard shipping takes 3-5 business days, while express shipping is available for Rs. 4,500 with 1-2 business day delivery.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                What payment methods do you accept?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                What is your return policy?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                We offer a 30-day return window for unused items in their original packaging. Custom or personalized items may not be eligible for return. Please contact our customer service team to initiate a return.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Do you offer custom designs or personalization?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes! We offer custom designs and personalization options for our tumblers. You can add names, initials, or custom artwork. Please contact our design team for more information about customization options.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? Our customer service team is here to help! Contact us at{' '}
            <a href="mailto:info@tumbler-rizz.shop" className="text-primary hover:underline">
              info@tumbler-rizz.shop
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
} 