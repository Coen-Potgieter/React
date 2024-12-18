


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
