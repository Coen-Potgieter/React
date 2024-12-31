
import { useRef, useContext } from "react";

import Cart from "./Cart.jsx";
import UserModal from "./UserModal.jsx";
import logoImg from "../assets/logo.jpg";
import { MealsContext } from "../store/meals-context.jsx";


export default function Header() {

    const cartRef = useRef();
    const userRef = useRef();

    const { items } = useContext(MealsContext);
    const numMealsOrdered = items.reduce((orderCount, meal) =>  (!meal.ordered) ? orderCount : orderCount + meal.ordered, 0);

    function openCart() {
        cartRef.current.open();
    }

    function openUserInput() {
        cartRef.current.close();
        userRef.current.open();
    }

    return (
        <header
            id="main-header"
        >
            <div id="title">
                <img src={logoImg} alt="Logo Image" />
                <h1>Coeni's Food Odering App</h1>
            </div>

            <button 
                className="text-button" 
                onClick={openCart}
            >
                Cart {(!numMealsOrdered) ? "" : `(${numMealsOrdered})`}
            </button>
            <Cart ref={cartRef} onCheckout={openUserInput}/>
            <UserModal ref={userRef} />



        </header>
    );
}
