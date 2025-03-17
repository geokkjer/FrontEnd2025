const button = document.querySelector('button')

const firstHandler = () => {
    console.log('First Handler')
}
const secondHandler = () => {
    console.log('Second handler')
}
button.addEventListener('click', firstHandler)
button.addEventListener('click', secondHandler)

window.setTimeout(() => {
    button.removeEventListener('click', firstHandler)
    button.removeEventListener('click', secondHandler)
    console.log('Removed Event handlers')

}, 10000)
// button.onclick = () => {
//     console.log('Click managed using onclick property')
// }
