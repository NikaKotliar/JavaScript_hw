class Goods {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable(newAvailable) {
        this.available = newAvailable;
    }
}

class GoodsList {
    #goods = []
    constructor(filter = NaN, sortPrice = true, sortDir = true) {
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
        this.sortedListByFilter
    }

    getSortedList(filter = NaN, sortPrice = true, sortDir = true) {
        filter = /^[а-я]{6}$/i
        this.sordetListByFilter = this.#goods.filter((good) => filter.test(good.name))
        if (sortPrice) {
            if (sortDir) {
                return this.sordetListByFilter.sort((good1, good2) => good1.price - good2.price)
            } else {
                return this.sordetListByFilter.sort((good1, good2) => good2.price - good1.price)
            }
        }
        return this.sordetListByFilter
    }

    add(newGood) {
        let ifGoodIs = false
        this.#goods.forEach((good) => {
            console.log(newGood.id)
            if (good.id === newGood.id) {
                ifGoodIs = true
                console.log("такой товар уже добавлен, отстаньте")
            }
        })
        if (ifGoodIs == false) {
            this.#goods.push(newGood)
        }
    }

    remove(goodID) {
        this.#goods.forEach((good, index) => {
            if (good.id === goodID) {
                this.#goods.splice(index, 1)
            }
        })
        return this.#goods

    }
}

class BasketGood extends Goods {
    constructor(good, amount) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
    }
}


class Basket {
    goods = []
    AvailableGoods = []

    add(newGood, newAmount) {
        let ifInBasket = false
        this.goods.forEach((currentGood) => {
            if (currentGood.id === newGood.id) {
                ifInBasket = true
                console.log("такой товар уже есть в корзине, увеличиваем количество")
                currentGood.amount += newAmount
            }
        })
        if (ifInBasket == false) {
            this.goods.push(new BasketGood(newGood, newAmount))
        }
    }

    remove(goodForRemove, amountForRemove) {
        this.goods.forEach((good, index) => {
            if (good.id === goodForRemove.id) {
                if (good.amount < amountForRemove) {
                    console.log("Введено количество товара больше имеющегося, товар будет полностью удален")
                    this.goods.splice(index, 1)
                }
                good.amount -= amountForRemove
            } else {
                console.log("Такого товара не найдено")
            }
        })
    }
    clear() {
        this.goods = []
    }

    removeUnavailable() {
        this.AvailableGoods = this.goods.filter((goodFromBasket) => goodFromBasket.available)
        return this.AvailableGoods
    }

    totalAmount() {
        console.log("Зашел в функцию")
        let result = 0

        for (let i in this.goods) {
            console.log(i)
            let oneLineInfo = this.goods[i]
            console.log("oneLineInfo", oneLineInfo)
            result += oneLineInfo.amount
        }
        return result
    }

    totalSumm() {
        let result = 0
        for (let i in this.goods) {
            let oneLineInfo = this.goods[i]
            let orderSumm = oneLineInfo.price * oneLineInfo.amount
            result += orderSumm
        }
        return result
    }

}


let good = new Goods(1, "Толстовка", "теплая и мягкая", "S", "1240", true)
let good2 = new Goods(2, "Толстовка", "теплая и мягкая", "M", "1440", false)
let good3 = new Goods(3, "Пижама", "теплая и мягкая", "XL", "3440", true)
let good4 = new Goods(4, "Пижама", "теплая и мягкая", "XL", "34570", true)
let good5 = new Goods(5, "Пижама", "теплая и мягкая", "XL", "340", true)

let goodList1 = new GoodsList()
goodList1.add(good)
goodList1.add(good2)
goodList1.add(good3)
goodList1.add(good3)
goodList1.add(good5)

let basket = new Basket()

basket.add(good, 2)
basket.add(good2, 3)
basket.add(good, 2)
basket.add(good3, 2)
basket.add(good4, 2)
basket.add(good5, 2)



//проверка удаления товара из корзины
// console.log('Ваша корзина содержит: ' , basket.goods)
// basket.remove(good2,4)
// console.log('Ваша корзина содержит после удаления: ' , basket.goods)

//проверка удаления всех товаров из корзины
// basket.clear()
// console.log('содержимое корзины удалено: ' , basket.goods)

// Проверка удаления недоступных товаров
// basket.removeUnavailable()
// console.log("Удаление недостпных товаров", basket.AvailableGoods)


// Проверка подсчета количества и суммы товаров в корзине
console.log("Количество товара в корзине", basket.totalAmount())
console.log("Сумма товаров в корзине", basket.totalSumm())


// console.log(goodList1)
// goodList1.getSortedList('Пижама')
// console.log("Результат только с фильтром по имени", goodList1.getSortedList('Пижама'))
// console.log("Результат фильтра с сортировкой тру", goodList1.getSortedList('Пижама', true, true))
// console.log("Результат фильтра с сортировкой фалс", goodList1.getSortedList('Пижама', true, false))
// console.log("результат удаления по ид", goodList1.remove(2))

