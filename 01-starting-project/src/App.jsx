import reactImg from "./assets/react-core-concepts.png";
import { CONCEPT_ITEMS } from "./data.js";

const startingWords = ["Fundamental", "Crucial", "Core"];

function getRandInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function MyFirstComp() {
    // Defining dynamic content into a separate variable here
    const randomDescr = startingWords[getRandInt(startingWords.length - 1)];

    // Inside returned JSX code we inject this dynamic content using our `randomDescr` variable
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {randomDescr} React concepts you will need for almost any app you are
            going to build!
        </p>
      </header>
    );
}

// Declaration of props component
function CoreConceptsItem({ img, title, description }) {
    return (
    <li>
        <img src={img} alt={`${title}} Image`} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
);
}

function App() {
    return (
        <div>
            <MyFirstComp/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConceptsItem {...CONCEPT_ITEMS[0]}/>
                        <CoreConceptsItem {...CONCEPT_ITEMS[1]}/>
                        <CoreConceptsItem {...CONCEPT_ITEMS[2]}/>
                        <CoreConceptsItem {...CONCEPT_ITEMS[3]}/>
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
