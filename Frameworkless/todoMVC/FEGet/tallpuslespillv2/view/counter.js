// const getCount = isClicked => {
//     const counter =  isClicked => count++
  
//     if (count === 1) {
//       return '1 Trekk'
//     }
  
//     return `${count} Trekk`
//   }
  

const getCount = (count) => {
  return count === 1 ? "1 Trekk" : `${count} Trekk`;
};


  export default (targetElement, { count }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getCount(count)
    return newCounter
  }