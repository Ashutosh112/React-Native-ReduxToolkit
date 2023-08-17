import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {
                state.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    brand: action.payload.brand,
                    price: action.payload.price,
                    image: action.payload.image,
                    qty: action.payload.qty + 1
                })
            } else {
                state[myIndex].qty = state[myIndex].qty + 1;
            }
        },
        subtrProductToMyCart(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {

            } else {
                state[myIndex].qty = state[myIndex].qty - 1;
            }
        },
        deleteMyCartItem(state, action) {
            return state.filter((item, index) => item.id !== action.payload);
        }
    }
})

export const { addProductToMyCart, subtrProductToMyCart, deleteMyCartItem } = CartSlice.actions
export default CartSlice.reducer