import React from "react";
import { AppLayout } from "@/layouts/app.layout";
import { ListContainer } from "@/pods/list";

export const RickAndMortyPage: React.FC = () => {
    return (
        <AppLayout>
          <ListContainer />
        </AppLayout>
      );
};