

import { cartShowingActions } from "./cartShowingSlice";
import backendURL from "../util/backendURL";

import { cartContentsActions } from "./cartContentsSlice";


export function sendCartData(cartItems) {
    return async (dispatch) => {

        dispatch(cartShowingActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending Cart Data",
        }));
        async function sendRequest() {
            const response = await fetch(backendURL + "/cart.json", {
                method: "PUT",
                body: JSON.stringify(cartItems),
            });

            if (!response.ok) {
                throw new Error("Sedning Cart Data Failed")
            }
        }

        try{
            await sendRequest();

        } catch(error) {
            dispatch(cartShowingActions.showNotification({
                status: "error",
                title: "Error",
                message: "Sending Cart Data Failed",
            }));
        }

        dispatch(cartShowingActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent Cart Data Successfully",
        }));
    }
}

export function fetchCartData() {
    return async (dispatch) => {

        async function fetchData() {
            const response = await fetch(backendURL + "/cart.json");
            const resData = await response.json();

            if (!response.ok) {
                throw new Error("Error Fetching Data");
            }

            return resData;
        }

        try{
            const cartData = await fetchData();
            dispatch(cartContentsActions.replaceCart(cartData || []));

        } catch(error) {
            dispatch(cartShowingActions.showNotification({
                status: "error",
                title: "Error",
                message: "Fetching Cart Data Failed",
            }));
        }

    }
}
