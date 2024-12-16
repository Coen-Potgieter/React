import UserView from "./UserView.jsx";
import ProjectButton from "./ProjectButton.jsx";

import { useState, useRef } from "react";

export default function ProjectViewSection({ projectData, onAddProject, onProjectUpdate }) {
    const [ inputIsDisabled, setInputIsDisabled ] = useState(true);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    function handleToggleDisabledInput() {
        setInputIsDisabled(prevState => !prevState);
        if (!inputIsDisabled){
            const newProject = {
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                dateStarted: dateRef.current.value,
                idx: projectData.idx,
            }
            onProjectUpdate(newProject);
        }
    }
    

    return (
        <div 
            className="flex flex-col w-1/2 items-center h-screen gap-5"
        >
            <UserView 
                label="Project Name"
                InputElem="input" 
                type="text"
                startingValue={projectData.name} 
                isDisabled={inputIsDisabled}
                ref={nameRef}
                className="w-96"
            />
            <UserView 
                label="Project Description"
                InputElem="textarea" 
                startingValue={projectData.description} 
                isDisabled={inputIsDisabled}
                autoComplete="on"
                autoCorrect="on"
                spellCheck="on"
                cols="30"
                className="h-24"
                ref={descriptionRef}
            />
            <UserView 
                label="Project Date"
                InputElem="input" 
                type="date"
                startingValue={projectData.dateStarted} 
                isDisabled={inputIsDisabled}
                ref={dateRef}
            />
            <div className="flex w-full justify-between"
            >
                <ProjectButton type="add" onClick={() => onAddProject(-1)}/> 
                <ProjectButton inputDisabled={inputIsDisabled} onClick={handleToggleDisabledInput} type="edit"/> 
            </div>
        </div>
    );
}
