import React from "react";
import { ListComponent } from "./list.component";
import { getRickAndMortyCharactersService } from "./list.service";
import { RickAndMortyEntity } from "./list.vm";

export const ListContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<RickAndMortyEntity[]>([]);

    React.useEffect(() => {
      getRickAndMortyCharactersService().then(
        charactersValue => setCharacters(charactersValue?.results)
      )
  }, []);
  
    return (
      <React.Fragment>
        {
          characters?.map(character => (
            <ListComponent key={character.id} character={character}/>
          ))
        }
      </React.Fragment>
    );
};