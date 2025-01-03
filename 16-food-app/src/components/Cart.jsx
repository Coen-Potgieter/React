import { useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";

import { MealsContext } from "../store/meals-context.jsx";

export default function Cart({ ref, onCheckout }) {

    const dialogRef = useRef();
    function closeModal() {
        dialogRef.current.close();
    }
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            },
            close() {
                dialogRef.current.close();
            }
        }
    })


    const { items, addMealToCart, removeMealFromCart } = useContext(MealsContext);
    const orderedMeals = items.filter((meal) => meal.ordered);
    const totalAmount = orderedMeals.reduce((runningSum, meal) => runningSum + (meal.ordered * Number(meal.price)), 0).toFixed(2);
    const disableButton = (orderedMeals.length === 0);

    return createPortal(
        <dialog className="modal" ref={dialogRef}>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {orderedMeals.map((meal) => (
                        <li key={meal.id} className="cart-item">
                            <p>{meal.name} - {meal.ordered} x ${meal.price}</p>
                            <section className="cart-item-actions">
                                <button 
                                    onClick={() => removeMealFromCart(meal.id)}
                                >
                                    -
                                </button>
                                <p>{meal.ordered}</p>
                                <button onClick={() => addMealToCart(meal.id)}
                                >
                                    +
                                </button>
                            </section>
                        </li>
                    ))}
                </ul>
                {totalAmount !== 0 && (
                    <p className="cart-total">
                        ${totalAmount}
                    </p>
                )}
                <div className="modal-actions">
                    <button className="text-button" onClick={closeModal}>
                        Close
                    </button>
                    <button className="button" onClick={onCheckout} disabled={disableButton}>
                        Go to Checkout
                    </button>
                </div>
            </div>
        </dialog>, document.getElementById("modal")
    );

}
