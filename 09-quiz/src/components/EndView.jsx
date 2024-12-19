import { topicCols } from "../helper.js";

export default function EndView({ currentTopic, onChangeView }) {
    return (
        <>
            <div
                className="flex flex-col gap-4 mt-5 text-center items-center font-bold"
            >
                <h2
                    className={`text-5xl ${topicCols.text.static[currentTopic]}`}
                >
                    {currentTopic}
                </h2>
                <h2
                    className="text-4xl"
                >
                    Questions Completed!
                </h2>
            </div>

            <div 
                className="flex flex-row w-full justify-evenly text-2xl font-semibold mt-10 mb-7"
            >
                <button
                    onClick={() => onChangeView("start")}
                    className={`
ring-4 rounded-full w-1/6 h-fit py-3 ring-my-teal 
hover:font-extrabold ${topicCols.ring.hover[currentTopic]}
`}
                >
                    Main Menu
                </button>
                <button
                    onClick={() => onChangeView("results")}
                    className={`
ring-4 rounded-full w-1/6 h-fit py-3 ring-my-teal 
hover:font-extrabold ${topicCols.ring.hover[currentTopic]}
`}
                >
                    See Results
                </button>
            </div>
        </>
    );
}
