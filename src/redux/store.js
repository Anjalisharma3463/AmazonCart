import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

// Load saved state from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("reduxState");
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error("Error loading state:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state:", error);
  }
};

// Configure store with persisted state
const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: loadState(), // Load saved state
});

// Subscribe to store changes and save state
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
