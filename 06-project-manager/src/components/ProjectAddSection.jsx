import UserInput from "./UserInput.jsx"
import ProjectButton from "./ProjectButton.jsx";
import StatusPopup from "./StatusPopup.jsx";

import { useRef, useState } from "react";

export default function ProjectAddSection({ onAddProject, onErrorPopup }) {

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
            date: projectDateInpt.current.value,
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
            {showErrorPopup && <StatusPopup col="bg-red-600" message="Fill In All The Feilds" />}
            <div
                className="flex flex-col bg-my-light-orange h-fit w-screen"
            >
                <div 
                    className=" flex flex-col bg-red-800 items-center placeholder-amber-700 ml-96 w-fit mt-10 gap-10"
                >
                    <UserInput ref={projectNameInpt} label="Project Name:" placeholder="Space Invaders"/>
                    <UserInput ref={projectDescriptionInpt} label="Project Description:" />
                    <UserInput ref={projectDateInpt} label="Date Started:" />
                    <ProjectButton type="add" onClick={handleAddProject}/>
                    <ProjectButton type="delete" />
                    <ProjectButton type="clear" onClick={handleClearInputs}/>
                </div>
            </div>
        </>
    );
}
