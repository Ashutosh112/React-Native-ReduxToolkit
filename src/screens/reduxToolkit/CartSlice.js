import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCartItem(state, action) {
            state.push(action.payload)
        },
        removeCartItem(state, action) {
            return state.filter((item, index) => item.id !== action.payload);
        }
    }
})

export const { addCartItem, removeCartItem } = CartSlice.actions
export default CartSlice.reducer