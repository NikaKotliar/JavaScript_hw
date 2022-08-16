let sliders = Array.from(document.querySelectorAll(".slider__item"))

moveSlide = (diff) => {
    let currentIndex = sliders.findIndex(
        (it) => it.classList.contains("slider__item_active")
    )
    if (currentIndex == -1) {
        currentIndex = 0;
    }
    currentIndex = (sliders.length + currentIndex + diff) % sliders.length
    sliders.forEach((el) => el.classList.remove('slider__item_active'))
    if (sliders.length > currentIndex) {
        sliders[currentIndex].classList.add('slider__item_active')
    }
}

document.querySelector(".slider__arrow_prev").onclick = () => {
    moveSlide(-1)
}

document.querySelector(".slider__arrow_next").onclick = () => {
    moveSlide(1)
}


moveSlide(0)
