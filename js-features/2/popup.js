
let successModule = document.getElementById('modal_success')
let mainModule = document.getElementById('modal_main')

let buttonClick = document.querySelector('.btn')


console.log(close)
console.log(successModule)


function setCloseHandler(popUp) {
    let closeItem = popUp.querySelector(".modal__close_times");
    function clickHandler() {
        closePopUp(popUp)
    }
    closeItem.onclick = clickHandler;
}

function closePopUp(popUp) {
    popUp.classList.remove('modal_active')
}


function doGood() {
    mainModule.classList.remove('modal_active')
    successModule.classList.add('modal_active')
}

setCloseHandler(mainModule)
setCloseHandler(successModule)

buttonClick.onclick = doGood






