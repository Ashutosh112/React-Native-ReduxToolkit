import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addMyProducts(state, action) {
            state.push(action.payload)
        },
        increaseQty(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {

            } else {
                state[myIndex].qty = state[myIndex].qty + 1;
            }
        },
        decreaseQty(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {

            } else {
                state[myIndex].qty = state[myIndex].qty - 1;
            }
        },

    }
})

export const { addMyProducts, increaseQty, decreaseQty, removeCartItem } = MyProductSlice.actions
export default MyProductSlice.reducer