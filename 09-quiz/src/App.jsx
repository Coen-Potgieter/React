import QuestionsContextProvider from "./context/questions-context.jsx";
import Header from "./components/Header.jsx";
import QuestionsContainer from "./components/QuestionsContainer.jsx";

const TOPICS = [
    "History",
    "Geography",
    "Gaming",
]
function App() {

    return (
        <QuestionsContextProvider>
            <Header />
            <QuestionsContainer topics={TOPICS}/>
        </QuestionsContextProvider>
    );
}

export default App;
