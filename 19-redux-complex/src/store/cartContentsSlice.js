
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}
const cartContentsSlice = createSlice({
    name: "cartContents",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const cartItemIdx = state.items.findIndex((item) => {
                if ( item.title === newItem.title 
                        && item.price === newItem.price 
                        && item.description === newItem.description
                ) { return true; }
                return false;
            })

            if (cartItemIdx === -1) {
                newItem.quantity = 1;
                state.items.push(newItem);
            } else {
                state.items[cartItemIdx].quantity += 1;
            }
        },

        removeItemFromCart(state, action) {
            const newItem = action.payload;
            const cartItemIdx = state.items.findIndex((item) => {
                if ( item.title === newItem.title 
                        && item.price === newItem.price 
                        && item.description === newItem.description
                ) { return true; }
                return false;
            })

            if (state.items[cartItemIdx].quantity === 1) {
                state.items.splice(cartItemIdx, 1);
            } else {
                state.items[cartItemIdx].quantity -= 1;
            }
        }
    }
})

export const cartContentsActions = cartContentsSlice.actions;
export default cartContentsSlice.reducer;
