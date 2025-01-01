import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { cartShowingActions } from '../../store/cartShowingSlice';

const CartButton = (props) => {

    const dispatch = useDispatch();
    function handleCartClick() {
        dispatch(cartShowingActions.toggleCart());
    }

    const cartItems = useSelector((state) => state.cartContents.items);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <button className={classes.button} onClick={handleCartClick}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartCount}</span>
        </button>
    );
};

export default CartButton;
