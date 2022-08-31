
function getUserInput() {
    const inputUser = document.querySelector('.tasks__input')
    inputUser.addEventListener('keyup', (e) => {
        console.log(inputUser.value)
        if (e.code == "Enter") {
            if (inputUser.value) {
                console.log(inputUser.value)
                const inputText = inputUser.value
                return inputText
            } else {
                alert('Вы не ввели название новой зададачи')
            }
        }
    })

}


// создать под каждое наименование из инпут новый элемент и вставить его в tasks__list

function createNewTask() {
    console.log('NewTask()')
    inputText = getUserInput()



}

createNewTask()

// при нажатии на элемент с классом task__remove, задача должна удаляться





