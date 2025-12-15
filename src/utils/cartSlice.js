import { createSlice } from "@reduxjs/toolkit";

//create cart slice using createSlice from reduxToolkit
export const cartSlice = createSlice({
  name: "cart", //name of the cart
  initialState: {
    items: [], //one of our cart storage
  },
  reducers: {
    //reducer functions for state mutation
    addItem: (state, action) => {
      ~(
        //we get state,action in callback for mutation
        state.items.push(action.payload)
      ); //state contains all the state items
    },
    removeItem: (state, action) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].card.info.id == action.payload.card.info.id) {
          state.items.splice(i, 1);
          break;
        }
      }
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions; //we need to export our actions from cartSlice.actions object
export default cartSlice.reducer; //export reducer for store configuration
