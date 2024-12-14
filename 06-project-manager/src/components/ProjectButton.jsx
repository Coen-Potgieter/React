import TrashIcon from "../custom-svgs/TrashIcon.jsx";
import ClearIcon from "../custom-svgs/ClearIcon.jsx";
import AddIcon from "../custom-svgs/AddIcon.jsx";

export default function ProjectButton({ type, ...props }){

    let btnText;
    let icon;
    if (type === "add") {
        btnText = "Add";
        icon = <AddIcon lineWidth={1.2} className="w-12" />;

    } else if (type === "delete") {
        btnText = "Remove";
        icon = <TrashIcon lineWidth={1.2} className="w-12" />;

    } else if (type === "clear") { 
        btnText = "Clear";
        icon =  <ClearIcon lineWidth={2.2} className="w-12" />;

    } else {
        btnText = "Type Not Supported";
    }
    return (
        <button
            className="flex items-center bg-blue-950 pr-4 size-fit  text-my-beige hover:font-bold hover:text-red-600"
            {...props}
        >
            {icon}
            <label 
                className="ml-14 text-2xl font-mono"
            >
                <u>{btnText}</u>
            </label>
        </button>
    );
}




