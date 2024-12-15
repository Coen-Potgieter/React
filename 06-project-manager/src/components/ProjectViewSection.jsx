import UserView from "./UserView.jsx";

import { useState } from "react";

export default function ProjectViewSection({ projectData }) {
    const [ inputIsDisabled, setInputIsDisabled ] = useState(true);

    function handleToggleDisabled() {
        setInputIsDisabled(prevState => !prevState);
    }

    return (
        <div 
            className="flex flex-col bg-yellow-900 w-1/2 items-center h-screen"
        >
            <UserView 
                label="Project Name"
                InputElem="input" 
                value={projectData.name} 
                isDisabled={inputIsDisabled}
            />
            <UserView 
                label="Project Description"
                InputElem="textarea" 
                defaultValue={projectData.description} 
                isDisabled={!inputIsDisabled}
                className="size-fit"
            />
            <UserView 
                label="Project Date"
                InputElem="input" 
                value={projectData.date} 
                isDisabled={inputIsDisabled}
            />
        </div>
    );
}
