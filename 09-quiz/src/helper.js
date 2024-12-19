


export function findIsShowingTopic(questions) {

    // Collect the keys
    const keys = Object.keys(questions);

    // Loop through keys returning key when isShowing is true
    for (const key of keys) {
        if (questions[key].isShowing) {
            return key;
        }
    }
}

export function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

}

export const topicCols = {
    text: {
        static: {
            History: "text-history-col",
            Geography: "text-geography-col",
            React: "text-react-col",
            Coen: "text-coen-col",
        },
        hover: {
            History: "hover:text-history-col",
            Geography: "hover:text-geography-col",
            React: "hover:text-react-col",
            Coen: "hover:text-coen-col",
        },
    },
    bg: {
        static: {
            History: "bg-history-col",
            Geography: "bg-geography-col",
            React: "bg-react-col",
            Coen: "bg-coen-col",
        },
        hover: {
            History: "hover:bg-history-col",
            Geography: "hover:bg-geography-col",
            React: "hover:bg-react-col",
            Coen: "hover:bg-coen-col",
        },
    },
    ring: {
        static: {
            History: "ring-history-col",
            Geography: "ring-geography-col",
            React: "ring-react-col",
            Coen: "ring-coen-col",
        },
        hover: {
            History: "hover:ring-history-col",
            Geography: "hover:ring-geography-col",
            React: "hover:ring-react-col",
            Coen: "hover:ring-coen-col",
        },
    },
}
