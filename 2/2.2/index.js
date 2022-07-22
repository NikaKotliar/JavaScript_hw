let goods = [
  {
    id: 1,
    name: "Толстовка",
    description: "Теплая и мягкая",
    sizes: "XL",
    price: 9535,
    available: false,
  },
  {
    id: 2,
    name: "куртка",
    description: "красивая",
    sizes: "M",
    price: 1835,
    available: true,
  },
  {
    id: 3,
    name: "Джинсы",
    description: "Из джинсовой ткани",
    sizes: "L",
    price: 452,
    available: false,
  },
  {
    id: 4,
    name: "Пижама",
    description: "Флисовая",
    sizes: "S",
    price: 70,
    available: true,
  },
  {
    id: 5,
    name: "Футболка",
    description: "Хлопковая розовая футболка",
    sizes: "S",
    price: 957,
    available: true,
  },
]

let basket = [
  [1, 1],
  [3,3],
  [4,3]
]

function addNewItemToBasket(goodId, amount) {
  let persist = false

  for (let i in basket) {
    order = basket[i]
    if (goodId == order[0]) {
      order[1] += amount
      persist = true
    }
  }
  if (persist == false){
    newOrder = []
    newOrder.push(goodId, amount)
    basket.push(newOrder)
  }
}


function deleteOneGoodFromBascket(goodId) {  //удаляет 1 товар из корзины по номеру товара
  for (let i in basket) {
    order = basket[i]
    if (order[0] == goodId) {
      basket.splice(i, 1)
      console.log(basket)
    }
  }
}

function deleteAllGoods() { // полная очистка корзины)))
  basket = []
}

function getPrice(goodID) {
  for (let i in goods) {
    goodInfo = goods[i]
    if (goodID = goodInfo.id) {
      goodPrice = goodInfo.price
    }
  }
  return goodPrice
}

function getTotalSumm() {
  totalInfo = {
    totaAmount: 0,
    totalSumm: 0,
  }
  for (let i in basket) {
    orderInfo = basket[i]
    price = getPrice(orderInfo[0])
    amount = orderInfo[1]
    orderSumm = price * amount
    totalInfo.totalSumm += orderSumm
    totalInfo.totaAmount +=amount
  }
  return totalInfo
}


addNewItemToBasket(2,8)
addNewItemToBasket(3,4)

deleteOneGoodFromBascket(1)

console.log(basket)
console.log(getTotalSumm())
