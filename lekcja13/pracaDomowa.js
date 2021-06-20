1.
// **JAKO LISTA**
const car = {
    brand: "BMW",
    model: "G12",
    yearsOfProduction: 2021
}

function carDetails(brand, model, yearsOfProduction){
    return `samochód marki: ${brand}, model ${model} wyprodukowany w ${yearsOfProduction} roku`
}

console.log(carDetails(car.brand, car.model, car.yearsOfProduction))

// **JAKO OBIEKT**

function carDetails2(obj) {
    return `Samochód marki: ${obj.brand}, model: ${obj.model} wyprodukowany w ${obj.yearsOfProduction} roku` 
}

const car2 = {
    brand: "BMW",
    model: "G12",
    yearsOfProduction: 2021
}

console.log(carDetails2(car2))

2.

const car3 = {
    brand: "BMW",
    model: "G12",
    yearsOfProduction: 2021
}

const { brand, model, yearsOfProduction } = car3


3.
// **FUNKCJA PO DESTRUKTURYZACJI**
function carDetails3() {
    return `Samochód marki: ${brand}, model: ${model} wyprodukowany w ${yearsOfProduction} roku.`
}

console.log(carDetails3())

4.
// Operatory inkrementacji mogą występować przed jak i po zmiennej: 
let x = 5
console.log(x++)
// Powyższy zapis jest równoznaczny z zapisem: x = x+1
// W przypadku kiedy inkrementacja występuje po zmiennej (x++) zwiększenie wartości nastąpi dopiero w kolejnym poleceniu  
console.log(++x)
// W drugim przykładzie console.log wyświetli x o wartości 7 ze względu na to, że sumuje się z przykładem gdzie inkrementacja następuje po zmiennej

5.

function kosz() {

    const stan = {
        wynik: 0
    }

    function rzutZaDwaPunkty() {
        stan.wynik += 2
    }

    function rzutZaTrzyPunkty() {
        stan.wynik += 3
    }

    function pokazWynik() {
        console.log(stan.wynik)
    }

    return {
        rzutZaDwaPunkty,
        rzutZaTrzyPunkty,
        pokazWynik,
        ile: stan.wynik
    }

}
const aktualnyWynik = kosz()
aktualnyWynik.rzutZaDwaPunkty(),
aktualnyWynik.rzutZaTrzyPunkty(),
aktualnyWynik.rzutZaDwaPunkty()
aktualnyWynik.pokazWynik()

6.
const pralka = {
    name: "Whirpool",
    liczbaDostepnychFunkcji: 4,

    informacje: function () {
        return `model: ${ this.name } dostępne funkcje: ${this.liczbaDostepnychFunkcji}`
    },
}


console.log(pralka.informacje())

7.
// Referencja: 
//-wskazuje lokalizacje obiektu przez co przypisuąc "dugieDanie" do "danieGlowne" pracujemy wciąż na tym samym obiekcie.

const danieGlowne = {
    name: "kurczak",
    surname: "pieczony"
}

const drugieDanie = danieGlowne
drugieDanie.name = "boczek"
console.log(danieGlowne)

//Kopia:
//Tworzy dwie zmienne przez co zmiana właściwości w jednej nie ingeruje w drugą. 

let zupa = "pusty talerz"
let pierwszeDanie = zupa
zupa = "pomidorowa"
console.log(zupa)
console.log(pierwszeDanie)

//Proste typy danych: number, Boolean, string
//złożone: obiekty, tablice

//**MAM NADZIEJĘ, ŻE DOBRZE ZROZUMIAŁEM "Opisz" W ZADANIU NR 4 i 7**