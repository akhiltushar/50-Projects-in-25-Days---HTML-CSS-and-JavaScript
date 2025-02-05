const serach = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=> {
    serach.classList.toggle('active')
    input.focus()
})