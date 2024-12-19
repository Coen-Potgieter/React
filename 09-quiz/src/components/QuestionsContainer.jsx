import { useContext, useState, useEffect } from "react";

import Tabs from "./Tabs.jsx";
import StartView from "./StartView.jsx";
import QuestionView from "./QuestionView.jsx";
import EndView from "./EndView.jsx";
import ResultsModal from "./ResultsModal.jsx";
import { QuestionsContext } from "../context/questions-context.jsx";
import { findIsShowingTopic, topicCols } from "../helper.js";


export default function QuestionsContainer({ topics }) {

    // This state will manage the times it took to complete each question
    const [ completedTimes, setCompletedTimes ] = useState([]);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ viewMode, setViewMode ] = useState("start");
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

    function handleOpenModal() {
        setModalIsOpen(true);
    }
    function handleCloseModal() {
        setModalIsOpen(false);
    }

    function handleChangeVeiwMode(viewMode) {
        if (viewMode === "results") {
            handleOpenModal();
            viewMode = "start";
        } else if (viewMode === "questions") {
            setCompletedTimes([]);
        }
        setViewMode(viewMode);
    }

    useEffect(() => {
        if (completedTimes.length === (questions[currentTopic].questions.length - 1)) {
            handleChangeVeiwMode("end");
        }

    }, [completedTimes]);



    return (
        <>
            <ResultsModal isOpen={modalIsOpen} onClose={handleCloseModal} currentTopic={currentTopic}/>
            <section 
                className={`bg-radial-gradient
flex flex-col h-fit w-1/2 mx-auto mt-10 gap-5
items-center 
ring-4 ${topicCols.ring.static[currentTopic]} ring-opacity-80
`}
            >
                {(viewMode === "start") && <Tabs topics={topics}/>}
                {(viewMode === "start") && <StartView currentTopic={currentTopic} onStart={handleChangeVeiwMode} />}
                {(viewMode === "questions") && <QuestionView questionNum={completedTimes.length} onAddTime={addTime} />}
                {(viewMode === "end") && <EndView currentTopic={currentTopic} onChangeView={handleChangeVeiwMode} />}
            </section>
        </>
    );
}








