import { useContext } from "react";
import { QuestionsContext } from "../context/questions-context.jsx";


import { topicCols } from "../helper.js";
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
${topicCols.bg.hover[topic]}`}
                >
                    {topic}
                </button>
            ))}
        </section>
    )
}
