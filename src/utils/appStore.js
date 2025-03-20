import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //import reducer from slice

const appStore = configureStore({
  reducer: { cart: cartReducer }, //assign reducer with name to reducer key
  //we can add multiple reducers like for cart,user
});

export default appStore;
