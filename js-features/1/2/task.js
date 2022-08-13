let clickerCounter = document.getElementById("clicker__counter")

let cookieImg = document.getElementById("cookie")


let isExtended = false
function usingOuterBool() {
    clickerCounter.textContent++
    if (isExtended) {
        cookieImg.width /= 2
        cookieImg.height /= 2
    } else {
        cookieImg.width *= 2
        cookieImg.height *= 2
    }
    isExtended = !isExtended
}



function zoomIn() {
    clickerCounter.textContent++
    cookieImg.width *= 2
    cookieImg.height *= 2
    cookieImg.onclick = zoomOut
}

function zoomOut() {
    clickerCounter.textContent++
    cookieImg.width /= 2
    cookieImg.height /= 2
    cookieImg.onclick = zoomIn
}

cookieImg.onclick = zoomIn