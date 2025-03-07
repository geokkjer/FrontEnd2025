import model from "./GetNumbers.js";
export default function clickedNumber(index) {
    // model.count++;
    let blankIndex = findBlankIndex(index);
    if (blankIndex == null) return;
    model.numbers[blankIndex] = model.numbers[index];
    model.numbers[index] = null;
    // updateView();
}

function findBlankIndex(index) {
    for (let delta of [-3, -1, 1, 3]) {
        let newIndex = index + delta;
        if (newIndex < 0 || newIndex >= model.numbers.length) continue;
        if (model.numbers[newIndex] == null) {
            return newIndex;
        }
    }
    return null;
}

