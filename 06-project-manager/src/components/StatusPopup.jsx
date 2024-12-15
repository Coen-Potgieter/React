import { createPortal } from "react-dom";

export default function StatusPopup({ col, message }) {


    // className="bg-green-600 h-screen w-screen flex items-center justify-center"
    return createPortal(
        <dialog
            open
            className={`flex items-center justify-center h-12 w-24 ${col} 
animate-fadeIn duration-500 ease-out opacity-100`}
        >
            <label
                className="text-xl font-bold underline"
            >
                {message}
            </label>
        </dialog>, 
        document.getElementById("modal-root")
    );
}
