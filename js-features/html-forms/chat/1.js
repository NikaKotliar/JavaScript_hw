
// Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
openChat = document.querySelector('.chat-widget__side-text')
openChat.addEventListener('click', () => {
    document.querySelector(".chat-widget").classList.add("chat-widget_active")
})
// По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
function getMessageFromClient() {
    //забрать сообщение из инпута 
    const inputUser = document.getElementById("chat-widget__input")
    inputUser.addEventListener('keyup', (e) => {
        if (e.code == "Enter") {
            if (inputUser.value) {
                const inputText = inputUser.value
                const messageTime = getCurrentTime()

                const clientMessage = document.querySelector('.chat-widget__messages')
                clientMessage.innerHTML +=
                    `<div class="message message_client">
                    <div class="message__time">` + messageTime + `</div>
                    <div class="message__text">`+ inputText + `</div>
                    </div>`
                inputUser.value = ''
                getAnswerFromRobot()
                scrollTillEnd()

            } else {
                alert('Введите сообщение')
            }
        }

    })

    //2.1 Отрисовка сообщения пользователя


}
getMessageFromClient()
// Реализуйте ответ робота (случайное сообщение из списка)
function setRandomAnswer() {
    const robotAnswers = [
        'Привет',
        'хау',
        'пока',
        'иди отсюда',
        'Операторы заняты, можешь не ждать',
        'джекпот',
    ]
    let index = Math.floor(Math.random() * robotAnswers.length);

    return robotAnswers[index]
}
function getAnswerFromRobot() {
    let randomAnswer = setRandomAnswer()
    const messageTime = getCurrentTime()
    const robotMessage = document.querySelector('.chat-widget__messages')
    robotMessage.innerHTML +=
        `<div class="message ">
        <div class="message__time">` + messageTime + `</div>
            <div class="message__text">`+ randomAnswer + `</div>
        </div>`

    


}
// Проставляйте реальную дату переписки
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    messageTime = hours + ":" + minutes
    return messageTime

}
function scrollTillEnd(){
    const messages = document.querySelector('.chat-widget__messages')
    messages.lastChild.scrollIntoView(false)
}

