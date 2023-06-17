console.log('it works')

const count = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')
const alertMsg = document.querySelector('sl-alert')

add.addEventListener('click', () => {
    count.value++
})

subtract.addEventListener('click', () => {
    count.value--
})

reset.addEventListener('click', () => {
    count.value = 0

    alertMsg.open = true
    setTimeout(() => { alertMsg.open = false }, 3000)
})