// src/types/cart.ts
export interface CartItem {
    id: string | number;
    quantity: number;
    [key: string]: any; // Allow additional properties
  }
  
  export interface CartState {
    cart: CartItem[];
  }