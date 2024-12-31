
import { useImperativeHandle, useRef, useContext, useActionState } from "react";
import { createPortal } from "react-dom";

import { MealsContext } from "../store/meals-context.jsx";
import { validateInputData } from "../util/validation.js";
import { sendUserData } from "../http.js";

export default function UserModal({ ref }) {

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
    });

    const { items, resetOrders } = useContext(MealsContext);

    const orderedMeals = items.filter((meal) => meal.ordered);
    const totalAmount = orderedMeals.reduce((runningSum, meal) => runningSum + (meal.ordered * Number(meal.price)), 0).toFixed(2);

    async function submitOrderAction(prevFormState, fd) {

        const customerData = Object.fromEntries(fd.entries());
        const newFormState = validateInputData(customerData);
        if (newFormState.errors) {
            return newFormState;
        }

        try {
            await sendUserData(customerData, orderedMeals);

        } catch(error) {
            console.log(error.message);
        }

        resetOrders();
        dialogRef.current.close();
        return newFormState;
        
    }

    const [ formState, formAction, pending ] = useActionState(submitOrderAction, { errors: null });

    return createPortal(
        <dialog className="modal" ref={dialogRef}>
            <h2>Checkout</h2>
            <p>Total Amount: ${totalAmount}</p>
            <form action={formAction}>
                <p className="control"> 
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        required
                        defaultValue={formState.enteredVals?.fullName}
                    />
                </p>

                <p className="control"> 
                    <label htmlFor="email">E-Mail Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        defaultValue={formState.enteredVals?.email}
                    />
                </p>

                <p className="control"> 
                    <label htmlFor="street">Street</label>
                    <input 
                        type="text" 
                        id="street"
                        name="street"
                        required
                        defaultValue={formState.enteredVals?.street}
                    />
                </p>

                <div className="control-row">
                    <p className="control"> 
                        <label htmlFor="postalCode">Postal Code</label>
                        <input 
                            type="text" 
                            id="postalCode"
                            name="postalCode"
                            required
                            defaultValue={formState.enteredVals?.postalCode}
                        />
                    </p>

                    <p className="control"> 
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            id="city"
                            name="city"
                            required
                            defaultValue={formState.enteredVals?.city}
                        />
                    </p>
                </div>

                {formState.errors && (
                    <ul>
                        {formState.errors.map((error) => (
                            <li key={error} className="error-control">{error}</li>
                        ))}
                    </ul>
                )}

                <div className="modal-actions">
                    <button type="button" className="text-button" onClick={closeModal}>
                        Close
                    </button>
                    <button type="submit" className="button">
                        Submit Order
                    </button>
                </div>
            </form>
        </dialog>, document.getElementById("modal")
    );

}

