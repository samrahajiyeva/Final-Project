import { createSlice } from "@reduxjs/toolkit";

const ShoppingCart = createSlice({
    name: "shoppingcart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            // id == payload
            state.items.push(action.payload)
            console.log(state.items)
        },
        removeFromCart: (state, action) => {
            let target = state.items.find(item => item.id == action.payload)
            let indexOftarget = state.items.indexOf(target)
            state.items.splice(indexOftarget, 1)
        }
    }
})
export const { addToCart, removeFromCart } = ShoppingCart.actions
export default ShoppingCart.reducer