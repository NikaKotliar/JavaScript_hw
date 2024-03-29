//В момент, когда пользователь нажимает на кнопку #signin__btn,
// необходимо направить AJAX-запрос с содержимым формы 
//по адресу https://netology-slow-rest.herokuapp.com/auth.php

const url = 'https://netology-slow-rest.herokuapp.com/auth.php'
const form = document.forms[0]

function sendData(login, password) {

    let formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);
    console.log(formData)

    let fetchData = {
        method: 'POST',
        body: formData,
    }

    fetch(url, fetchData)
        .then((response) => response.json()
        )
        .then(function (data) {
            IsOk(data.success, data.user_id)
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })

}

//Получить данные с формы
function getInfoFromForm() {
    let login = form.elements.login.value
    let password = form.elements.password.value

    return [login, password]
}

//Авторизовать пользователя или показать ошибку
function IsOk(ok, userName) {
    if (ok == true) {
        onSuccessAuth(userName)
        saveUser(userName)
    } else {
        alert('Неверные логин/пароль')
    }
}

// Перерисовать экран входа
function onSuccessAuth(userName) {
    document.querySelector(".signin").classList.remove("signin_active")
    welcomeText = document.getElementById("welcome")
    welcomeText.classList.add("welcome_active")
    welcomeText.innerText = 'Добро пожаловать, пользователь ' + userName

}

//сохранить инфо о залогиненом пользователя
function saveUser(iserId) {
    localStorage.setItem('user_id', iserId)
    console.log('Пользователь ', iserId, 'сохранен')
}

//инициация отправки формы
function onSubmit() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let datas = getInfoFromForm()
        login = datas[0]
        password = datas[1]
        console.log(login, password)

        sendData(login, password)

    })
}

function onLoad() {
    if (localStorage.getItem('user_id') != null) {
        onSuccessAuth(localStorage.getItem('user_id'))
    } else {
        onSubmit()
    }
}

onLoad()