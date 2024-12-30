import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Cart({ ref }) {

    const dialogRef = useRef();

    function closeModal() {
        dialogRef.current.close();
    }

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog className="cart" ref={dialogRef}>
            <h2>Cart</h2>
            <button onClick={closeModal}>
                Close
            </button>
        </dialog>, document.getElementById("modal")
    );

}
