URL = 'https://netology-slow-rest.herokuapp.com/'



function getExchangeRates(metod, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(metod, url)
        xhr.responseType = 'json';
        xhr.send()


        xhr.onload = function () {
            if (xhr.status != 200) {
                reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                exchangeRates = xhr.response
                console.log('Запрос выполнился')
                resolve(exchangeRates['response']['Valute'])
            }
        };

        xhr.onerror = function () {
            reject("Запрос не удался");
        };
    })

}

function createRates(exchangeRates) {
    return new Promise((resolve, reject) => {
        for (let key in exchangeRates) {
            let exchangeRate = exchangeRates[key]
            console.log(' Один курс валюты:', exchangeRate)
            console.log(exchangeRate.CharCode, exchangeRate.Value)
            resolve(createRate(exchangeRate.CharCode, exchangeRate.Value))
        }
    })
}


function hideLoader() {
    const loader = document.querySelector('.loader')
    loader.classList.remove('loader_active')
}


function createRate(Code, Value) {
    const items = document.getElementById('items')

    console.log(items)
    const item = document.createElement('div')
    item.classList.add('item')


    const rateCode = document.createElement('div')
    rateCode.classList.add('item__code')
    rateCode.innerText = String(Code)

    const rateValue = document.createElement('div')
    rateValue.classList.add('item__value')
    rateValue.innerText = Math.round(Value)

    const rateCurrency = document.createElement('div')
    rateCurrency.classList.add('item__currency')
    rateCurrency.textContent = 'руб.'

    console.log(rateCode, rateValue, rateCurrency)
    item.append(rateCode, rateValue, rateCurrency)
    items.append(item)
}



getExchangeRates("GET", URL)
    .then((data) => {
        console.log(data)
        createRates(data)
            .then((data) => {
                hideLoader()
            })

    })
    .catch(err => { console.log(err) })