//В момент, когда пользователь нажимает на кнопку #signin__btn,
// необходимо направить AJAX-запрос с содержимым формы 
//по адресу https://netology-slow-rest.herokuapp.com/auth.php


const url = 'https://netology-slow-rest.herokuapp.com/auth.php'

let data = {
    login: "demo",
    password: "demo"
}


function sendData() {

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json;',
        }
    }

    fetch(url, fetchData)
        .then((response) =>
            response.json())
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })

}

sendData()