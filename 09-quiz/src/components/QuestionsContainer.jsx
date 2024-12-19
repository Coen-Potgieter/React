import { useContext, useState } from "react";

import Tabs from "./Tabs.jsx";
import Question from "./Question.jsx";
import { QuestionsContext } from "../context/questions-context.jsx";
import { findIsShowingTopic, topicCols } from "../helper.js";


export default function QuestionsContainer({ topics }) {

    // This state will manage the times it took to complete each question
    const [ completedTimes, setCompletedTimes ] = useState([]);
    const [ showingQuestions, setShowingQuestions ] = useState(false);
    const { questions } = useContext(QuestionsContext);


    const currentTopic = findIsShowingTopic(questions);

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

    function handleToggleShowQeustions() {
        setShowingQuestions((prevState) => !prevState);
    }

    return (
        <section 
            className={`bg-radial-gradient
flex flex-col h-fit w-1/2 mx-auto mt-10 gap-5
items-center 
ring-4 ${topicCols.ring.static[currentTopic]} ring-opacity-80
`}
        >
            {!showingQuestions && <Tabs topics={topics}/>}
            <div className="flex flex-col items-center font-inconsolata font-bold">
                <h2 className="text-3xl">
                    Current Topic: 
                </h2>
                <h2 className="text-4xl"> 
                    <u className={topicCols.text.static[currentTopic]}>{currentTopic}</u>
                </h2>
            </div>

            {!showingQuestions && (
                <button
                    onClick={handleToggleShowQeustions}
                    className={`
mb-5 mt-10 size-fit px-5 py-2
rounded-full ring-4 ${topicCols.ring.static[currentTopic]}
text-3xl font-semibold ${topicCols.text.static[currentTopic]}
hover:font-extrabold hover:underline
`}
                >
                    Begin Quiz
                </button>
            )}
            {showingQuestions && <Question questionNum={completedTimes.length} onAddTime={addTime} />}
        </section>
    );
}
