import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
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
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
