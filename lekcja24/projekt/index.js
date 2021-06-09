//     // const showFirst10 = async () => {
//     //     const response = await fetch("https://rickandmortyapi.com/api/character")
//     //         .catch((err) => console.log("ups, coś poszło nie tak"))
//     //     const data = await response.json()
//     //     const arr = data.results
//     //     arr.splice(0, 10)
//     // }
//     // showFirst10()

let page = 1
let info = null
async function main() {
    const $buttonPrev = document.getElementById('prev')
    const $buttonNext = document.getElementById('next')
    $buttonPrev.addEventListener('click', async (el) => {
        if (info.prev === null) {
            alert('Jesteś na pierwszej stronie!')
            return
        }
        page--
        switchPage()
    })
    $buttonNext.addEventListener('click', async (el) => {
        if (info.next === null) {
            alert('Jesteś na ostatniej stronie!')
            return
        }
        page++
        switchPage()
    })
    async function readFile() {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const response = await data.json()
        console.log(response)
        return response
    }


    function createElementHTML(data) {
        const $card = document.createElement('div')
        $card.classList = 'card'
        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = data.name
        $card.appendChild($img)
        const $container = document.createElement('div')
        $container.classList = 'container'
        const $name = document.createElement('h4')
        $name.innerHTML = data.name
        const $species = document.createElement('p')
        $species.innerHTML = data.species
        $container.appendChild($name)
        $container.appendChild($species)
        $card.appendChild($container)
        const $list = document.getElementById('list')
        $list.appendChild($card)
    }

    async function switchPage(){
        const characters = await readFile()
        info = characters.info
        const $listaPostaci = document.getElementById('list')
        $listaPostaci.innerHTML = ''
        characters.results.forEach(createElementHTML)
        actualPage()
    }

    const characters = await readFile()
    info = characters.info
    const $listaPostaci = document.getElementById('characters-numbers')
    $listaPostaci.innerHTML = characters.info.count
    characters.results.forEach(createElementHTML)
    const $numberOfPages = document.getElementById("number-of-pages")
    $numberOfPages.innerHTML = characters.info.pages

    function actualPage() {
        const $pageNumber = document.getElementById('page-number')
        $pageNumber.innerHTML = page
    }
    actualPage()
}
main()