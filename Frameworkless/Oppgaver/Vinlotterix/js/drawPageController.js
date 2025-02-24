import model from "./model.js";

function selectAllOrNone(selectAll) {
  model.inputs.drawPage.selectAll = selectAll;
  for (let person of model.inputs.drawPage.list) {
    person.isSelected = selectAll;
  }
  window.updateView();
}

function addPerson() {
  const name = model.inputs.drawPage.newPersonName;
  const maxId = model.inputs.drawPage.list.map(p => p.id).reduce((max, value) => Math.max(max, value), -1);
  model.inputs.drawPage.list.push(
    { id: maxId + 1, name: name, isSelected: true });
  window.updateView();
}

function togglePersonSelected(id) {
  const person = findPerson(id);
  person.isSelected = !person.isSelected;
  window.updateView();
}

function deletePerson(id) {
  model.inputs.drawPage.list = model.inputs.drawPage.list.filter(p => p.id !== id);
  window.updateView();
}

function draw() {
  let count = model.inputs.drawPage.drawCount;
  const selectedPeople = model.inputs.drawPage.list.filter(p => p.isSelected);
  const indexes = Array.from(selectedPeople.keys());
  const winners = [];
  while (count-- > 0 && indexes.length > 0) {
    const randomIndex = Math.floor(Math.random() * indexes.length);
    const index = indexes.splice(randomIndex, 1);
    winners.push(selectedPeople[index].name);
  }
  model.draws.unshift({
    winners: winners,
    time: getNowForStorage(),
    participants: selectedPeople.map(p => p.name)
  });
  model.app.currentPage = 'winners';
  window.updateView();
}

function changeDrawCount(delta) {
  model.inputs.drawPage.drawCount =
    Math.max(1, model.inputs.drawPage.drawCount + delta);
  window.updateView();
}

function findPerson(id) {
  return model.inputs.drawPage.list.find(p => p.id === id);
}

export { selectAllOrNone, addPerson, togglePersonSelected, deletePerson, draw, changeDrawCount };