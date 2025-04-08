import { motion } from 'framer-motion'; 
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function TermsPage() {
  useScrollToTop();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto prose"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using Tumbler Rizz's website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do not agree
            with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <p className="text-muted-foreground">
            We strive to display accurate colors and images of our products. However,
            we cannot guarantee that your computer monitor's display of any color will
            be accurate. All products are subject to availability, and we reserve the
            right to discontinue any products at any time for any reason.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>
          <p className="text-muted-foreground">
            All prices are subject to change without notice. We reserve the right to
            modify or discontinue any product without notice. We shall not be liable
            to you or any third party for any modification, price change, suspension,
            or discontinuance of any product.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Warranty and Returns</h2>
          <p className="text-muted-foreground">
            Our tumblers come with a limited warranty against manufacturing defects.
            We offer a 30-day return window for unused items in their original packaging.
            Custom or personalized items may not be eligible for return.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily download one copy of the materials
            on Tumbler Rizz's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this
            license you may not:
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Tumbler Rizz's website are provided on an 'as is' basis.
            Tumbler Rizz makes no warranties, expressed or implied, and hereby disclaims
            and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular
            purpose, or non-infringement of intellectual property or other violation
            of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Tumbler Rizz or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or
            due to business interruption) arising out of the use or inability to use
            the materials on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us
            at legal@tumbler-rizz.shop.
          </p>
        </section>
      </motion.div>
    </div>
  );
}