import { createPortal } from "react-dom";

export default function StatusPopup({ col, message }) {


    // className="bg-green-600 h-screen w-screen flex items-center justify-center"
    return createPortal(
        <dialog
            open
            className={`h-screen w-screen flex items-center justify-center ${col}`}
        >
            <label
                className="text-4xl font-bold underline"
            >
                {message}
            </label>
        </dialog>, 
        document.getElementById("modal-root")
    );
}
