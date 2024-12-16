import { createPortal } from "react-dom";

import MenuIcon from "../custom-svgs/MenuIcon.jsx"

export default function SideBar({ data, onToggle, isOpen, onProjSelect }) {

    let sideBarTransitionClass;

    if (isOpen) {
        sideBarTransitionClass += " translate-x-2";
    } else {
        sideBarTransitionClass += " ring-opacity-0 -translate-x-full";
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
                className={`
flex flex-col m-0 top-1 ring-4 ring-black left-0 h-screen w-1/6 rounded-lg
bg-yellow-50 bg-opacity-100 text-my-green hover:text-gray-700 hover:font-bold
transform transition-transform duration-300 ease-in-out
${sideBarTransitionClass}`}>
                <div 
                    className="flex justify-end pe-2 pt-2"
                >
                    <button 
                        className="text-2xl font-mono hover:underline"
                        onClick={onToggle}>
                        x
                    </button >
                </div>
                <div
                    className="flex flex-col gap-3 mt-4"
                >
                    {data.map((project, projectIdx) => (
                        <button key={projectIdx}
                            className={`
py-3 ml-1 mr-1 
bg-transparent rounded-2xl ring-4 ring-my-green
text-my-dark-orange font-mono font-normal text-xl
hover:bg-my-green hover:text-my-dark-orange`}
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
