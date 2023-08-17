import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../reduxToolkit/MyProductSlice"
import MyCartReducer from "../reduxToolkit/CartSlice"

const MyStore = configureStore({
    reducer: {
        product: MyProductReducer,
        cart: MyCartReducer,

    }
})
export default MyStore