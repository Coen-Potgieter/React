import { createPortal } from "react-dom";

import MenuIcon from "../custom-svgs/MenuIcon.jsx"

export default function SideBar({ data, onToggle, isOpen, onProjSelect }) {

    let sideBarClass = "flex flex-col m-0 border-e-2 border-e-black left-0 h-screen w-1/6 bg-emerald-800 bg-opacity-80 hover:bg-opacity-100 transform transition-transform duration-300 ease-in-out";

    if (isOpen) {
        sideBarClass += " translate-x-0";
    } else {
        sideBarClass += " -translate-x-full";
    }

    return createPortal(
        <>
            {!isOpen && (
                <dialog 
                    open 
                    className="flex justify-start m-0 left-0"
                >
                    <button onClick={onToggle}
                        className="text-4xl bg-my-beige text-my-dark-orange hover:text-my-light-orange">
                        <MenuIcon className="size-12"/>
                    </button>
                </dialog>
            )}
            <dialog 
                className={sideBarClass}>
                <div 
                    className="flex justify-end pe-2 pt-2"
                >
                    <button 
                        className="text-2xl text-white hover:text-stone-400"
                        onClick={onToggle}>
                        X
                    </button >
                </div>
                <div
                    className="flex flex-col gap-0 mt-10"
                >
                    {data.map((project, projectIdx) => (
                        <button key={projectIdx}
                            className="bg-yellow-600 text-stone-300 font-mono text-2xl w-full py-3 hover:underline hover:font-bold"
                            onClick={() => onProjSelect(projectIdx)}
                        >
                            {project.name}
                        </button>
                    ))}
                </div>
            </dialog>
        </>, document.getElementById("modal-root")
    );

}
