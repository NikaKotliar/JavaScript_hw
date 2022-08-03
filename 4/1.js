function checkedPassword(rightPassword) {
    let getPasswordChecker = (passwordToCheck) => {
        let ifThePasswordCorrect = false
        if (passwordToCheck == rightPassword) {
            ifThePasswordCorrect = true
            console.log('Вы ввели правильный пароль')
        } else {
            console.log('Вы ввели не правильный пароль')
        }
        return ifThePasswordCorrect
    }
    return getPasswordChecker
}

let passwordForChecking = checkedPassword('123456')

passwordForChecking('23me')