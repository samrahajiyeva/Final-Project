import { configureStore } from "@reduxjs/toolkit"
import ShoppingSlice from "./ShoppingSlice/ShoppingSlice"

export const store = configureStore({
    reducer: {
        shoppingcart: ShoppingSlice
    }
})