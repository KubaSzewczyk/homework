const rentalCarCompany = [
   {
      name: 'audi',
      allCarsNumber: 70,
      carsToRent: 30,
      price: 140,
   },
   {
      name: 'fiat',
      allCarsNumber: 120,
      carsToRent: 120,
      price: 90,
   },
   {
      name: 'bmw',
      allCarsNumber: 50,
      carsToRent: 50,
      price: 430,
   },
   {
      name: 'ferrari',
      allCarsNumber: 3,
      carsToRent: 1,
      price: 1200,
   },
   {
      name: 'mustang',
      allCarsNumber: 13,
      carsToRent: 3,
      price: 650,
   },
   {
      name: 'mercedes',
      allCarsNumber: 22,
      carsToRent: 12,
      price: 340,
   },
]


// a)

rentalCarCompany.sort((a, b) => (a.name > b.name) ? 1 : -1)
console.log(rentalCarCompany.sort())


// b)

rentalCarCompanyFiltered = rentalCarCompany.filter(function (rentalCarCompany) {
    if (rentalCarCompany.price < 400) {
        return true
        } 
})
console.log(rentalCarCompanyFiltered)

// c)

rentalCarCompany.sort((a, b) => (a.price > b.price) ? 1 : -1)
console.log(rentalCarCompany.sort())

// d)


rentalCarCompanyFiltered2 = rentalCarCompany.filter(function (rentalCarCompany) {
    if (rentalCarCompany.carsToRent == rentalCarCompany.allCarsNumber) {
        return true
    }
})
console.log(rentalCarCompanyFiltered2)

// e) 

rentalCarCompany.sort((a, b) => (a.allCarsNumber < b.allCarsNumber) ? 1 : -1)
console.log(rentalCarCompany.sort())

// f)

rentalCarCompanyFiltered3 = rentalCarCompany.filter(function (rentalCarCompany) {
    if (rentalCarCompany.price * 7 <= 3500) {
        return true
    }
})
console.log(rentalCarCompanyFiltered3)

// g)

function mostRentedCars(a) {
   allCarsNumber = a.allCarsNumber
   carsToRent = a.carsToRent
   difference = a.carsToRent - a.allCarsNumber
   let mostCarRentedPercent = difference / a.allCarsNumber * 100
   return  `${a.name}, ${mostCarRentedPercent}`
}

let mostOftenRentedCars = rentalCarCompany.map(mostRentedCars)


console.log('Najczęściej wypożyczane auta w procentach:', mostOftenRentedCars )

// rentalCarCompany.sort((a, b) => (a.allCarsNumber - a.carsToRent) <= (b.allCarsNumber - b.carsToRent) ? 1 : -1)
// console.log(rentalCarCompany.sort())

const sorted = rentalCarCompany.sort(function (a, b) {
    return b.allCarsNumber / b.carsToRent - a.allCarsNumber / a.carsToRent
})
console.log(sorted)
const sorted2 = sorted.slice(0, 3)
console.log('Trzy najczęściej wynajmowane samochody to:', sorted2)
