
import { createSlice } from "@reduxjs/toolkit";

const inititalAuthState = {
    isAuth: false,
}

const authSlice = createSlice({
    name: "Auth",
    initialState: inititalAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
