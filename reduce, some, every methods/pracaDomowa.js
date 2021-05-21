 // 1.


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = array.reduce(function (prev, next) {
    return prev + next
})
console.log(sum)

// 2)

const even = array.reduce(function (acc, item) {
    if (item % 2 === 0) {
         acc += item
    }
    return acc
},0)

console.log(even)

// 3)

const sumAnd10 = array.reduce(function (acc, item) {
    return acc + item
},10)

console.log(sumAnd10)

// 4) 
// Jeśli initialValue zstanie podane to stanie się ona pierwszą wartością tablicy - inaczej acc. W przeciwnym razie acc będzie pierwsza wartość tablicy


// 5)
// Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?
// Będzie nosił index[0]


// 6)

function sumForReduce(prev, next) {
    return prev + next
}

function reduce(reduce, initialValue) {
    let i = 0
    if (initialValue === undefined) {
        initialValue = array[0]
    }
    let value = initialValue
    for (i = 0; i < array.length; i++) {
        const item = array[i]
        value = reduce(value, item)
    }
    return value

}

console.log('zadanie 6:', reduce(sumForReduce, 0))

// 7)

const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

function biggerThan50(item) {
    return item > 50
}

console.log(someArray.some(biggerThan50))


 // 8)

function biggerThan2(item) {
    return item > 2
}

console.log(someArray.every(biggerThan2))

// 9)
// .some() zwraca true kiedy przynajmniej jeden element tablicy spełnia warunek funckji. Natomiast .every() zwraca true tylko wtedy gdy 
// wszystkie elementy funckji ten warunek spełniają.  

// 10)


const divide7 = someArray.some(function (item) {
    return item / 7
});
if (divide7 == true) {
    console.log('W tablicy znajduje się przynajmniej jeden element podzielny przez 7');
}

console.log(divide7)

// // 11) :) 

function some(value, array) {
    let result = false
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (item === value) {
            result = true
        } 
    }
    return result
}

const result = some(11, someArray)
console.log(result)
    
// // 12) 

function every(array) {
    let result = true
    for (i = 0; i < array.length; i++) {
        const item = array[i]
        if (item !== array[i]) {
            return false
        } else {
            return result
        }
    }
}


const result = every(someArray)
console.log(result)
// Powiem Ci, że po długiej rozkminie przy poprzednim zadaniu to zrobiłem bardzo szybko. Oby było dobrze :P 
// 13)

let arr = [true, 12, "pies", 18, 20]

function sum2(prev, next) {
    return prev + next
}

function addNumbers(arr) {
    const numbers = arr.filter(function numbers(item) {
            if (typeof item === "number") {
                return true
            }
    })
        .reduce(sum2)
    return numbers;
    }

console.log(addNumbers(arr))

// 14)
const anotherArray = [89, 21, 32, 17]
function subtraction (arr, initialValue) {
    initialValue = 0
    const resultOfSubtraction = arr.reduce(function (acc, item) {
        acc -= item
        return acc
    }, initialValue)
    return resultOfSubtraction
}
console.log(subtraction (anotherArray))

// 15)

function includes(arr, item) {
    const element = arr.includes(item)
    return element
}

console.log(includes(arr, "pies"))

// 16)

const Car = function (model, yearOfProduction, color) {
    this.model = model
    this.yearOfProduction = yearOfProduction
    this.color = color
    this.drive = () => console.log('Jedź!')
}
const BMW = new Car("G12", 2019, "DarkGreen")
console.log(BMW)

const Porshe = new Car("Macan", 2018, "Black")
console.log(Porshe)


// 17)

// Dzięki New możemy stworzyć obiekt podczas użycia konstruktora

// 18)
Car.prototype.tankFuel = function () { console.log('Dawaj do pełna!') }
Car.prototype.stop = function () {console.log('Gdzie jedziesz? Czerwone masz!')}

