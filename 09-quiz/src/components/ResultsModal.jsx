import { useEffect, useRef, useContext } from "react"
import { createPortal } from "react-dom";

import { topicCols } from "../helper.js";
import { QuestionsContext } from "../context/questions-context.jsx";

function ResultsModal({ isOpen, onClose, currentTopic }) {

    console.log(isOpen);
    const { questions } = useContext(QuestionsContext);


    const dialogRef = useRef();
    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
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
            <h2>SOIfnSv</h2>
        </dialog>, document.getElementById("modal")
    );
}
export default ResultsModal;
