const text = document.getElementById('editor')



function saveText(text) {
    localStorage.setItem('text', text)
    console.log('Текст ', text, 'сохранен')
}


function getInputText() {
    text.addEventListener('keyup', () => {
        let inputText = text.value
        saveText(inputText)
    })

}



function onLoad() {
    console.log(localStorage.getItem('text'))
    text.innerText = localStorage.getItem('text')
}



onLoad()
getInputText()
