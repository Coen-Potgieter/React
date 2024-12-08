import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CONCEPT_ITEMS } from "./data.js";


function App() {
    console.log("APP BEING RENDERED");
    let buttonContent = "No Button Has Been Clicked";
    function handleClick(selectedButton) {
        buttonContent = selectedButton;
        console.log(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CONCEPT_ITEMS[0]}/>
                        <CoreConcept {...CONCEPT_ITEMS[1]}/>
                        <CoreConcept {...CONCEPT_ITEMS[2]}/>
                        <CoreConcept {...CONCEPT_ITEMS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleClick("components")}>Component</TabButton>
                        <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
                        <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
                        <TabButton onSelect={() => handleClick("state")}>State</TabButton>
                    </menu>
                    {buttonContent}
                </section>
            </main>
        </div>
    );
}

export default App;
