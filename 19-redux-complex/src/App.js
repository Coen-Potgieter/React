import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification"
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {

    const cartItems = useSelector((state) => state.cartContents.items);
    const cartChanged = useSelector((state) => state.cartContents.changed);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.cartShowing.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {

        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cartChanged){
            dispatch(sendCartData(cartItems));
        }

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
