export class Character {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public status: string,
    public species: string,
    public location: Location
  ) {}
}

export interface Location {
  name: string;
}

export interface ApiResponseCharacter {
  results: Character[];
}
