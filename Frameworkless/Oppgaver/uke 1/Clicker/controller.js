import { points, pointsPerClick, smileyIndex } from "./model.js"
import updateView from "./view.js";

// controller
 doClick = () => {
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    updateView();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    updateView();
}
export default { doClick, buyUpgrade };