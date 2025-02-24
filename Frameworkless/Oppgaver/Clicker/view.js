import { points, smileyIndex }from "./model.js"
import {doClick, buyUpgrade} from "./controller.js"


function updateView() {
   
    var smiley = smileyIndex == 0 ? "😀" : "😁";
    document.getElementById("app").innerHTML = `
            <div id="image" onclick="doClick()">${smiley}</div>
            <div id="pointsInfo">${points}</div>
            <button onclick="buyUpgrade()">Kjøp oppgradering (10 poeng)</button>
        `;
  }

  export default updateView