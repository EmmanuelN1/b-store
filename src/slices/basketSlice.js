import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      //searching the storefor the index
      const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id)

      //creating a copy of the current basket
      let newBasket = [...state.items];

      if (index >= 0) {
        //removing the items from the list
        newBasket.splice(index, 1)
      } else{
         console.warn(`Cant remove product (id: ${action.payload.id}) as it is not in the list`)
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
//selector tha pulls the total prices of all items
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * 280 , 0);


export default basketSlice.reducer;
