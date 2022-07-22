
function checkDevited(currentNumber, simpleNumbers) {
  for (let i in simpleNumbers) {
    if (simpleNumbers[i] != 1 && currentNumber % simpleNumbers[i] == 0) {
      return false
    }
  }
  return true
}


function getSimpleNumber(n) {
  let simpleNumbers = []
  let i = 1
  while (simpleNumbers.length < n) {
    if (checkDevited(i, simpleNumbers)) {
      simpleNumbers.push(i)
    }
    i++
  }
  return simpleNumbers
}

console.log(getSimpleNumber(process.argv[2]));



