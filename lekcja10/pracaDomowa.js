1.
a)
function sum(a, b, c) {
    return a + b + c
}

b)
function triangle(a, h) {
    const pole = a*h/2
    return "Pole trójkąta to " + pole + " czyli ma on x długości podstawy i xwysokości"
}

c)
function driverLicence(age, ageWhenYouPassed) {
    return age-ageWhenYouPassed
}

d)
const price = 5.25

function priceOfTheDistanceTraveled(fuelConsumption, distanceTraveled) {
    return fuelConsumption*price*distanceTraveled/100
}

e)
function ala(name, age, children) {
             return console.log(name, "ma", age, "lata i", children, "dzieci")
         }

         console.log(ala("Ala",23,2))

2.
a)
tablica = ["element1", "element2", "element3"]

function zwrocTablice(tablica) {
    return tablica
}

console.log(zwrocTablice(tablica))

b)
let tablica2 = ["element1", "element2", "element3"]

function returnElement(tablica2) {
    return tablica2[1]
}

console.log(returnElement(tablica2))

c)
let tablica3 = ["1", "2", "3"]

function returnString(tablica3) {
    return console.log("Przekazana tablica ma", tablica3.length, "elementów, a elementem nr 3 jest", tablica3[2])
}

console.log(returnString(tablica3))

d)
let pustaTablica = []

function addElement(pustaTablica) {
    return pustaTablica.push("element1")
}

console.log(addjElement(pustaTablica))
console.log(pustaTablica)

e)
let person = {
    firstName: "Grzegorz",
    lastName: "Brzęczyszczykiewicz",
    age: 35
}

function returnName(person) {
    return console.log(person.firstName)
}

console.log(returnName(person))

f)
let person = {
    firstName: "Grzegorz",
    lastName: "Brzęczyszczykiewicz",
    age: 35,
    height: 180
}

function personDetails(person) {
    return console.log(person.firstName, person.lastName, "ma", person.age, "lat i", person.height, "cm wzrostu.")
}

console.log(personDetails(person))

// g) **Ten podpunkt sprawił mi sporo problemów** 

let somebody = {
    age: 30
}

function changedAge(obj, age2) {
    obj.age = age2
    return obj
}

console.log(changedAge(somebody, 45))

3.
a)
function driverLicence(age, driverLicence) {
    if (age < 18) {
        console.log("Nie masz prawa jazdy")
    } else if (age > 18 && driverLicence == false) {
        console.log("Nie masz praka")
    } else {
        console.log("Możesz śmiało jeździć")
    }
}

b)
function zakupy(info) {
    if (info === "Kup") {
        console.log("Widzę, że robisz zakupy")
    } else if (info === "Sprzedaj") {
        console.log("Możesz tutaj swobodnie sprzedawać")
    } else {
        console.log("Nie wybrałeś żadnej z dostępnych opcji - wpisz kup lub sprzedaj")
    }
}

c)
function liczba(number) {
    if (number > 0) {
        console.log("Liczba jest dodatnia")
    } else if (number < 0) {
        console.log("Liczba jest ujemna")
    } else {
        console.log("Liczba jest równa 0")
}
    console.log(liczba(number))
    
    d)
    function liczba2(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz") 
    } else if (number % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log("Buzz") 
    }
}
console.log(liczba2(number))

e) 
    function czyMogeObejrzec(age, consent) {
       if (age => 15) {
        console.log("Możesz oglądać")
       } else if (age < 15 && consent == true) {
           console.log("Możesz oglądać za zgodą rodziców")
       } else {
           console.log("Nie możesz oglądać")
       }
    }
    console.log(czyMogeObejrzec(age, consent))

f)
    function yesOrNo(value) {
   return value == true ? "Tak" : "Nie";
}

g)
    function ifTheNumberIsEven(number) {
  return number % 2 == 0 ? "Parzysta" : "Nieparzysta";
}


4.
    a)
    let car = {
    model: "G12",
    brand: "BMW",
    yearsOfProduction: 2021,
    isCabrio: false
}

function factory(yearsOfProduction) {
    if (yearsOfProduction > 2021) {
        return console.log("Auto nie zostało jeszcze wyprodukowane")
    } else if (yearsOfProduction < 2021) {
        return console.log("marka:", car.brand, "model:", car.model, "rok produkcji:", car.yearsOfProduction, "kabrio?", car.isCabrio  )
    }
}

        console.log(factory(2022))

b) 
let arr3 = ["telefon", "komputer", "tablet", "zegarek"]

function checkArray(arr3) {
    if (arr3.length == 0) {
        return console.log("Tablica jest pusta")
    } else {
        return console.log("tablica ma", arr3.length, "elementów")
    }
}

        console.log(checkArray(arr3))

c) let personDetailsOld = {
    name: "Jan",
    lastName: "Kowalski",
    age: 70,
    doesHeLikeReadingBooks: true,
    doesHeHaveTv: true,
}

let book = {
    title: "Sherlock Holmes",
    genre: "Powieśc",
    numberOfPages: 150
}

function recommendations(doesHeLikeReadingBooks) {
    if (doesHeLikeReadingBooks == true) {
        return console.log("cześć", personDetailsOld.name, "polecam ci przeczytać ksiązkę", book.title, "ma tylko", book.numberOfPages, "stron")
    } else if (doesHeLikeReadingBooks == false) {
        return console.log("Pooglądaj telewizję")
    }
}

console.log(recommendations(true))