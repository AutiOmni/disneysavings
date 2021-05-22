// PHOTO SLIDER

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

// MODAL POP UP

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


 closeModal.addEventListener('click', () => {
    modal.classList.remove('showed')
 })



// PHOTO CHOICE SELECT

const photoChoices = document.querySelectorAll('.photo-choices')

const mainPhoto = document.querySelectorAll('.main-photo-choice')

function pictureChoiceDisplay() {
    for (photos of photoChoices) {
        photos.addEventListener('mouseover', function(e) {
            if (e.target.classList.contains('photo-choices')) {
                var source = e.target.getAttribute('src')
                var pic = e.target.parentElement.previousElementSibling
                pic.style.backgroundImage = `url(${source})`
            }
        })
    }
}

pictureChoiceDisplay()


const slider = document.getElementById('distance')
const sliderOut = document.getElementById('distance-amount')


    slider.addEventListener('input', () => {
        sliderOut.innerText = `${slider.value} miles`
    })

    // form validation

    const contactEmail = document.getElementById('email')
    const contactPhone = document.getElementById('phone')
    const submitBtn = document.getElementById('submit-form')

    function mySubmitFunction(e) {
        e.preventDefault();
        alert('Please provide an Email or Phone Number.')
        return false;
    }

    submitBtn.addEventListener('click', (e) => {
        if (contactEmail.value === '' && contactPhone.value === '') {
         mySubmitFunction(e)
        }
    })

