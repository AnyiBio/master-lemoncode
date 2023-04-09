import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  rickAndMorty: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  rickAndMorty: "/rick-and-morty",
  details: "/rick-and-morty/:id",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
};