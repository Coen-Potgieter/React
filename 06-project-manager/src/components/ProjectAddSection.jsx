import UserInput from "./UserInput.jsx"
import ProjectButton from "./ProjectButton.jsx";
import StatusPopup from "./StatusPopup.jsx";

import { useRef, useState } from "react";

export default function ProjectAddSection({ onAddProject }) {

    // Define Refs for acessing Input Feilds
    const projectNameInpt = useRef();
    const projectDescriptionInpt = useRef();
    const projectDateInpt = useRef();

    const [ showErrorPopup, setErrorPopup ] = useState(false);

    function handleAddProject() {

        // Collect data from inputs
        const projName = projectNameInpt.current.value;
        const projDescricption = projectDescriptionInpt.current.value;
        const projDate = projectDateInpt.current.value;

        // Validate the Data (simply non-empty)
        if (!projName || !projDescricption || !projDate){
            setErrorPopup(true);
            setTimeout(() => {setErrorPopup(false)}, 3000);
            return;
        }

        const newProject = {
            name: projectNameInpt.current.value,
            description: projectDescriptionInpt.current.value,
            dateStarted: projectDateInpt.current.value,
        };
        onAddProject(newProject);
        handleClearInputs();
    }

    function handleClearInputs() {
        projectNameInpt.current.value = "";
        projectDescriptionInpt.current.value = "";
        projectDateInpt.current.value = "";
    }


    return (
        <>
            {showErrorPopup && <StatusPopup col={{ bg: "bg-red-400", text: "text-my-beige" }} message="Missing Feilds" />}
            <div 
                className={` 
flex flex-col w-2/5 h-fit mt-10 gap-10 
items-start justify-center placeholder-amber-700`}
            >
                <UserInput 
                    InputElem="input" 
                    type="text"
                    label="Project Name:" 
                    ref={projectNameInpt} 
                    placeholder="Space Invaders"
                />
                <UserInput 
                    InputElem="textarea" 
                    label="Project Description:" 
                    placeholder="Recreated Space Invaders in Python"
                    ref={projectDescriptionInpt} 
                    autoComplete="on"
                    autoCorrect="on"
                    cols="30"
                    spellCheck="true"
                    className="h-24"
                />
                <UserInput 
                    InputElem="input" 
                    type="date"
                    label="Date Started:" 
                    ref={projectDateInpt} 
                />
                <div className="flex w-full justify-between px-6">
                    <ProjectButton type="clear" onClick={handleClearInputs}/>
                    <ProjectButton 
                        type="add" 
                        onClick={handleAddProject}
                        isDisabled={showErrorPopup}
                    />
                </div>
            </div>
        </>
    );
}
