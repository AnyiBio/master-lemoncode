import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDetailEntity } from "./detail.vm";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  character: CharacterDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="rick and morty character"
        height="300"
        width="auto"
        image={character.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {character.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.gender}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.status}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.species}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.type}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.origin}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {character.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(-1)}>Go back!</Button>
      </CardActions>
    </Card>
  );
};
