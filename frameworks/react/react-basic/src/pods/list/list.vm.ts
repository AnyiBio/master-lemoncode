export interface RickAndMortyEntity {
    id:	number;
    name: string;
    status:	'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender:	'Female' | 'Male' | 'Genderless' | 'unknown';
    origin:	Origin;
    location: Location;
    image:	string;
    episode: [];
    url: string;
    created	:string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}