import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import ProjectAddSection from "./components/ProjectAddSection.jsx";
import ProjectViewSection from "./components/ProjectViewSection.jsx";
import StatusPopup from "./components/StatusPopup.jsx";

import { useState, useRef } from "react";

const TEST_STARTING_PROJ = [
    { 
        name: "Poject Manager",
        description: "Starting a new React Project off the rip is harder than i thought, i wont lie!!",
        dateStarted: "Don't know how to do this yet",
    },
];
function App() {
    const [ showSideBar, setShowSideBar ] = useState(false);
    const [ projectsData, setProjectsData ] = useState(TEST_STARTING_PROJ);
    const [ showAddedPopup, setShowAddedPopup ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState(-1);

    function handleSideBarToggle() {
        setShowSideBar((prevState) => !prevState);
    }

    function addProject(newProject) {
        setProjectsData((prevData) => {
            // Make Deep Copy
            const newProjectsData = prevData.map(singleProj => ({ ...singleProj }));
            newProjectsData.push(newProject);
            return newProjectsData;
        });

        setShowAddedPopup(true);
        setTimeout(() => {setShowAddedPopup(false)}, 3000);
        console.log("added project");
        console.log(projectsData);
    }

    function handleProjectSelect(projectIdx) {
        setSelectedProject(projectIdx);
    }

    const projectData = (selectedProject >= 0) ? projectsData[selectedProject] : null;
    console.log(projectData);

    return (
        <div className="flex">
            <SideBar data={projectsData} onToggle={handleSideBarToggle} isOpen={showSideBar} onProjSelect={handleProjectSelect}/>
            {showAddedPopup && <StatusPopup col={{ bg: "bg-emerald-600", text: "text-my-beige" }} message="Project Successfully Added"/>}
            <section className="flex flex-col items-center">
                <Header />
                {selectedProject <= -1 && <ProjectAddSection onAddProject={addProject} />}
                {selectedProject > -1 && <ProjectViewSection projectData={projectData}/>}
            </section>
        </div>
    );
}

export default App;
