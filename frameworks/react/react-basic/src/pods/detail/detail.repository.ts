import { CharacterDetailEntity } from "./detail.vm";
import { getCharacterDetail as getCharacterDetailApi } from "./detail.api";
import { mapCharacterFromApiToVm } from "./detail.mapper";

export const getCharacterCollection = (
  id: string
): Promise<CharacterDetailEntity> => {
  return new Promise<CharacterDetailEntity>((resolve) => {
    getCharacterDetailApi(id).then((result) => {
      resolve(mapCharacterFromApiToVm(result));
    });
  });
};