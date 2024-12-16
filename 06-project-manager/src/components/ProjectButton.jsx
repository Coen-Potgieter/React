import TrashIcon from "../custom-svgs/TrashIcon.jsx";
import ClearIcon from "../custom-svgs/ClearIcon.jsx";
import AddIcon from "../custom-svgs/AddIcon.jsx";
import EditIcon from "../custom-svgs/EditIcon.jsx";

export default function ProjectButton({ type, isDisabled, inputDisabled=false, ...props }){

    let btnText;
    let icon;
    let btnTypeClass = "bg-transparent";
    if (type === "add") {
        btnText = "Add";
        icon = <AddIcon lineWidth={1.2} className="w-12" />;
        btnTypeClass = "pl-2 hover:text-emerald-800";

    } else if (type === "delete") {
        btnText = "Remove";
        icon = <TrashIcon lineWidth={1.2} className="w-12" />;

    } else if (type === "clear") { 
        btnText = "Clear";
        icon =  <ClearIcon lineWidth={1.2} className="w-12" />;
        btnTypeClass = "hover:text-red-700";

    } else if (type == "edit") {
        btnText = inputDisabled ? "Edit" : "Save";
        icon = <EditIcon lineWidth={1.5} className="w-12" />;
        btnTypeClass = "pl-2 hover:text-yellow-700";
        btnTypeClass += inputDisabled ? "" : " ring-my-green hover:text-my-green"

    } else {
        btnText = "Type Not Supported";
    }

    let btnDisabledClass;
    if (isDisabled) {
        btnDisabledClass = "no-underline text-stone-300 hover:text-stone-300 hover:font-normal hover:no-underline"
    }

    return (
        <button
            className={`
flex pr-4 items-center size-fit hover:font-bold hover:underline
bg-transparent ring-4 ring-my-dark-orange rounded-full 
${btnDisabledClass} ${btnTypeClass}
`}
            disabled={isDisabled}
            {...props}
        >
            {icon}
            <label 
                className="ml-14 text-2xl font-mono cursor-pointer"
            >
                {btnText}
            </label>
        </button>
    );
}




