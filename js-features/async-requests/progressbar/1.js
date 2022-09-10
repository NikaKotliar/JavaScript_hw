const progress = document.getElementById('progress')


function onSubmit() {
    console.log("Вызвана функция")

    let file = document.getElementById("file").files[0]

    let xhr = new XMLHttpRequest()


    // xhr.onreadystatechange = function (e) {
    //     console.log(this.readyState)
    // }


    xhr.upload.onprogress = function (e) {
        this.readyState
        console.log('onprogress', e)
        progress.max = e.total
        progress.value = e.loaded
        console.log(e.loaded)

    }


    xhr.upload.onload = function () {
        console.log('Успешно загружено', this.status)
    }

    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/upload.php")

    let formData = new FormData()
    formData.append('file', file)

    xhr.send(formData)


    return false
}

document.getElementById("send").addEventListener("click", () => {

    onSubmit()
})
