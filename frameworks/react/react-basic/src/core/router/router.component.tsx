import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { OrganizationPage, RickAndMortyPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<OrganizationPage />} />
        <Route path={switchRoutes.rickAndMorty} element={<RickAndMortyPage />} />
      </Routes>
    </Router>
  );
};