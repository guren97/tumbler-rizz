import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { CartPage } from '@/pages/CartPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { ShippingPage } from '@/pages/ShippingPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { OrderSuccessPage } from '@/pages/OrderSuccessPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import { ProductDetails } from './pages/ProductDetails';
import { FAQsPage } from '@/pages/FAQsPage';

function App() { 
  return (
    <CartProvider>
      <Router> 
          <Navbar /> 
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/faqs" element={<FAQsPage />} />
            </Routes> 
          <Footer />
          <Toaster /> 
      </Router>
    </CartProvider>
  );
}

export default App;