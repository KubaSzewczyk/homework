// 1.

// a)
for (let i = 0; i < 10; i++){
    console.log(i)
}

// b)

for (let i = 9; i > 0; i--) {
    console.log(i)
}

// c)

for (let i = 5; i < 16; i++){
    console.log(i)
}

// d)

for (let i = 0; i > -11; i--){
    console.log(i)
}

// e)

for (let i = 0; i < 21; i += 2){
    console.log(i)
}

// f)

for (let i = 10; i > -11; i -= 4) {
    console.log(i)
}

// g)

for (let i = 1; i < 101; i *=2){
        console.log(i)
   }


// 2.
// a)

for (let i = 0; i < 21; i++){
    if (i  % 2 === 0) {
        console.log(i)
    }
}

// b)

for (let i = 0; i < 21; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
}

 // c)

for (let i = 0; i < 11; i++){
    if (i % 2 === 0) {
        console.log(i, `liczba Parzysta`)
    } else {
        console.log(i, `liczba nieparzysta`)
    }
}

// d)

for (let i = 1; i < 31; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, `FizzBuzz`)
    } else if (i % 3 == 0) {
        console.log(i, `Fizz`)
    } else {
        console.log(i,`Buzz`)
    }
}

// e)

for (let i = 100; i >0; i -= 5){
    if (i % 10 == 0) {
        console.log(i, `liczba podzielna przez 10`)
    } else {
        console.log(i)
    }
}

// 3.

// a)
function number(value){
  for(let i = 0; i < value +1; i++) {
    console.log(i)
  }
}

console.log(number(value))

// b)

function number2(value) {
  for (i = value; i < 16; i++) {
    console.log(i)
  }
}

console.log(number2(value))

// c)

function number3(value) {
  for (i = 0; i < 16; i += value) {
    console.log(i)
  }
}

console.log(number3(value))

// d)

function loop(startNumber, last) {
  for (let i = startNumber; i < last +1; i++){
    console.log(i)
  }
}

console.log(loop(startNumber,last))

// e)

function loop2(startNumber, last, iteration) {
  for (i = startNumber; i < last + 1; i += iteration){
    console.log(i)
  }
}

console.log(loop2(startNumber, last, iteration))

//4.

//a)

let arr = [`element1`, `element2`, `element3`, `element4`, `element5`]

function showArr(arr) {
  for (let i = 0; i < 1; i++){
    console.log(arr)
  }
}

console.log(showArr(arr))

// b)

let names = [`Kamil`, `Tomek`, `Jan`, `Ola`, `Jacek`]

function showNames(names) {
  for (let i = 0; i < names.length; i++){
   console.log(`Cześć ${names[i]}`)
  }
}

console.log(showNames(names))

// c)

c) 

let cars = [
  {
    model: "Volkswagen",
    color: "szary"
  },
  {
    model: "Audi",
    color: "czarne"
  },
  {
    model: "Porshe",
    color: "czerwone"
  },
  {
    model: "Opel",
    color: "niebieski"
  }
]

function showcaseCar(cars) {
  const Volkswagen = cars[0]
  const model = Volkswagen.model
  cars[0].model 
  const color = cars[0].color


  for (let i = 0; i < cars.length; i++){
    console.log(`Przed Wami stoi ${cars[i].color} ${cars[i].model}`)
  }
}

console.log(showcaseCar(cars))

// d)

let countToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNumber(countToTen) {
  for (let i = 0; i < countToTen.length +1; i++){
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

console.log(evenNumber(countToTen))

// e)

let array = ["słońce", 25, true, "30", "księżyc", false]

function onlyString(array) {
  for (i = 0; i < array.length; i++){
    if (typeof array[i] === "string") {
      console.log(array[i]);
    }
  }
}

console.log(onlyString(array))

// f)

// f) 

let numbers = [44, "44", 12, false, false, "koń", 7, 27]
let emptyArr = []

function createNewArray(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
       emptyArr.push(numbers[i])
     }
  }
}
createNewArray(numbers)
console.log(emptyArr)

// 5.

// a)
a) 

let anArrayOfNumbers = [2, 15, 27, 40, 17]
let sum = 0;
function totalPrice(anArrayOfNumbers) {
  for (i = 0; i < anArrayOfNumbers.length; i++){
    sum += anArrayOfNumbers[i]
  }
}
totalPrice(anArrayOfNumbers)
console.log(sum)

