
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    changed: false,
}
const cartContentsSlice = createSlice({
    name: "cartContents",
    initialState,
    reducers: {

        replaceCart(state, action) {
            state.items = action.payload;
        },
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
            state.changed = true;
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
            state.changed = true;
        }
    }
})


export const cartContentsActions = cartContentsSlice.actions;
export default cartContentsSlice.reducer;
