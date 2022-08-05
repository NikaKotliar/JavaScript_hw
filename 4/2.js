let n = Math.floor(Math.random() * 1000);

const { type } = require('os')

const rl = require('readline').createInterface(process.stdin, process.stdout)

function compareNumbers() {
    rl.question("Введите число ", (userNumber) => {
        if (isNaN(userNumber)) {
            console.log('Введено не число! Введите число');
        } else {
            if (userNumber == n) {
                console.log("Вы угадали число")
                rl.close()
                return
            } else if (n < userNumber) {
                console.log("Ваше число больше загаданного")
            } else {
                console.log("Ваше число меньше загаданного")
            }
        }
        compareNumbers()
    })
}

compareNumbers()