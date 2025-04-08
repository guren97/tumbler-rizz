import { motion } from 'framer-motion'; 
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function PrivacyPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto prose"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground">
            At Tumbler Rizz, we collect information that you provide directly to us, including when you
            create an account, make a purchase, subscribe to our newsletter, or contact us for support.
            This may include your name, email address, shipping address, payment information, and order history.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Process your orders and send order confirmations</li>
            <li>Ship your products to the correct address</li>
            <li>Send you updates about your order status</li>
            <li>Communicate with you about promotions and new products</li>
            <li>Improve our website and customer service</li>
            <li>Handle returns and warranty claims</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Shipping partners to deliver your orders</li>
            <li>Payment processors to handle transactions</li>
            <li>Service providers who help us operate our website</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our privacy policy or how we handle your data,
            please contact us at privacy@tumbler-rizz.shop.
          </p>
        </section>
      </motion.div>
    </div>
  );
}