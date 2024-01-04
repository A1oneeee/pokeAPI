async function genererPokemon (){
    const nbrAleatoire = Math.floor(Math.random() *101);
    const url = `https://pokeapi.co/api/v2/pokemon/${nbrAleatoire}`;
    let pokemon = await fetch(url).then(pokemon => pokemon.json());
    console.log(pokemon);
    const imageElement = document.querySelector('.imgPoke');
    imageElement.src = pokemon.sprites.front_default;
    const idElement = document.querySelector('#numPoke');
    idElement.innerText = `#${pokemon.id}`;
    const nomElement = document.querySelector('#nomPoke');
    nomElement.innerText = pokemon.name;
}

genererPokemon();

const bouton = document.querySelector('#btn-find');
bouton.addEventListener('click', genererPokemon);