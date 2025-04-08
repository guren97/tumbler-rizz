import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Droplets, Menu } from 'lucide-react';  
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'; 
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem, 
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const { cart } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-indigo-100 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Droplets className="h-7 w-7 text-indigo-500" />
              <span className="text-2xl font-display bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tumbler Rizz
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`${navigationMenuTriggerStyle()} text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/products" 
                    className={`${navigationMenuTriggerStyle()} text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200`}
                  >
                    Collections
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`${navigationMenuTriggerStyle()} text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200`}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`${navigationMenuTriggerStyle()} text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Button>
            </Link>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-indigo-600">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Link 
                    to="/" 
                    className="block py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md px-2 transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/products" 
                    className="block py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md px-2 transition-colors duration-200"
                  >
                    Collections
                  </Link>
                  <Link 
                    to="/about" 
                    className="block py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md px-2 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md px-2 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}