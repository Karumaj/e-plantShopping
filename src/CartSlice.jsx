import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      action.payload.quantity = 1;
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let name = action.payload.name;
      for(let item in state.items){
        if(state.items[item].name === name){
          state.items.splice(item, 1);
        }
      }
      console.log(state.items.length);
    },
    updateQuantity: (state, action) => {
      let name = action.payload.name;
      for(let item in state.items){
        if(state.items[item].name === name){
          state.items[item].quantity = action.payload.quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;