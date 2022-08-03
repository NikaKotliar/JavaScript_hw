let secToEnd = document.getElementById("timer")

function decreasing() {
    if (Number(secToEnd.textContent) > 0) {
        secToEnd.textContent = Number(secToEnd.textContent - 1)
        if (secToEnd.textContent == 0) {
            alert("Вы победили в конкурсе")
            secToEnd.textContent = "Вы победили в конкурсе"
        }   
    }
    
}

setInterval(decreasing, 500)

console.log("hi")

