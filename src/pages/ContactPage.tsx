import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  Mail, 
  Loader2, 
  MessageSquare, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Instagram,
  Facebook,
  Twitter,
  ShoppingBag,
  HelpCircle
} from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useToast } from '@/components/ui/use-toast';

export function ContactPage() {
  useScrollToTop();
  const { toast } = useToast();
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsModalOpen(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our tumblers? Need help with your order? Our team is here to help!
            Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Order Support</h3>
            </div>
            <p className="text-muted-foreground">
              Need help with your order? Our order support team is available to assist you.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Product Questions</h3>
            </div>
            <p className="text-muted-foreground">
              Have questions about our tumblers? Our product experts are here to help.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Warranty Support</h3>
            </div>
            <p className="text-muted-foreground">
              Questions about our warranty or need to file a claim? We've got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">  
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@tumbler-rizz.shop</p>
                  </div>
                </div> 
              
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md rounded-lg shadow-xl border-none overflow-hidden">
          <DialogHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="inline-block">📬</span>
              Message Received!
            </DialogTitle>
            <DialogDescription className="text-indigo-100 mt-2 text-base">
              Thank you for contacting Tumbler Rizz!
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 bg-white">
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold text-indigo-900">Message Confirmation</span>
                </div>
                <p className="text-sm text-indigo-700">
                  Your message has been successfully received and is being reviewed by our team.
                </p>
              </div>

              <div>
                <p className="text-gray-600 mb-3">
                  Here's what to expect:
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                    Confirmation email shortly
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    Response within 24-48 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-indigo-500" />
                    Expert support from our team
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">Priority Support</span>
                </div>
                <p className="text-sm text-purple-700">
                  Our team is committed to providing you with the best possible support and will address your inquiry as soon as possible.
                </p>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Got it!
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}