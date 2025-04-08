import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { 
  Shield, 
  Lock, 
  Mail, 
  CreditCard, 
  Share2,  
  Eye,
  Bell
} from 'lucide-react';

export function PrivacyPolicyPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 2024
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-secondary p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
            </div>
            <p className="text-muted-foreground">
              At Tumbler Rizz, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Information We Collect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Personal Information</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Name and contact details</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Shipping address</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Order Information</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Order history</li>
                  <li>• Payment details</li>
                  <li>• Shipping preferences</li>
                  <li>• Product preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">How We Use Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Primary Uses</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Process your orders</li>
                  <li>• Send order updates</li>
                  <li>• Provide customer support</li>
                  <li>• Send marketing communications</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Secondary Uses</h4>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Improve our products</li>
                  <li>• Analyze website usage</li>
                  <li>• Personalize your experience</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Data Protection</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Security Measures</h4>
              </div>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security assessments.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Your Rights</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Access and Control</h4>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Request data deletion</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Export your data</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Privacy Inquiries</h4>
              </div>
              <p className="text-muted-foreground">
                For any questions about our privacy policy or data practices, please contact us at{' '}
                <a href="mailto:privacy@tumbler-rizz.shop" className="text-primary hover:underline">
                  privacy@tumbler-rizz.shop
                </a>
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 