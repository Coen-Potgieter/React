import { createPortal } from "react-dom";

export default function SideBar({ onClose, isOpen }) {

let sideBarClass = "flex flex-col m-0 border-e-2 border-e-black left-0 h-screen w-1/6 bg-emerald-800 bg-opacity-80 hover:bg-opacity-100 transform transition-transform duration-300 ease-in-out";

    if (isOpen) {
        sideBarClass += " translate-x-0";
    } else {
        sideBarClass += " -translate-x-full";
    }

    return createPortal(
        <dialog 
            className={sideBarClass}>
            <button 
                className="text-2xl text-white right-0"
                onClick={onClose}>
                X</button>
            <h1 className="text-4xl text-white" >
                This is some popup?
            </h1>
        </dialog>, document.getElementById("modal-root")
    );

}
