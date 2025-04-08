import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Gift, Truck, Star, Shield, Percent, Clock, Heart, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail('');
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
    <>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Join Our Tumbler Community</h3>
          <p className="text-gray-600">
            Get exclusive access to new collections, special offers, and insider updates.
            Plus, receive a 10% discount on your first order!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/80 border-indigo-200  px-6 text-indigo-900 placeholder:text-indigo-400 focus:bg-white focus:border-indigo-300"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 text-white hover:bg-indigo-700 min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Tumbler Rizz.
        </p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md rounded-lg shadow-xl border-none overflow-hidden">
          <DialogHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="inline-block">✨</span>
              Welcome to Tumbler Rizz!
            </DialogTitle>
            <DialogDescription className="text-indigo-100 mt-2 text-base">
              Thank you for joining our community!
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 bg-white">
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold text-indigo-900">Special Welcome Offer</span>
                </div>
                <p className="text-sm text-indigo-700">
                  Use code <span className="font-mono font-semibold">WELCOME10</span> for 10% off your first order!
                </p>
              </div>

              <div>
                <p className="text-gray-600 mb-3">
                  You're now subscribed to our newsletter. Get ready for:
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-indigo-500" />
                    Exclusive tumbler offers and early access to new collections
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-indigo-500" />
                    Free shipping updates and delivery tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-indigo-500" />
                    New collection previews and limited edition releases
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-indigo-500" />
                    Special member benefits and priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    Early access to seasonal collections
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-indigo-500" />
                    Personalized recommendations based on your preferences
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">Member Benefits</span>
                </div>
                <p className="text-sm text-purple-700">
                  As a newsletter subscriber, you'll receive exclusive perks and be the first to know about new arrivals and special promotions.
                </p>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};