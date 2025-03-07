import model from "./GetNumbers.js"
import numberView from './view/numbers.js'
import counterView from "./view/counter.js"
import registry from './registry.js'
import clickedNumber from "./controller.js"


registry.add('numbers', numberView)
registry.add('counter', counterView)


const state = {
    numbers: model.numbers,
    count: model.count,
    clickedNumber: clickedNumber()
}


window.requestAnimationFrame(() => {
    const main = document.querySelector('.slidingPuzzle')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
  })
  