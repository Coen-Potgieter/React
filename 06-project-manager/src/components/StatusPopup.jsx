import { createPortal } from "react-dom";

export default function StatusPopup({ col, message }) {


    // className="bg-green-600 h-screen w-screen flex items-center justify-center"
    return createPortal(
        <dialog
            open
            className={`flex items-center rounded-lg p-4 justify-center size-fit bottom-10  
animate-dropInOut ${col.bg}`}
        >
            <label
                className={`text-2xl ${col.text}`}
            >
                {message}
            </label>
        </dialog>, 
        document.getElementById("modal-root")
    );
}
