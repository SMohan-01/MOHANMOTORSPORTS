import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  myProducts: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.myProducts.find((item) => item.id === newItem.id);
      if (itemIndex) {
        toast.error("Helmet is already in your cart!", {
          position: "top-right",
        });
      } else {
        state.myProducts.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
        });
        toast.success("Helmet added to cart!", { position: "top-right" });
      }
      state.totalPrice += newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const fetchedItem = state.myProducts.find((item) => item.id === id);
      if (fetchedItem) {
        state.totalPrice -= fetchedItem.price;
        state.myProducts = state.myProducts.filter((item) => item.id !== id);
        toast.info("Item removed from cart!", { position: "top-right" });
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
