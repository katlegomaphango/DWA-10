console.log('it works')

const count = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

console.log(count)

add.addEventListener('click', () => {
    count.value++
})

subtract.addEventListener('click', () => {
    count.value--
})