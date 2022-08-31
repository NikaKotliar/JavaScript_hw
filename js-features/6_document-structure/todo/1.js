const inputUser = document.querySelector('.tasks__input')
const addButton = document.getElementById('tasks__add')

function getUserInput() {
    if (inputUser.value) {
        createNewTask(inputUser.value)
        inputUser.value = ''
    } else {
        alert('Вы не ввели название задачи')
    }
}

function catchNewTask() {
    addButton.addEventListener('click', () => {
        getUserInput()
        tasksControl() 
    })
    inputUser.addEventListener('keyup', (e) => {
        e.preventDefault()
        if (e.code == 'Enter') {
            getUserInput()
            tasksControl() 
        }
    })
}

function createNewTask(textTask) {

    const task = document.createElement('div')
    task.classList.add('task')

    const taskTitle = document.createElement('div')
    taskTitle.classList.add('task__title')
    taskTitle.textContent = textTask

    const link = document.createElement('a')
    link.href = '#'
    link.innerHTML = '&times;'
    link.classList.add('task__remove')

    task.append(taskTitle, link)

    const taskList = document.querySelector('.tasks__list')
    taskList.append(task)
}



// при нажатии на элемент с классом task__remove, задача должна удаляться

function deleteTask(elem) {
    elem.remove()
}

function tasksControl() {
    let taskRemoves = document.getElementsByClassName('task__remove')
    for (var i = 0; i < taskRemoves.length; ++i) {
        let taskRemove = taskRemoves[i]
        taskRemove.parentElement.onclick = () => {
            taskRemove.parentElement.remove()
        }
    }
 

}


catchNewTask()
tasksControl()