// b)

b) 

let arrayOfEvenAndOddNumbers = [8, 13, 18, 93, 22, 17]
let evenNumbers = []
let oddNumbers = []

for (i = 0; i < arrayOfEvenAndOddNumbers.length; i++) {
  {
    evenAndOdd(arrayOfEvenAndOddNumbers)
  }


  function evenAndOdd(arrayOfEvenAndOddNumbers) {
    if (i % 2 == 0) {
      evenNumbers.push(arrayOfEvenAndOddNumbers[i])
    } else {
      oddNumbers.push(arrayOfEvenAndOddNumbers[i])
    }
  }
}
console.log(evenNumbers)
console.log(oddNumbers)

// c)

function string(text) {
    for (i = 0; i < string.length; i++){
        if (text.includes("y")) {
            console.log("Jest!")
        } else {
            console.log("Nie ma!")
        }
    }
}


console.log(string("text"))

// d)


function counToOne(number) {
        for (i = 0; i > 0; i--){
                number*=1
        }
        
        let result = number + number * 1
        console.log(result)

}
counToOne(number)
function countToOne(number) {
        for (i = 0; i > 0; i--) {
                number *= 1
        }
        console.log(wynik)
}
countToOne(6)

// e)

let array5eString = ["dom", "samolot", "koń"]
let array5eNumber = [93, 100, 7]
let array5eEmpty = []

function stringAndNumbers(array, string) {

        let sum = 0
        let value = ""

    for (i = 0; i < array.length; i++) {
        sum += array[i]
        value += array[i]
    }
        if (array.length === 0) {
            console.log(`Tablica nie może być pusta`)
        } else if (string === "string") {
            console.log(value)
        } else if (string === "number") {
            console.log(sum)
        } else if (string) {
            console.log(`drugi parametr jest nieprawidłowy`)
        }
    }

stringAndNumbers(array5eString, "string")
stringAndNumbers(array5eNumber, "number")
stringAndNumbers(array5eEmpty)
stringAndNumbers(array5eString, "kot")


// f)

const personDetails = [
    {
        name: `Maciek`,
        lastName: `Nowak`,
        hasCar: true,
        hasDrivingLicence: true,
    },
    {
        name: `Zbigniew`,
        lastName: `Stonoga`,
        hasCar: true,
        hasDrivingLicence: false,
    },
    {
        name: `Jan`,
        lastName: `Nowak`,
        hasCar: false,
        hasDrivingLicence: false,
    },
    {
        name: `Anna`,
        lastName: `Kowalska`,
        hasCar: false,
        hasDrivingLicence: true,
    },
]

function WhoWillDriveMeToHome(personDetails) {

    for (i = 0; i < personDetails.length; i++) {
        if (personDetails[i].hasDrivingLicence === true && personDetails[i].hasCar === true) {
            console.log(`${personDetails[i].name} ${personDetails[i].lastName} Może Cię zawieźć do domu`)
        }
        else if (personDetails[i].hasDrivingLicence === false && personDetails[i].hasCar === false) {
            console.log(`${personDetails[i].name} ${personDetails[i].lastName} Nie ma prawka i samochodu`)
        }
        else if (personDetails[i].hasDrivingLicence === true && personDetails[i].hasCar === false) {
            console.log(`${personDetails[i].name} ${personDetails[i].lastName} Ma prawko, ale nie ma samochodu`)
        }
        else {
            console.log(`${personDetails[i].name} ${personDetails[i].lastName} Ma samochód, ale nie ma prawka`)
        }
    }
}
console.log(WhoWillDriveMeToHome(personDetails))

// g)

const sampleArray = ["pies", "kot", "ptak", "słoń"]

function checkOrAdd(array, element) {
    for (i = 0; i < sampleArray.length; i++) { }
        if (array.includes(element) === true) {
                console.log(`Element ${element} jest już w tablicy!`)
        } else if (array.includes(element) === false) {
                array.push(element)
                console.log(`Dodałem do tablicy element ${element}`)
        }
    }


checkOrAdd(sampleArray, "czlowiek")
console.log(sampleArray)