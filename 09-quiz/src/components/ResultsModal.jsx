import { useContext } from "react"
import { createPortal } from "react-dom";

import { topicCols } from "../helper.js";
import { QuestionsContext } from "../context/questions-context.jsx";

export default function ResultsModal({ onClose, currentTopic, times, maxTime }) {

    const { questions } = useContext(QuestionsContext);
    const questionsResults = questions[currentTopic].questions.slice(0, -1);

    const accuracy = (times.reduce((acc, time) => {
        if (time > 0) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0) / times.length * 100).toFixed(2);

    const timesAns = times.map((time) => (time > 0) ? ((maxTime - time) / 1000).toFixed(2) : -1 );

    return createPortal(
        <dialog
            open
            onClose={onClose}
            className={`bg-my-purple 
flex flex-col items-center w-1/2 h-5/6 text-rose-100
rounded-[80px] ring-8 ${topicCols.ring.static[currentTopic]}
gap-10
`}
        >
            <div className="flex flex-row gap-5 text-5xl font-inconsolata font-bold mt-10">
                <h2 >Results</h2>
                <h2 className={topicCols.text.static[currentTopic]}>{currentTopic}</h2>
            </div>
            <div
                className={`
flex flex-col h-4/6 w-full overflow-y-scroll mb-5
text-2xl items-center text-center font-inconsolata
ring-4 ring-inset ring-my-teal ring-opacity-50
`}
            >
                <h3 className="mt-10 text-6xl font-bold text-my-teal">{accuracy}%</h3>
                <h3 className="font-inconsolata mb-10 font-semibold text-3xl" >Accuracy</h3>
                {questionsResults.map((item, idx) => {

                    const correct = (times[idx] > 0) ? true : false;

                    return (
                        <span
                            key={idx}
                            className={`
flex flex-col w-10/12 py-4 mb-10
border-y-2 ${correct ? "border-green-400" : "border-red-600"}
text-2xl
`}
                        >
                            <p className={`text-4xl font-extrabold mb-10 ${correct ? "text-green-400" : "text-red-600"}`}>{correct ? "Correct" : "Wrong"}</p>
                            <p className={`font-bold ${topicCols.text.static[currentTopic]}`}>Question:</p>
                            <p className="mb-6">{item.q}</p>
                            <p className={`font-bold ${topicCols.text.static[currentTopic]}`}>Correct Answer:</p>
                            <p>{item.a}</p>
                            {correct && (
                                <div className="mt-6">
                            <p className={`font-bold ${topicCols.text.static[currentTopic]}`}>Answered In:</p>
                                <p>{timesAns[idx]}s</p> 
                                </div>
                            )
                            }

                        </span>);
                })}
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
