// Requete API avec Pokedex
const pokedex = document.querySelector(".pokedex")

let apiLink = "https://pokebuildapi.fr/api/v1/pokemon"

// On utilise fetch pour faire notre requete, par défaut fetch fait des req de type GET
fetch(apiLink)  
.then(res => res.json())
.then(data => {
    data.forEach(pokemon => {
        // On récupères les infos pour chaque pokemon de l'api (nom, image etc)
        const name = pokemon.name
        const imageURL = pokemon.image
        const types = pokemon.apiTypes
        const id = pokemon.id 

        console.log(types)
        
        // On crée une div qui recevra les infos du dessus
        const card = document.createElement("div") 
        card.classList.add("card")

        // On crée les différents éléments HTML un par un 
        const cardName = document.createElement("h2") 
        const cardImage = document.createElement("img")
        const cardTypes = document.createElement("h3")
        const cardId = document.createElement("p")

        // On donne la valeur adéquate (issu de l'api) à nos différents éléments HTML
        cardName.textContent = name
        cardImage.src = imageURL

        types.forEach((type) => {
            cardTypes.textContent += `${type.name} `
        })

        cardId.textContent = id

        // On ajoute tous ces éléments à notre card
        card.append(cardName, cardImage, cardTypes, cardId)

        // enfin on insère notre card dans la section pokedex (définie dans le HTML)
        pokedex.append(card)

    })
})
.catch(err => console.log(err))