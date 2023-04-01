import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RickAndMortyEntity } from "./list.vm";

interface Props {
    character: RickAndMortyEntity;
}

export const ListComponent: React.FC<Props> = ({ character }) => {
    console.log(character);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="rick and morty character"
        height="200"
        image={character.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          { character.name }
        </Typography>
        <Typography variant="h5" color="text.secondary">
          { character.status }
        </Typography>
        <Typography variant="h5" color="text.secondary">
          { character.species }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};