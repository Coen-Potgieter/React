import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import ProjectAddSection from "./components/ProjectAddSection.jsx";
import ProjectViewSection from "./components/ProjectViewSection.jsx";
import StatusPopup from "./components/StatusPopup.jsx";

import { useState } from "react";

const TEST_STARTING_PROJ = [
    { 
        name: "Project Manager",
        description: "Starting a new React Project off the rip is harder than i thought, i wont lie",
        dateStarted: "2024-12-10",
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
    }

    function handleProjectSelect(projectIdx) {
        setSelectedProject(projectIdx);
        console.log("refresh now?");
    }

    function handleUpdateProject(newProject) {
        setProjectsData((prevData) => {
            const newProjectsData = prevData.map(singleProj => ({ ...singleProj }));
            const projectIdx = newProject.idx;

            newProjectsData[projectIdx].name = newProject.name;
            newProjectsData[projectIdx].description = newProject.description;
            newProjectsData[projectIdx].dateStarted = newProject.dateStarted;

            return newProjectsData;
        });

    }

    const projectData = (selectedProject >= 0) ? projectsData[selectedProject] : null;
    if (projectData) {
        projectData.idx = selectedProject;
    }

    return (
        <div className="flex">
            <SideBar data={projectsData} onToggle={handleSideBarToggle} isOpen={showSideBar} onProjSelect={handleProjectSelect}/>
            {showAddedPopup && <StatusPopup col={{ bg: "bg-emerald-500", text: "text-my-beige" }} message="Project Successfully Added"/>}
            <section className="flex flex-col items-center">
                <Header />
                {selectedProject <= -1 && <ProjectAddSection onAddProject={addProject} />}
                {selectedProject > -1 && <ProjectViewSection onAddProject={handleProjectSelect} projectData={projectData} onProjectUpdate={handleUpdateProject}/>}
            </section>
        </div>
    );
}

export default App;
