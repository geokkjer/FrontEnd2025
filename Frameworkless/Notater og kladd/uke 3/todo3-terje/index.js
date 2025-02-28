import getTodos from './getTodos.js'
import todosView from './view/todos.js'
import counterView from './view/counter.js'
import filtersView from './view/filters.js'
import terjeView from './view/terje.js'

import { add, renderRoot } from './registry.js'

add('todos', todosView)
add('counter', counterView)
add('filters', filtersView)
add('terje', terjeView)

const state = {
  todos: getTodos(),
  currentFilter: 'All', 
  terje: 'darkblue',
}

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp')
  const newMain = renderRoot(main, state)
  main.replaceWith(newMain)
})