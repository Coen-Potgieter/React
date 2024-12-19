import { useEffect, useRef, useContext } from "react"
import { createPortal } from "react-dom";

import { topicCols } from "../helper.js";
import { QuestionsContext } from "../context/questions-context.jsx";

function ResultsModal({ isOpen, onClose, currentTopic }) {

    console.log(isOpen);
    const { questions } = useContext(QuestionsContext);
    const completedQuestions = questions[currentTopic].questions.slice(0, -1);


    const dialogRef = useRef();
    useEffect(() => {
        if (isOpen) {

            dialogRef.current.showModal();
            console.log("Opened");
        } else {
            dialogRef.current.close();
            console.log("Closed Modal")
        }

    }, [isOpen]);

    return createPortal(
        <dialog
            ref={dialogRef}
            onClose={onClose}
            className={`bg-my-purple 
flex flex-col items-center w-2/5 h-5/6 
rounded-[80px] ring-8 ${topicCols.ring.static[currentTopic]}
gap-10
`}
        >
            <div className="flex flex-row gap-5 text-5xl font-inconsolata font-bold mt-10">
                <h2 className="text-rose-100">Results</h2>
                <h2 className={topicCols.text.static[currentTopic]}>{currentTopic}</h2>
            </div>
            <div>
                {completedQuestions.map((item, idx) => (
                    <span
                        key={idx}
                    >
                        <p>questiosn</p>
                        <p>Answer</p>
                        <p>time</p>
                    </span>
                ))}
            </div>
        </dialog>, document.getElementById("modal")
    );
}
export default ResultsModal;
