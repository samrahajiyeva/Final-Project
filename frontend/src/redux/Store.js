import { configureStore } from "@reduxjs/toolkit"
import ShoppingCart from "./ShoppingCart/ShoppingCart"

export const store = configureStore({
    reducer: {
        shoppingcart: ShoppingCart
    }
})