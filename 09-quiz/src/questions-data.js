export const QUESTIONS = {
    History: {
        isShowing: true,
        questions: [
            {
                q: "In What Year Did World War II Start?",
                a: "1939",
                possibleAns: ["1939", "1940", "1935", "1919"],
            },
            {
                q: "Who was the first President of the United States?",
                a: "George Washington",
                possibleAns: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
            },
            {
                q: "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
                a: "Mayflower",
                possibleAns: ["Mayflower", "Santa Maria", "Pinta", "Discovery"],
            },
            {
                q: "Which empire was ruled by Julius Caesar?",
                a: "Roman Empire",
                possibleAns: ["Roman Empire", "Ottoman Empire", "British Empire", "Mongol Empire"],
            },
            {
                q: "What year did the Berlin Wall fall?",
                a: "1989",
                possibleAns: ["1989", "1987", "1991", "1979"],
            },
            {
                q: "Who was the first female Prime Minister of the United Kingdom?",
                a: "Margaret Thatcher",
                possibleAns: ["Margaret Thatcher", "Theresa May", "Queen Victoria", "Queen Elizabeth II"],
            },
            {
                q: "In which year did Christopher Columbus first arrive in the Americas?",
                a: "1492",
                possibleAns: ["1492", "1488", "1500", "1510"],
            },
            {
                q: "Which ancient wonder of the world was located in Egypt?",
                a: "Great Pyramid of Giza",
                possibleAns: ["Great Pyramid of Giza", "Hanging Gardens", "Colossus of Rhodes", "Temple of Artemis"],
            },
            {
                q: "Who wrote the 'Communist Manifesto'?",
                a: "Karl Marx",
                possibleAns: ["Karl Marx", "Vladimir Lenin", "Joseph Stalin", "Friedrich Engels"],
            },
            {
                q: "What year did the United States declare independence?",
                a: "1776",
                possibleAns: ["1776", "1783", "1774", "1789"],
            },
            {
                q: "Which civilization built Machu Picchu?",
                a: "Inca",
                possibleAns: ["Inca", "Maya", "Aztec", "Olmec"],
            },
            {
                q: "Who was the first European explorer to reach India by sea?",
                a: "Vasco da Gama",
                possibleAns: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
            },
            {
                q: null,
                a: null,
                possibleAns: [null],
            },
        ],
    },
    Geography: {
        isShowing: false,
        questions: [
            {
                q: "What is the capital of Japan?",
                a: "Tokyo",
                possibleAns: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
            },
            {
                q: "Which is the largest ocean on Earth?",
                a: "Pacific Ocean",
                possibleAns: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            },
            {
                q: "What is the longest river in the world?",
                a: "Nile",
                possibleAns: ["Nile", "Amazon", "Mississippi", "Yangtze"],
            },
            {
                q: "Which country has the largest population?",
                a: "China",
                possibleAns: ["China", "India", "United States", "Indonesia"],
            },
            {
                q: "What is the highest mountain peak in the world?",
                a: "Mount Everest",
                possibleAns: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount McKinley"],
            },
            {
                q: "Which desert is the largest in the world?",
                a: "Antarctic Desert",
                possibleAns: ["Antarctic Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"],
            },
            {
                q: "What is the capital of Australia?",
                a: "Canberra",
                possibleAns: ["Canberra", "Sydney", "Melbourne", "Perth"],
            },
            {
                q: "Which country is both a continent and a country?",
                a: "Australia",
                possibleAns: ["Australia", "Russia", "Canada", "Brazil"],
            },
            {
                q: "What is the smallest country in the world?",
                a: "Vatican City",
                possibleAns: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            },
            {
                q: "Which continent is the most populous?",
                a: "Asia",
                possibleAns: ["Asia", "Africa", "Europe", "North America"],
            },
            {
                q: "What is the largest island in the world?",
                a: "Greenland",
                possibleAns: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
            },
            {
                q: "Which African country has the largest population?",
                a: "Nigeria",
                possibleAns: ["Nigeria", "Ethiopia", "Egypt", "Democratic Republic of the Congo"],
            },
            {
                q: null,
                a: null,
                possibleAns: [null],
            },
        ],
    },
    React: {
        isShowing: false,
        questions: [
            {
                q: "What function is used to update state in React?",
                a: "useState",
                possibleAns: ["useState", "setState", "updateState", "reactState"],
            },
            {
                q: "Which hook is used for side effects in React?",
                a: "useEffect",
                possibleAns: ["useEffect", "useSideEffect", "useChange", "useUpdate"],
            },
            {
                q: "What is the correct file extension for React components?",
                a: ".jsx",
                possibleAns: [".jsx", ".js", ".react", ".html"],
            },
            {
                q: "What is the name of the syntax used to write HTML in JavaScript?",
                a: "JSX",
                possibleAns: ["JSX", "HTML", "XML", "JSHTML"],
            },
            {
                q: "Which method is called after a component is rendered for the first time?",
                a: "componentDidMount",
                possibleAns: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentWillUpdate"],
            },
            {
                q: "What is the default port number where the React development server runs?",
                a: "3000",
                possibleAns: ["3000", "8080", "5000", "4200"],
            },
            {
                q: "Which package manager is commonly used with React?",
                a: "npm",
                possibleAns: ["npm", "yarn", "pip", "composer"],
            },
            {
                q: "What tool is commonly used to create a new React application?",
                a: "Create React App",
                possibleAns: ["Create React App", "React CLI", "React Builder", "New React App"],
            },
            {
                q: "Which hook is used to store a value that persists between renders?",
                a: "useRef",
                possibleAns: ["useRef", "useState", "useEffect", "useMemo"],
            },
            {
                q: "What is used to pass data from parent to child components?",
                a: "props",
                possibleAns: ["props", "state", "context", "children"],
            },
            {
                q: "Which method is used to prevent default form submission in React?",
                a: "preventDefault",
                possibleAns: ["preventDefault", "stopPropagation", "stopDefault", "preventSubmit"],
            },
            {
                q: "What is the purpose of the key prop in React lists?",
                a: "To uniquely identify elements",
                possibleAns: ["To uniquely identify elements", "To style elements", "To sort elements", "To filter elements"],
            },
            {
                q: null,
                a: null,
                possibleAns: [null],
            },
        ],
    },
    Coen: {
        isShowing: false,
        questions: [
            {
                q: "What is Coen's favorite way to spend a Sunday?",
                a: "Coding all day",
                possibleAns: ["Coding all day", "Playing chess", "Hanging with friends", "Sleeping in"],
            },
            {
                q: "What food could Coen eat every day without getting tired of it?",
                a: "Chicken",
                possibleAns: ["Chicken", "Carrots", "Beetroot", "Pasta"],
            },
            {
                q: "What's Coen's dream vacation destination?",
                a: "Japan",
                possibleAns: ["Japan", "Argentina", "France", "Thailand"],
            },
            {
                q: "What's Coen's favourite mixer?",
                a: "Vodka + Tap Water",
                possibleAns: ["Vodka + Sprite", "Vodka + Lime", "Vodka + Tap Water", "Vodka + Nothing"],
            },
            {
                q: "What would Coen's superhero power be?",
                a: "Predicting the future",
                possibleAns: ["Predicting the future", "Time travel", "Teleportation", "Flying"],
            },
            {
                q: "What's Coen's hidden talent?",
                a: "Cooking",
                possibleAns: ["Cooking", "Drawing", "Singing", "Dancing"],
            },
            {
                q: "What's Coen's favorite time of day?",
                a: "Early morning",
                possibleAns: ["Early morning", "Late night", "Afternoon", "Evening"],
            },
            {
                q: "What is Coen's favourite book of all time?",
                a: "East of Eden",
                possibleAns: ["Unbreable Lightness of Being", "1984", "East of Eden", "The Picture of Dorian Gray"],
            },
            {
                q: "What's Coen's most used phrase?",
                a: "'Drukqs!'",
                possibleAns: ["'But In Any Case...'", "'But Okay...'", "'Fuck You'", "'Drukqs!'"],
            },
            {
                q: "What programming language does Coen hate the most?",
                a: "R",
                possibleAns: ["R", "HTML/CSS", "C++", "MatLab"],
            },
            {
                q: "What is Coen's Favourite Album?",
                a: "Red Burns - Standing On The Corner",
                possibleAns: ["Red Burns - Standing On The Corner", "Crumbling - Mid Air Theif", "Since I Left You - Avalanches", "Graduation - Kanye West"],
            },
            {
                q: "What's Coen's biggest pet peeve?",
                a: "Loud vehicles",
                possibleAns: ["Slow walkers", "Loud vehicles", "People being late", "Untidy spaces"],
            },
            {
                q: null,
                a: null,
                possibleAns: [null],
            },
        ],
    },
};
