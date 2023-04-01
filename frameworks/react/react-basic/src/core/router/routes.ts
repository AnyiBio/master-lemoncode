interface SwitchRoutes {
  root: string;
  company: string;
  rickAndMorty: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  company: "/company",
  rickAndMorty: "/rick-and-morty",
};

export const routes: SwitchRoutes = {
    ...switchRoutes,
};