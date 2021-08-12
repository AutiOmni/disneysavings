// PHOTO SLIDER

const slides = $('.slide')
const container = $('#slideshow')



let idx = 3
let interval = setInterval(run, 3000)

function run() { 

    container.css('transition', 'transform linear 1000ms')
    container.css('transform', 'translateX(-60vw)')

        setTimeout(() => {

            container.find('img:first').remove()
            container.css('transition', 'none')
            container.css('transform', 'translateX(0vw)')

            $('<img>', {
                "class": "slide",
                "src": `imgs/house${idx}.png`
            }).appendTo(container)

           

        if (idx === 6) {
        idx = 1
        } else {
            idx++
        }
    }, 1500)
}




/*
function changeImg() {

    if (idx === slides.length) {
        container.style.transition = 'none'
    } else if (idx !== slides.length) {
        container.style.transition = 'all ease-in-out 750ms'
    }

    if (idx > slides.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = slides.length - 1
    }
    container.style.transform = `translateX(${idx * -60}vw)`
}
*/
// MODAL POP UP

const derp = $('.derp')

$(window).on('scroll', checkBox) 

function checkBox(){
     const trigger = window.innerHeight / 5 * 3.5

    derp.each(function() {
        let boxTop = this.getBoundingClientRect().top


        if (boxTop < trigger) {
            $(this).addClass('show')
        } else {
            $(this).removeClass('show')
        }

    })

}

 const inqBtn = $('.inquire')
 const modal = $('#modal-cont')
 const closeModal = $('#close-modal')
 const modalForm = $('.modal')

inqBtn.each(function() {
    $(this).click(function() {
        modal.addClass('showed')
        $(document).css('overflowY', 'hidden')
    })
})


modal.click(function(e) {
    if(e.target === modal) {
        $(document).css('overflowY', '')
        modal.addClass('showed')
    }
})

closeModal.click(function() {
    modal.removeClass('showed')
    $(document).css('overflowY', '')
})


// PHOTO CHOICE SELECT

const photoChoices = $('.photo-choices')

const mainPhoto = $('.main-photo-choice')


function pictureChoiceDisplay() {
    photoChoices.each(function() {
        $(this).hover(function() {
            if ($(this).hasClass('photo-choices')) {
                var source = $(this).attr('src')
                $(this.parentElement.previousElementSibling).css("background-image", `url(${source})`)
            }
        })
    })
}

pictureChoiceDisplay()


const slider = $('#miles-from-park')
const sliderOut = $('#distance-amount')


    slider.on('input', function() {
        sliderOut.text(`${slider.val()} miles`)
    })

    // form validation

    const contactEmail = $('#email')
    const contactPhone = $('#phone')
    const submitBtn = $('#submit-form')

    function mySubmitFunction(e) {
        phoneNumber(contactPhone.val())
        e.preventDefault();
        alert('Please provide an Email and Phone Number.')
        return false;
    }

    function phoneNumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if(inputtxt.val().match(phoneno)) {
      return true;
        } else {
        return false;
        }
    }

    submitBtn.on('click', function(e) {
            
           if (contactEmail.value === '' || contactPhone.value === '') {
               mySubmitFunction(e)
             }
    })

