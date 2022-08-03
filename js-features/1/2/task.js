let clickerCounter = document.getElementById("clicker__counter")

let cookieImg = document.getElementById("cookie")
// const currenWidth = cookieImg.width
// const currentHeight = cookieImg.height
// const wideWidth = cookieImg.width *2
// const wideHeight = cookieImg.height *2







function imageZoom() {
    clickerCounter.textContent++
    cookieImg.width *= 2
    cookieImg.height *= 2
    
    // cookieImg.onclick = () => {
    //     cookieImg.width = cookieImg.width / 2
    //     cookieImg.height = cookieImg.height / 2
    //     imageZoom()
    // }
}

cookieImg.onclick = imageZoom