import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '../../model/product.model';
import { WritableDraft } from 'immer/dist/internal';

export interface CartItem {
  item: ProductModel;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  cartDrawerOpen: boolean;
  totalItems: number;
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  cartDrawerOpen: false,
  totalItems: 0,
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductModel>) => {
      let cartItem = state.cartItems.find(ci => ci.item.id === action.payload.id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({
          item: action.payload,
          quantity: 1
        })
      }
      updateState(state);
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const existingProductItemIndex = state.cartItems.findIndex(c => c.item.id === action.payload);

      if (existingProductItemIndex >= 0) {
          state.cartItems.splice(existingProductItemIndex, 1);
          updateState(state);
      }
    },
    toggleCartDrawer: (state) => {
      state.cartDrawerOpen = !state.cartDrawerOpen;
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      updateState(state);
    }
  },
})

function getCartQuantity(cartitems: CartItem[]): number {
  return cartitems.reduce((previous, currentValue) => previous += currentValue.quantity, 0);
}

function getCartTotal(cartItems: CartItem[]): number {
  return cartItems.reduce((previous, currentValue) => previous += (currentValue.quantity * currentValue.item.priceAsNumber), 0)
}

function updateState(state: WritableDraft<CartState>): void {
  state.totalItems = getCartQuantity(state.cartItems);
  state.total = getCartTotal(state.cartItems);
}

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, toggleCartDrawer, clearCartItems } = cartSlice.actions

export default cartSlice.reducer