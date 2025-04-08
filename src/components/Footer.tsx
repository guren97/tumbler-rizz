import { Facebook, Instagram, Twitter, Mail  } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary">Tumbler Rizz</h3>
            <p className="text-muted-foreground">
              Premium tumblers and drinkware for your everyday hydration needs. Stay stylish, stay hydrated.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Shop Now</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li> 
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-500">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@tumbler-rizz.shop</span>
              </li>  
              <li><Link to="/faqs" className="text-muted-foreground font-bold hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
            Copyright ©️ 2025 | Powered by NAFEES ALI TRADERS (SMC-PRIVATE) LIMITED
            </p> 
          </div>
        </div>
      </div>
    </footer>
  );
}