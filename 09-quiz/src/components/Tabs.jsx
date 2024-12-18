import { useContext } from "react";
import { QuestionsContext } from "../context/questions-context.jsx";

export const topicCols = {
    History: "hover:bg-history-col",
    Geography: "hover:bg-geography-col",
    React: "hover:bg-react-col",
    Coen: "hover:bg-coen-col",
}

export default function Tabs() {

    const { questions, handleChangeTopic } = useContext(QuestionsContext);

    const topics = Object.keys(questions);

    return(
        <section
            className="flex justify-stretch w-full"
        >
            {topics.map((topic) => (
                <button
                    key={topic}
                    onClick={() => handleChangeTopic(topic)}
                    className={`
w-full text-xl p-2 
${topicCols[topic]}`}
                >
                    {topic}
                </button>
            ))}
        </section>
    )
}
