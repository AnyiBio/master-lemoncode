export async function getCharacterDetail (id: string) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((json) => json);
}