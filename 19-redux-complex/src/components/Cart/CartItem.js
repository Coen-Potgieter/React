import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux';
import { cartContentsActions } from '../../store/cartContentsSlice';

const CartItem = (props) => {
    const { title, quantity, price } = props.item;
    const total = (quantity * price);

    const dispatch = useDispatch();

    function handleAddItem() {
        dispatch(cartContentsActions.addItemToCart(props.item));
    }
    function handleRemoveItem() {
        dispatch(cartContentsActions.removeItemFromCart(props.item));
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleRemoveItem}>-</button>
                    <button onClick={handleAddItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
