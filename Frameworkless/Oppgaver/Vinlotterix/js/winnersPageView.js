import {getDateStringForDisplay, getDateStringForStorage, getNowForStorage} from "./common.js";
import model from "./model.js";

function updateViewWinnersPage() {
    const dayNames = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
    let html = '';
    let cssClass = 'førsteTrekning';
    for (let draw of model.draws) {
        const time = new Date(draw.time);
        const dateText = getDateStringForDisplay(time);
        const dayName = dayNames[time.getDay()];
        const winners = draw.winners;
        const participants = draw.participants;
        const winnerWord = winners.length === 1 ? 'Vinneren' : 'Vinnerne';
        html += `<p>
                    <small>${dayName} ${dateText}</small><br/>
                    <b class="${cssClass}">${winnerWord} er ${createTextList(winners)}!</b><br/>
                    <small>Trukket fra totalt ${participants.length} personer: ${createTextList(participants)}</small>
                </p>`;
        cssClass = '';
    }
    document.getElementById('app').innerHTML = `
        <div class="page">
            <div class="header">
                Vinlotterix 🍷
            </div>
            <div class="innhold">${html}</div>
            <div class="meny">
                <button class="knapp fixed" onclick="model.app.currentPage='draw'; updateView()">Personer</button><br />
                <button class="knapp fixed" onclick="model.app.currentPage='winners'; updateView()">Vinnere</button><br />
            </div>
        </div>    
    `;
}

function createTextList(liste) {
    if (liste.length === 0) return '';
    if (liste.length === 1) return liste[0];

    const tekstListe = liste.join(', ');
    const indexSisteKomma = tekstListe.lastIndexOf(',');
    return tekstListe.substr(0, indexSisteKomma) +
        ' og ' + tekstListe.substr(indexSisteKomma + 1);
}

export default updateViewWinnersPage;