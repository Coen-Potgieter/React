import UserInput from "./UserInput.jsx"
import ProjectButton from "./ProjectButton.jsx";

import { useRef } from "react";

export default function ProjectSection({ onAddProject }) {

    const projectNameInpt = useRef();
    const projectDescriptionInpt = useRef();
    const projectDateInpt = useRef();

    function handleAddProject() {

        // Collect data from inputs
        const projName = projectNameInpt.current.value;
        const projDescricption = projectDescriptionInpt.current.value;
        const projDate = projectDateInpt.current.value;
        
        // Validate the Data (simply non-empty)
        if (!projName || !projDescricption || !projDate){
            // TODO: Display error pop-up
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
    );
}
