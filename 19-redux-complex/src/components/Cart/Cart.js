import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from "react-redux";

const Cart = (props) => {

    const isShowing = useSelector((state) => state.cartShowing.isShowing);
    const cartItems = useSelector((state) => state.cartContents.items);

    if (!isShowing) {
        return <></>;
    }

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.title}
                        item={{ ...item }}
                    />

                ))}
            </ul>
        </Card>
    );
};

export default Cart;
