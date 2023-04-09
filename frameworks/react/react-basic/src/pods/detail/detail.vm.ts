export interface CharacterDetailEntity {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string,
    origin: string;
    location: string;
    image: string;
    url?: string;
    created?: string;
  }

  export const createDefaultCharacterDetail = () => ({
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
    url: "",
    created: "",
  });