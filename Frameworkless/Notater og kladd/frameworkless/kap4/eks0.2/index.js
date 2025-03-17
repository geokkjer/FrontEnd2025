const button = document.querySelector('button')
const div = document.querySelector('div')

div.addEventListener('click', e => {
    console.log('Div clicked', e)
}, false)

button.addEventListener('click', e => {
    // e.stopPropagation()
    console.log('button clicked', e)
}, false)