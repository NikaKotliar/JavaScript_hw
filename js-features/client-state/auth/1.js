//В момент, когда пользователь нажимает на кнопку #signin__btn,
// необходимо направить AJAX-запрос с содержимым формы 
//по адресу https://netology-slow-rest.herokuapp.com/auth.php


const url = 'https://netology-slow-rest.herokuapp.com/auth.php'
const form = document.forms[0]


function sendData(login, password) {

    let formData = new FormData();
    formData.append('login', 'login');
    formData.append('password', 'password');
    console.log(formData , login, password)

    let fetchData = {
        method: 'POST',
        body: formData,
    }

    fetch(url, fetchData)
        .then(function(response){
            response.json()
            console.log(response)
            console.log(response.json())

        })
        .then(function (data) {
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
function IsOk(ok) {
    if (ok) {
        onSuccessAuth()
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


//проверка есть ли пользователь и показ экрана входа

//инициация отправки формы
function onSubmit(){
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let datas = getInfoFromForm()
        login = datas[0]
        password = datas[1]
        console.log(login, password)

        sendData(login,password)

    })
}

onSubmit()