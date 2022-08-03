let n = Math.floor(Math.random() * 1000);

const { type } = require('os')

const rl = require('readline').createInterface(process.stdin, process.stdout)

function compareNumbers() {
    rl.question("Введите число", (UserNumber) => {
        if (isNaN(UserNumber)) {
            console.log('Введено не число! Введите число');
        } else {
            console.log('Пользователь ввел число ', UserNumber);
            if (UserNumber === n) {
                rl.close
                return
            } else {
                if (n < UserNumber) {
                    console.log("Ваше число больше загаданного")
                    }else{
                        
                    }
                    
                }

            }
        }


        compareNumbers()
    })
}

compareNumbers()