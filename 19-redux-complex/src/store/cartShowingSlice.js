
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowing: false
}

const cartShowingSlice = createSlice({
    name: "cartToggle",
    initialState,
    reducers: {
        toggleCart(state) {
            state.isShowing = !state.isShowing;
        },
    }
});

export const cartShowingActions = cartShowingSlice.actions;
export default cartShowingSlice.reducer;
