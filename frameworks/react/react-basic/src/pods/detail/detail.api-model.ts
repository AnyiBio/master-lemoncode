export interface CharacterEntityApi {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string,
    origin: CharacterOriginEntity;
    location: CharacterLocationEntity;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
  }

  interface CharacterOriginEntity {
    name: string;
    url: string
  }

  interface CharacterLocationEntity {
    name: string;
    url: string
  }