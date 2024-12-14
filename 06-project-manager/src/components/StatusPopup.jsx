import { createPortal } from "react-dom";

export default function StatusPopup() {

    return createPortal(
        <dialog
            open
            className="bg-green-600 h-screen w-screen flex items-center justify-center"
        >
            <label
                className="text-4xl font-bold underline"
            >
                Successfully Added Project
            </label>
        </dialog>, 
        document.getElementById("modal-root")
    );
}
