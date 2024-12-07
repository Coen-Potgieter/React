import reactImg from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";

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
function CoreConceptsItem(props) {
    return (
    <li>
        <img src={props.inpImg} alt={`${props.inpTitle}} Image`} />
        <h3>{props.inpTitle}</h3>
        <p>{props.inpDescr}</p>
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
                        {/* Inserting data into props component */}
                        <CoreConceptsItem
                            inpImg={compImg}
                            inpTitle="Components"
                            inpDescr="The Core UI building block"
                        />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
