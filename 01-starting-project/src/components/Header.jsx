import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";


const startingWords = ["Fundamental", "Crucial", "Core"];

function getRandInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const randomDescr = startingWords[getRandInt(startingWords.length - 1)];

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

export default Header;
