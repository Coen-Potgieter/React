
import { useRef } from "react";

import Cart from "./Cart.jsx";
import logoImg from "../assets/logo.jpg";


export default function Header() {

    const cartRef = useRef();

    function openCart() {
        cartRef.current.open();
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
                className="button" 
                onClick={openCart}
            >
                Cart
            </button>
            <Cart ref={cartRef}/>


        </header>
    );
}
