let sliders = document.querySelectorAll(".slider__item")
let current = 0


moveSlide = () => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('slider__item_active')
    }
    sliders[current].classList.add('slider__item_active')

}

moveSlide()

document.querySelector(".slider__arrow_prev").onclick = () => {
    if (current - 1 == -1) {
        current = sliders.length -1
    } else {
        current -= 1
    }
    moveSlide()

}

document.querySelector(".slider__arrow_next").onclick = () => {
    
    if (current + 1 == sliders.length) {
        current = 0
    } else {
        current += 1
    }
    moveSlide()
}
