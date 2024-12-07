import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CONCEPT_ITEMS } from "./data.js";

function App() {
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
                        <TabButton>Component</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
