const URL = "https://netology-slow-rest.herokuapp.com/poll.php"

function getRandomPoll(metod, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(metod, url)
        xhr.responseType = 'json';
        xhr.send()

        xhr.onload = function () {
            if (xhr.status != 200) {
                reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                result = xhr.response
                resolve(result['data'])
            }
        };

        xhr.onerror = function () {
            reject("Запрос не удался");
        };
    })

}

function createAnswer(answerText) {
    const pollAnswers = document.getElementById('poll__answers')
    let answer = document.createElement("button")
    answer.classList.add("poll__answer")
    answer.innerText = answerText
    pollAnswers.append(answer)
}

function createAnswers(answers) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < answers.length; ++i) {
            let answer = answers[i]
            createAnswer(answer)
        }
        resolve()
    })
}


function createQuestion(questionText) {
    return new Promise((resolve, reject) => {
        const question = document.getElementById('poll__title')
        question.innerText = questionText
        resolve(question)
    })

}


function clickOnAnswer() {
    pollAnswers = Array.from(document.getElementsByClassName("poll__answer"))
    console.log(pollAnswers)

    for(i = 0; i < pollAnswers.length; i++) {
        pollAnswer = pollAnswers[i]
        console.log(pollAnswer)
        pollAnswer.addEventListener('click', ()=>{
            alert("Спасибо, ваш голос засчитан!")
        })
    }
}

getRandomPoll("GET", URL)
    .then((data) => {
        createQuestion(data['title'])
        createAnswers(data['answers'])
            .then((data) => {
                clickOnAnswer()
            })
    })
    .catch(err => { console.log(err) })

