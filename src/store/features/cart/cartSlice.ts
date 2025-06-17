import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

type ShippingOption = {
  id: string;
  label: string;
  cost: number;
  displayCost: string;
};

interface CartState {
  cartItems: CartItem[];
  isCartOpen: boolean;
  coupon: {
    code: string;
    discount: number;
  } | null;
  selectedShipping: string;
  shippingOptions: ShippingOption[];
}

const shippingOptions: ShippingOption[] = [
  { id: "free", label: "Free shipping", cost: 0, displayCost: "$0.00" },
  {
    id: "express",
    label: "Express shipping",
    cost: 15,
    displayCost: "+$15.00",
  },
  { id: "pickup", label: "Pick Up", cost: 0, displayCost: "-5%" },
];

const initialState: CartState = {
  cartItems: [],
  isCartOpen: false,
  coupon: null,
  selectedShipping: "express",
  shippingOptions,
};

const MAX_QUANTITY = 10;
const MIN_QUANTITY = 1;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        existing.quantity = Math.min(
          MAX_QUANTITY,
          existing.quantity + action.payload.quantity
        );
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: Math.min(MAX_QUANTITY, action.payload.quantity),
        });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload.id
      );
      if (item) {
        item.quantity = Math.min(
          MAX_QUANTITY,
          Math.max(MIN_QUANTITY, action.payload.quantity)
        );
      }
    },
    setCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    applyCoupon(
      state,
      action: PayloadAction<{ code: string; discount: number }>
    ) {
      state.coupon = action.payload;
    },
    removeCoupon(state) {
      state.coupon = null;
    },
    setShippingOption(state, action: PayloadAction<string>) {
      state.selectedShipping = action.payload;
    },
  },
});

// Selectors
export const selectCartSubtotal = (state: { cart: CartState }) => {
  return state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectShippingCost = (state: { cart: CartState }) => {
  const subtotal = selectCartSubtotal(state);
  const option = state.cart.shippingOptions.find(
    (opt) => opt.id === state.cart.selectedShipping
  );

  if (!option) return 0;

  if (option.id === "pickup") {
    return -subtotal * 0.05;
  }

  return option.cost;
};

export const selectPickupDiscount = (state: { cart: CartState }) => {
  if (state.cart.selectedShipping === "pickup") {
    return selectCartSubtotal(state) * 0.05;
  }
  return 0;
};

export const selectFormattedShippingOptions = (state: { cart: CartState }) => {
  return state.cart.shippingOptions.map((option) => {
    if (option.id === "pickup") {
      return {
        ...option,
        displayCost: "-5%",
      };
    }
    return option;
  });
};

export const selectCartTotal = (state: { cart: CartState }) => {
  const subtotal = selectCartSubtotal(state);
  const shippingCost = selectShippingCost(state);
  const discount = state.cart.coupon?.discount ?? 0;

  return subtotal + shippingCost - discount;
};

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  setCartOpen,
  applyCoupon,
  removeCoupon,
  setShippingOption,
} = cartSlice.actions;

export default cartSlice.reducer;
