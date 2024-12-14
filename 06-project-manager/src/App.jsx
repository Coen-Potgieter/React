import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
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
    const [ showPopUp, setShowPopUp ] = useState(false);

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

        // TODO: Add success pop-up
        setShowPopUp(true);
        setTimeout(() => {setShowPopUp(false)}, 3000);
        console.log("added project");
        console.log(projectsData);
    }



    return (
        <div className="flex">
            <SideBar data={projectsData} onClose={handleSideBarToggle} isOpen={showSideBar}/>
            {showPopUp && <StatusPopup />}
            <section className="flex flex-col items-center">
                <Header />
                <button 
                    className="bg-stone-900 text-stone-50 hover:bg-stone-50 hover:text-stone-900 m-5 p-10 w-1/6"
                    onClick={handleSideBarToggle}
                >
                    Toggle Sidebar
                </button>
                <ProjectSection onAddProject={addProject}/>
            </section>
        </div>
    );
}

export default App;
