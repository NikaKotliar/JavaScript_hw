let n = Math.floor(Math.random() * 1000);
console.log('n равно ' , n)

userInput = prompt('Введите число');
if (isNaN(userInput)) alert( 'Введено не число! Введите число' );
console.log('Пользователь ввел число ', userInput)

while(n !=userInput){
    console.log(n < userInput) 
    if (n < userInput) {
        alert('Ваше число больше загаданного')
    } else {
        alert('Ваше число меньше')
    }
    userInput = prompt('Введите число');
}

alert('Вы угадали число!')