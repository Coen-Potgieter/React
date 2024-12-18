import { useContext, useState } from "react";

import Tabs from "./Tabs.jsx";
import Question from "./Question.jsx";
import { QuestionsContext } from "../context/questions-context.jsx";
import { findIsShowingTopic } from "../helper.js";

const topicCols = {
    History: "text-history-col",
    Geography: "text-geography-col",
    React: "text-react-col",
    Coen: "text-coen-col",
}

export default function QuestionsContainer({ topics }) {

    const { questions } = useContext(QuestionsContext);
    const currentTopic = findIsShowingTopic(questions);

    // This is now an array of objects `{ q: "", a: "", time: -1}`
    const questionData = questions[currentTopic].questions;
    
    // This state will manage the times it took to complete each question
    const [ completedTimes, setCompletedTimes ] = useState([]);

    function addTime(time) {
        setCompletedTimes((prevTimes) => {
            const newTimes = [...prevTimes];
            newTimes.push(time);
            return newTimes;
        })
    }

    function resetTimes() {
        setCompletedTimes([]);
    }

    return (
        <section 
            className={`bg-radial-gradient bg-opacity-50 
flex flex-col h-fit w-1/2 mx-auto mt-10 gap-5
items-center 
`}
        >
            <Tabs topics={topics}/>
            <h2
                className="font-inconsolata text-4xl font-bold"
            >
                Show Questions for <u className={topicCols[currentTopic]}>{currentTopic}</u>
            </h2>

            <Question 
                questionNum={completedTimes.length}
            />
        </section>
    );
}
