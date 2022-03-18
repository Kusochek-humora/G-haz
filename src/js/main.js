

// START BURGER
const body = document.querySelector('body'),
    burgerButton = document.querySelector('.burger__button'),
    burgerWrapper = document.querySelector('.burger__nav'),
    outterBurger = document.querySelector('.outter'),
    burgerLinks = document.querySelectorAll('.burger__list-link');

burgerButton.addEventListener('click', (e) => {
    body.classList.toggle('active')
    burgerButton.classList.toggle('active');
    burgerWrapper.classList.toggle('active');
    outterBurger.classList.toggle('active');
})
outterBurger.addEventListener('click', (e) => {
    body.classList.remove('active')
    burgerButton.classList.remove('active');
    burgerWrapper.classList.remove('active');
    outterBurger.classList.remove('active');
})

burgerLinks.forEach(item => {
    burgerWrapper.addEventListener('click', (e) => {
        if (e.target === item) {
            body.classList.remove('active');
            burgerButton.classList.remove('active');
            burgerWrapper.classList.remove('active');
            outterBurger.classList.remove('active');
        }
    })
})
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        body.classList.remove('active');
        burgerButton.classList.remove('active');
        burgerWrapper.classList.remove('active');
        outterBurger.classList.remove('active');
    }
    if (window.innerWidth > 499) {
        swiper.update()
    }
})

// END BURGER





// START HOVER FEATURES BLOCK
const featureItemArr = document.querySelectorAll('.features__list-item');

function handleMouseEnter(el) {
    const children = el.parentNode.children;
    for (const child of children) {
        if (child !== el) {
            child.classList.remove("hover");
        }
    }
    el.classList.add("hover");
}
featureItemArr.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        handleMouseEnter(el);
    });
});
// END HOVER


// START FORM STEPS

const stepsArr = document.querySelectorAll('.step'),
    formButtonNextArr = document.querySelectorAll('.form__button'),
    formButtonBackArr = document.querySelectorAll('.back');
formButtonBackArr.forEach((item, index) => {// back
    item.addEventListener('click', (e) => {
        if (e.target === formButtonBackArr[0]) {
            stepsArr[0].classList.add('active')
            stepsArr[1].classList.remove('active');
        }
        else {
            stepsArr.forEach(item => {
                item.classList.remove('active')
            })
            stepsArr[index].classList.add('active');
        }
        if (e.target === formButtonBackArr[formButtonBackArr.length - 1]) {
            stepsArr.forEach(item => {
                item.classList.remove('active')
            })
            stepsArr[0].classList.add('active');
        }
    })
})
formButtonNextArr.forEach((item, index) => { // next 
    item.addEventListener('click', (e) => {
        stepsArr[index + 1].classList.add('active')
        stepsArr[index].classList.remove('active');
    })
})
// END FORM STEPS






// START ACCORDEON BLOCK PLATES
const platesButtons = document.querySelectorAll('.plates__list-button'),
    platesTexts = document.querySelectorAll('.plates__side-text'),
    platesImages = document.querySelectorAll('.plates__picture-image');

platesButtons.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        platesTexts.forEach(item => {
            item.classList.remove('active')
        })
        platesImages.forEach(item => {
            item.classList.remove('active')
        })
        platesButtons.forEach(item => {
            item.classList.remove('active')
        })
        platesTexts[index].classList.add('active');
        platesImages[index].classList.add('active');
        platesButtons[index].classList.add('active');
    })
})
// END ACCORDEON



// START SWIPER BLOCK COMMENTS
const swiper = new Swiper('.comments__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.comments__pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },

        499: {
            direction: 'horizontal',
            slidesPerView: 1,
            slidesPerGroup: 1,
        }, 0: {
            direction: 'vertical',
            slidesPerView: 2,
            slidesPerGroup: 2,
            effect: 'fade'
        }

    }
});
// END SWIPER


//POPUPS

$('.open-form').magnificPopup({ removalDelay: 300, mainClass: 'mfp-fade' });
// $('.close-popup').click(function() {
//     $.magnificPopup.close();
// });

$('.gallery__box-item').magnificPopup({ type: 'image', preload: [0, 2], mainClass: 'mfp-fade' });

//END POPUPS