import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products, Product as DataProduct } from '@/data/products';

interface CartItem extends DataProduct {
  quantity: number;
}

interface Store {
  cart: CartItem[];
  addToCart: (product: DataProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  products: DataProduct[];
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      products: products,
      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        const { cart } = get();
        set({ cart: cart.filter((item) => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        const { cart } = get();
        set({
          cart: cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'cart-storage',
    }
  )
);