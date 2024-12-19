import { useContext, useRef } from "react";

import { shuffleArray } from "../helper.js";
import { QuestionsContext } from "../context/questions-context.jsx";
import { findIsShowingTopic, topicCols } from "../helper.js";
import ProgressBar from "./ProgressBar.jsx";

const MAX_TIME = 3000;
export default function Question({ questionNum, onAddTime }) {

    const progressRef = useRef();
    const { questions } = useContext(QuestionsContext);
    const currentTopic = findIsShowingTopic(questions);

    const data = questions[currentTopic].questions[questionNum];
    const correctAns = questions[currentTopic].questions[questionNum].a;

    function handleAnswerSubmit(ans) {

        // Check if given Answer is correct
        if (ans === correctAns) {
            // CORRECT

            // Fetch the time left on progress bar using refs, accessing the value prop
            const timeLeft = progressRef.current.value;
            // Set the time
            onAddTime(timeLeft);
        } else {
            // INCORRECT
            onAddTime(-1);
        }


    }

    // Here we chaning the state value without calling a state updatin function?
    shuffleArray(data.possibleAns);
    return (
        <section
            className="flex flex-col w-5/6 items-center mb-10 bg-white bg-opacity-10 rounded-xl"
        >
            <h3
                className="text-3xl my-5"
            >
                {data.q}
            </h3>
            <div
                className={`
grid grid-cols-2 grid-rows-2 gap-5
mx-auto w-11/12 mb-5
`}
            >
                {data.possibleAns.map((choice) => (
                    <button
                        key={choice}
                        onClick={() => handleAnswerSubmit(choice)}
                        className={`
text-2xl rounded-xl ring-4 ring-my-purple
hover:underline ${topicCols.text.hover[currentTopic]}
`}
                    >
                        {choice}
                    </button>
                ))}
            </div>
            <ProgressBar isNewQuestion={questionNum} maxTime={MAX_TIME} className={currentTopic} ref={progressRef}/>
        </section>
    );
}
