rotatorCases = Array.from(document.querySelectorAll(".rotator__case"))

//1ый вариант
// setInterval(() => {
//     let currentIndex = rotatorCases.findIndex(
//         (rotatorCase) => rotatorCase.classList.contains("rotator__case_active")
//     )

//     if (currentIndex == -1) {
//         currentIndex = 0
//     }
//     nextActiveElem = (currentIndex + 1) % rotatorCases.length
//     rotatorCases[currentIndex].classList.remove("rotator__case_active")
//     rotatorCases[nextActiveElem].classList.add("rotator__case_active")
//     }, 5000)



// 2ая ступень

function getSpeed(rotatorCase) {
    speed = rotatorCase.dataset.speed
    return speed
}
function getColor(rotatorCase) {
    color = rotatorCase.dataset.color
    return color
}

function setAttrsToNext(elem, color) {
    elem.classList.add("rotator__case_active")
    elem.style.color = color
}

function showNext() {

    let currentIndex = rotatorCases.findIndex(
        (rotatorCase) => rotatorCase.classList.contains("rotator__case_active")
    )

    if (currentIndex == -1) {
        currentIndex = 0
    }
    nextActiveElem = (currentIndex + 1) % rotatorCases.length

    nexttElemSpeed = getSpeed(rotatorCases[nextActiveElem])
    nexttElemColor = getColor(rotatorCases[nextActiveElem])
    currentElemColor = getColor(rotatorCases[currentIndex])
    setAttrsToNext(rotatorCases[currentIndex], currentElemColor);

    setTimeout(() => {
        rotatorCases[currentIndex].classList.remove("rotator__case_active")
        setAttrsToNext(rotatorCases[nextActiveElem], nexttElemColor);
        showNext();
    }, nexttElemSpeed)
}

showNext()