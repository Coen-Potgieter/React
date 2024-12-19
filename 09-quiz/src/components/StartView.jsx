import { topicCols } from "../helper.js";

export default function StartView({ currentTopic, onStart }) {
    return (

        <>
            <div className="flex flex-col items-center font-inconsolata font-bold">
                <h2 className="text-3xl">
                    Current Topic: 
                </h2>
                <h2 className="text-4xl"> 
                    <u className={topicCols.text.static[currentTopic]}>{currentTopic}</u>
                </h2>
            </div>
            <button
                onClick={() => onStart("questions")}
                className={`
mb-5 mt-10 size-fit px-5 py-2
rounded-full ring-4 ${topicCols.ring.static[currentTopic]}
text-3xl font-semibold ${topicCols.text.static[currentTopic]}
hover:font-extrabold hover:underline
`}
            >
                Begin Quiz
            </button>

        </>
    );
}
