import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventorySlice";
import helmetSlice from "./helmetSlice";
import cartSlice from "./cartSlice";
import loginUserSlice from "./loginUserSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    helmets: helmetSlice,
    cart: cartSlice,
    user: loginUserSlice,
  },
});
