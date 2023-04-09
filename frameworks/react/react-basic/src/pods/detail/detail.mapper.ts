import * as vm from "./detail.vm";
import * as api from "./detail.api-model";

export const mapCharacterFromApiToVm = (
  character: api.CharacterEntityApi
): vm.CharacterDetailEntity => ({
    id: character.id.toString(),
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name,
    image: character.image,
    url: character.url,
    created: character.created,
});