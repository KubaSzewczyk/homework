// 1. Pojęcie asynchroniczności oznacza, że kod nie jest "czytany" linijka po linijce. Silnik js w momencie zorientowania się, że ma do czynienia
// z kodem asynchronicznym wykonuje polecenia z pominięciem danej operacji po czym wraca do niej w odpowiednim momencie.

// 2.    
// 3.
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch((err) => {
        console.log(`ups, coś poszło nie tak ${ err }`)
    }); 

// 4. 

const pobierzDane = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    console.log(data.results)
}
pobierzDane()


// 5. 
const pobierzPostac = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/500")
    const data = await response.json()
    console.log(data)
}

pobierzPostac()
