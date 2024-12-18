import { createContext, useReducer } from "react";

import { QUESTIONS } from "../questions-data.js";


export const QuestionsContext = createContext(QUESTIONS);


function questionsReducer(state, action) {

    // Note: `state` is the questionsState value, ie. `QUESTIONS`, NOT `ctxValue` below
    if (action.type === "CHANGE_TOPIC") {
        // Cool way of making a deep copy for complex objects
        let updatedQuestions = JSON.parse(JSON.stringify(state));

        // Collect keys
        const keys = Object.keys(updatedQuestions);
        // Loop through all the keys and alter isShowing to `false`
        for (let key of keys){
            updatedQuestions[key].isShowing = false;
        }

        // Change target Topic to isShowing
        updatedQuestions[action.payload.newTopic].isShowing = true;
        // Change all topics to False
        return updatedQuestions;
    }

}
export default function QuestionsContextProvider({ children }) {

    const [ questionsState, questionsDispatch ] = useReducer(questionsReducer, QUESTIONS);

    function handleChangeTopic(newTopic) {
        // Before re-rendering Check if it is a new topic
        if (questionsState[newTopic].isShowing) {
            // TODO: Maybe Add a Modal, Prolly not though
            console.log("Already Showing this Topic");
            return;
        }
        // Else Change the topic
        questionsDispatch({
            type: "CHANGE_TOPIC",
            payload: {
                newTopic,
            }
        });
    }

    const ctxValue = {
        questions: questionsState,
        handleChangeTopic: handleChangeTopic,
    }
    
    return (
        <QuestionsContext.Provider value={ctxValue}>
            {children}
        </QuestionsContext.Provider>
    );
}
