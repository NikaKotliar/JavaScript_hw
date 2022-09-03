
//увеличивать счетчик при нажатии на + и уменьшаем при нажатии на минус
const goodCounters = document.querySelectorAll('.product__quantity-controls')
const listProducts = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')

function getAmount() {
    for (var i = 0; i < goodCounters.length; ++i) {
        let goodCounter = goodCounters[i]

        goodCounter.querySelector('.product__quantity-control_inc').onclick = () => {
            goodCounter.querySelector('.product__quantity-value').textContent++
        }


        goodCounter.querySelector('.product__quantity-control_dec').onclick = () => {
            if (goodCounter.querySelector('.product__quantity-value').textContent > 0) {
                goodCounter.querySelector('.product__quantity-value').textContent--
            }
        }
    }
}
getAmount()

//По нажатию "Добавить в корзину вызвать функцию отрисовки нового элемента с количеством"

for (var i = 0; i < listProducts.length; ++i) {
    let listProduct = listProducts[i]
    listProduct.querySelector('.product__add').onclick = () => {
        checkDoubleInCart(listProduct)
    }


    function addToBasket(listProduct) {
        if (listProduct.querySelector('.product__quantity-value').textContent > 0) {
            let goodId = listProduct.dataset.id
            let imageUrl = listProduct.querySelector('img').src
            let name = listProduct.querySelector('.product__title').textContent
            let amount = listProduct.querySelector('.product__quantity-value').textContent
            createNewBasketItem(goodId, imageUrl, name, amount)
            listProduct.querySelector('.product__quantity-value').textContent = '1'
        } else {
            alert('Введите нужное количество товара')
        }
    }
}

// Создать новый элемент с  количеством счетчикa
function createNewBasketItem(goodId, imageUrl, name, amount) {
    const cartProduct = document.createElement('div')
    cartProduct.classList.add('cart__product')
    cartProduct.dataset.id = goodId

    const cartImg = document.createElement('img')
    cartImg.classList.add('cart__product-image')
    cartImg.src = imageUrl

    const cartAmount = document.createElement('div')
    cartAmount.classList.add('cart__product-count')
    cartAmount.innerText = amount

    cartProduct.append(cartImg, cartAmount)
    cartProducts.append(cartProduct)
}

function getCartIds() {
    let cartGoods = document.getElementsByClassName('cart__product')
    cartGoodsLest = []
    for (var i = 0; i < cartGoods.length; ++i) {
        let cartGood = cartGoods[i]
        cartGoodsLest.push(cartGood.dataset.id)
    }
    return cartGoodsLest
}

function getCartElement(id) {
    let cartGoods = Array.from(document.getElementsByClassName('cart__product'))
    let cartGood = cartGoods.find((cartGood) => {
        if (cartGood.dataset.id == id) {
            return true
        }
    })
    return cartGood
}

function checkDoubleInCart(listProduct) {
    cartGoodsLest = getCartIds()
    if (cartGoodsLest.length > 0) {
        if (cartGoodsLest.includes(listProduct.dataset.id)) {
            searchId = listProduct.dataset.id
            const cartGood = getCartElement(searchId)
            let cartAmount = Number(cartGood.querySelector('.cart__product-count').textContent)
            let newAmount = Number(listProduct.querySelector('.product__quantity-value').textContent)
            cartGood.querySelector('.cart__product-count').textContent = cartAmount + newAmount
            listProduct.querySelector('.product__quantity-value').innerText = 1

        } else {
            addToBasket(listProduct)
            listProduct.querySelector('.product__quantity-value').innerText = 1

        }
    } else {
       addToBasket(listProduct)
        listProduct.querySelector('.product__quantity-value').innerText = 1


    }

}