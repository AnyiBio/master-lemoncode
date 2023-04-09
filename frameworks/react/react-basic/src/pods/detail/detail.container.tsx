import React from "react";
import { CharacterDetailEntity, createDefaultCharacterDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getCharacterCollection } from "./detail.repository";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<CharacterDetailEntity>(
    createDefaultCharacterDetail()
  );

  React.useEffect(() => {
    getCharacterCollection(id).then((memberDetail) => setCharacter(memberDetail));
  }, []);

  return (
    <div className="detail-container">
      <DetailComponent character={character} />;
    </div>
  )
};