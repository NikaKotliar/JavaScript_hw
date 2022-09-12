
let successModule = document.getElementById('modal_success')
let mainModule = document.getElementById('modal_main')

let buttonClick = document.querySelector('.btn')

function setCloseHandler(popUp) {
    let closeItem = popUp.querySelector(".modal__close_times");
    function clickHandler() {
        closePopUp(popUp)
            setCookieInfo('showPopUP', "1111111")

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


function setCookieInfo(name, value, options = {}) {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    console.log(updatedCookie)
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function onLoad(){
    let show = getCookie('showPopUP')
    if (show){
    document.getElementById('modal_main').classList.remove('modal_active')
    }
    console.log(show)
}

onLoad()