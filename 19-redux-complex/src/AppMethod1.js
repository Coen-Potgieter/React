import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification"
import backendURL from "./util/backendURL";
import { cartShowingActions } from "./store/cartShowingSlice";

let isInitial = true;

function App() {

    const cartItems = useSelector((state) => state.cartContents.items);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.cartShowing.notification);

    useEffect(() => {
        async function sendCartData() {
            dispatch(cartShowingActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending Cart Data",
            }));
            const response = await fetch(backendURL + "/cart.json", {
                method: "PUT",
                body: JSON.stringify(cartItems),
            });

            if (!response.ok) {
                throw new Error("Sedning Cart Data Failed")
            }

            dispatch(cartShowingActions.showNotification({
                status: "success",
                title: "Success",
                message: "Sent Cart Data Successfully",
            }));
        }

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(cartShowingActions.showNotification({
                status: "error",
                title: "Error",
                message: "Sending Cart Data Failed",
            }));
        });

    }, [cartItems, dispatch]);

    return (
        <>
            {notification && (
                <Notification 
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                <Cart />
                <Products />
            </Layout>
        </>
    );
}

export default App;
