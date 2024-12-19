import { useContext } from "react"
import { createPortal } from "react-dom";

import { topicCols } from "../helper.js";
import { QuestionsContext } from "../context/questions-context.jsx";

export default function ResultsModal({ onClose, currentTopic, times }) {

    const { questions } = useContext(QuestionsContext);
    const completedQuestions = questions[currentTopic].questions.slice(0, -1);

    return createPortal(
        <dialog
            open
            onClose={onClose}
            className={`bg-my-purple 
flex flex-col items-center w-2/5 h-5/6 text-rose-100
rounded-[80px] ring-8 ${topicCols.ring.static[currentTopic]}
gap-10
`}
        >
            <div className="flex flex-row gap-5 text-5xl font-inconsolata font-bold mt-10">
                <h2 >Results</h2>
                <h2 className={topicCols.text.static[currentTopic]}>{currentTopic}</h2>
            </div>
            <div
                className="flex flex-col text-2xl h-4/6 w-full items-center text-center"
            >
                {completedQuestions.map((item, idx) => (
                    <span
                        key={idx}
                        className=""
                    >
                        <p>{completedQuestions[idx].q}</p>
                        <p>{completedQuestions[idx].a}</p>
                        <p>{(times[idx] > 0) ? (times[idx] / 1000).toString() + "s" : "WRONG CUNT" }</p>
                    </span>
                ))}
            </div>
            <button
                onClick={onClose}
                className={`
ring-4 rounded-full px-5 py-1 ${topicCols.ring.static[currentTopic]}
text-4xl font-semibold 
hover:font-extrabold ${topicCols.text.hover[currentTopic]}

`}

            >
                Close
            </button>

        </dialog>,
        document.getElementById('modal')
    );
}
