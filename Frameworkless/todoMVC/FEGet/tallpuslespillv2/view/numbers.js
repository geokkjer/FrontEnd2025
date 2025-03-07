
const getNumberElement = (number, index) => {
  
  return `<div onclick="clickedNumber(${index})" id="square">${number ?? ''}</div>`;
};

export default (targetElement, { numbers }) => {
  const newNumbersList = targetElement.cloneNode(true);
  const numbersElements = numbers.map(getNumberElement).join("");
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
