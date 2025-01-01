
import { configureStore } from "@reduxjs/toolkit";
import cartShowingReducer from "./cartShowingSlice";
import cartContentsReducer from "./cartContentsSlice";


const store = configureStore({
    reducer: {
        cartShowing: cartShowingReducer,
        cartContents: cartContentsReducer,
    }
});

export default store;
