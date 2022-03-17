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
formButtonBackArr.forEach((item, index) => {
    console.log(formButtonBackArr[index])
    item.addEventListener('click', (e) => {
        if (e.target == formButtonBackArr[0]) {
            stepsArr[0].classList.add('active')
            stepsArr[1].classList.remove('active');
            console.log('1')
        }
        else {
            stepsArr.forEach(item => {
                item.classList.remove('active')
            })
            stepsArr[index].classList.add('active');
        }
        if (e.target == formButtonBackArr[5]) {
            stepsArr.forEach(item => {
                item.classList.remove('active')
            })
            stepsArr[0].classList.add('active');
        }
    })
})
formButtonNextArr.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        stepsArr[index + 1].classList.add('active')
        stepsArr[index].classList.remove('active');
    })
})
stepsArr.forEach(item => {

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
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});
// END SWIPER