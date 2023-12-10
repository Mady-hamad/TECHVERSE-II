import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const productSlice = createSlice({
  name: 'productCount',
  initialState:{
    cartItems: []
},
  reducers: {
    addToCart(state, action){
        console.log(current(state));
        const item = action.payload;
        let productItem = state.cartItems.find(product => product.id === item.id);
        if(productItem){
          productItem.quantity += 1;
        }else{
          state.cartItems = [item,...state.cartItems];
        }
    },

    incrementQ(state, action){
        const item = action.payload;
        let productItem = state.cartItems.find(product => product.id === item.id);
        if(productItem){
          productItem.quantity += 1;
        }
    },

    decrementQ(state, action){
        const item = action.payload;
        let productItem = state.cartItems.find(product => product.id === item.id);
        if(productItem){
          productItem.quantity -= 1;
          if(productItem.quantity === 0){
            state.cartItems = state.cartItems.filter(product => product.id !== item.id);
          }
        }
    },

    removeFromCart(state, action){
        const item = action.payload;
        state.cartItems = state.cartItems.filter(product => product.id !== item.id);
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementQ, decrementQ, removeFromCart } = productSlice.actions

export default productSlice.reducer