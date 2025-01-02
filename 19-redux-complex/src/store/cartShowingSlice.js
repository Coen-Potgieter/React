
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowing: false,
    notification: null,
}

const cartShowingSlice = createSlice({
    name: "cartToggle",
    initialState,
    reducers: {
        toggleCart(state) {
            state.isShowing = !state.isShowing;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    }
});

export const cartShowingActions = cartShowingSlice.actions;
export default cartShowingSlice.reducer;
