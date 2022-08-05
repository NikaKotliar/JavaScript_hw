let n = Math.floor(Math.random() * 1000);

console.log(n)

const { type } = require('os')

const rl = require('readline').createInterface(process.stdin, process.stdout)

function askNum() {
  return new Promise((resolve) => {
    rl.question("Введите число ", (number) => { resolve(number) });
  });
}

function checkGuess(number) {
  if (number == n) {
    console.log("Поздравляю вы угадали!")
    return true;
  } else if (n < number) {
    console.log("Ваше число больше загаданного")
  } else {
    console.log("Ваше число меньше загаданного")
  }
  return false;
}

async function runGame() {
  let hasGuessed = false;
  while (!hasGuessed) {
    let num = await askNum();
    if (isNaN(num)) {
      console.log('Введено не число! Введите число');
      continue;
    }
    if (checkGuess(num)) {
      hasGuessed = true;
      rl.close();
    }
  }
}

runGame()