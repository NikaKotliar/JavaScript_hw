const progress = document.getElementById('progress')


function onSubmit() {
    console.log("Вызвана функция")

    let file = document.getElementById("file").files[0]
    progress.max = file.size
    console.log(file.size)

    let xhr = new XMLHttpRequest()

    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/upload.php")

    let formData = new FormData()
    formData.append('file', file)

    xhr.send(formData)

    // xhr.onreadystatechange = function (e) {
    //     console.log(this.readyState)
    // }

    xhr.onload = function() {
        console.log('Успешно загружено', this.status)
      }


    xhr.onprogress = function (e) {
        this.readyState
        console.log('onprogress', e)
        // progress.max = e.total
        progress.value = e.loaded

    }

    return false
}

document.getElementById("send").addEventListener("click", () => {

    onSubmit()
})
