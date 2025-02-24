import { getDateStringForDisplay, getDateStringForStorage, getNowForStorage } from "./common.js";
import { selectAllOrNone, addPerson, togglePersonSelected, deletePerson, draw, changeDrawCount } from "./drawPageController.js";
import model from "./model.js";

function updateViewDrawPage() {
  let html = `<table>
                  <tr>
                    <td><input type="checkbox"
                               ${getChecked(model.inputs.drawPage.selectAll)}/></td>
                    <td><b>Personer</b></td>
                    <td>
                    </td>
                  </tr>`;
  for (let person of model.inputs.drawPage.list) {
    html += `<tr>
                  <td><input type="checkbox"                             
                             ${getChecked(person.isSelected)}"/></td>
                  <td>${person.name}</td>
                  <td><button class="litenKnapp"  onclick="deletePerson(${person.id})">x</button></td>
                </tr>`;
  }
  html += `<tr>
                <td></td>
                <td colspan="3">
                  <input 
                    size="10" 
                    type="text" 
                    value="${model.inputs.drawPage.newPersonName}"
                    />
                  <button id="addBtn" class="litenKnapp">legg til person</button>
                </td>
             </tr>
             <tr><td>&nbsp;</td></tr>
             <tr>
                <td colspan="3">
                  <button class="knapp" onclick="draw()">Trekk!</button>
                  <input 
                    type="number" 
                    size="1" 
                    value="${model.inputs.drawPage.drawCount}" 
                    onchange="model.inputs.drawPage.drawCount=parseInt(this.value)"
                    />
                  <button class="" onclick="changeDrawCount(1)">▲</button>
                  <button class="" onclick="changeDrawCount(-1)">▼</button>
                </td>
              </tr>
            </table>`;
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
  let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  const firstCheckbox = checkboxes.shift();
  // console.log(checkboxes, firstCheckbox);
  // onclick="selectAllOrNone(this.checked)"
  firstCheckbox.addEventListener('click', () => selectAllOrNone(firstCheckbox.checked));
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    // onclick="togglePersonSelected(${person.id})" 
    const person = model.inputs.drawPage.list[i];
    checkbox.addEventListener('click', () => togglePersonSelected(person.id));
  }
  let textbox = document.querySelector('input[type="text"]');
  // oninput="model.inputs.drawPage.newPersonName=this.value" 
  textbox.addEventListener('input', () => model.inputs.drawPage.newPersonName = textbox.value)

  // <button id="addBtn" class="litenKnapp" onclick="addPerson()">legg til person</button>
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addPerson);
  // let numberInput = document.querySelectorAll('input[type="number"]');
}

function getChecked(isSelected) {
  return isSelected ? 'checked="checked"' : '';
}
let buttons = Array.from(document.querySelectorAll('button[class="knapp fixed"]'))
console.log(buttons)
function setCurrentPage() {
  
  for (let i = 0; i < buttons.length; i++){
    let button = buttons[i]
    let currentPage = model.app.currentPage
    button.addEventListener('click')
  }
} 
export default updateViewDrawPage;