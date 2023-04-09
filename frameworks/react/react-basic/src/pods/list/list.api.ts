export async function getRickAndMortyCharactersService () {
    return fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((json) => json);
}