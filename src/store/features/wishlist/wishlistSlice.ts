import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishlistItem = {
  _id: string;
  name: string;
  price: number;
};

interface WishlistState {
  wishlistItems: WishlistItem[];
}

const initialState: WishlistState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const existing = state.wishlistItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existing) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item._id !== action.payload
      );
    },
    clearWishlist(state) {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
