import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

const MyStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
export default MyStore