(() => {
    let playing = true,
        activeHole = 1;

    const stop = () => playing = true,
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index =>
            getHole(index).className = 'hole',
        activateHole = index =>
            getHole(index).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
            if (!playing) {
                return;
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next();
        }, 800);

    next();
})();

let deadMoleCounter = document.getElementById("dead")
let missedMoleCounter = document.getElementById("lost")

function resetGame() {
    deadMoleCounter.textContent = 0
    missedMoleCounter.textContent = 0
}

function checkGameStatus() {
    if (deadMoleCounter.textContent >= 10) {
        alert("Вы победили!")
        resetGame()
    } else if (missedMoleCounter.textContent >= 5) {
        alert("Вы проиграли")
        resetGame()
    }
}

function prepareField() {
   let holes = document.getElementsByClassName("hole")
   for (var i = 0; i < holes.length; ++i) {
       let currentHole = holes[i]
       currentHole.onclick = () => {
           if (currentHole.className.includes("hole_has-mole")) {
               deadMoleCounter.textContent++
           } else {
               missedMoleCounter.textContent++
           }
           checkGameStatus()
       }
   }
}

prepareField()
