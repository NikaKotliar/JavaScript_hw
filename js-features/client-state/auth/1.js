//В момент, когда пользователь нажимает на кнопку #signin__btn,
// необходимо направить AJAX-запрос с содержимым формы 
//по адресу https://netology-slow-rest.herokuapp.com/auth.php

const url = 'https://netology-slow-rest.herokuapp.com/auth.php'

function sendData() {

    fetch(url)
    .then((response) => {
        console.log(response.text)
    }
    )

}

sendData()