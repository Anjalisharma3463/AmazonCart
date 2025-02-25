import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlistItems: [] },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
      alert("Product added to wishlist");
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      alert("Product removed from wishlist");
    },
    moveToCart: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      alert("Product moved to cart");
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveToCart } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
