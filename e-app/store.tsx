import { configureStore } from '@reduxjs/toolkit';
import { CartState } from '@/types/cart';
import cartReducer from '@/redux/CartReducer';

export interface RootState {
  cart: CartState;
  // Add other slice states here
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers
  },
});

export type AppDispatch = typeof store.dispatch;