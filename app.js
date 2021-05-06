const slides = document.querySelectorAll('.slide')
const container = document.getElementById('slideshow')


let idx = 0
let interval = setInterval(run, 3000)

function run() {
    idx++
    changeImg()
}


function changeImg() {
    if (idx > slides.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = slides.length - 1
    }
    container.style.transform = `translateX(${idx * -100}%)`
}


const coa = document.querySelector('.coa')
const derp = document.querySelectorAll('.derp')

window.addEventListener('scroll', checkBox) 

function checkBox(){
     const trigger = window.innerHeight / 5 * 3.5

     derp.forEach(box => {
         const boxTop = coa.getBoundingClientRect().top
         if (boxTop < trigger) {
             box.classList.add('show')
         } else {
             box.classList.remove('show')
         }
     })
 }

 const inqBtn = document.querySelectorAll('.inquire')
 const modal = document.getElementById('modal-cont')
 const closeModal = document.getElementById('close-modal')

for (const btn of inqBtn) {
    btn.addEventListener('click', () => {
        modal.classList.add('showed')
    })
}
/*
 inqBtn.addEventListener('click', () => {
     modal.classList.add('showed')
 })
*/
 closeModal.addEventListener('click', () => {
    modal.classList.remove('showed')
 })



