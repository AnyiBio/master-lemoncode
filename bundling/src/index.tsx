import React from "react";
import { createRoot } from "react-dom/client";
import { CardComponent } from "./components/card-component";
import classes from "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className={classes.applicationDashboard}>
    <h1>Seed Webpack & React project</h1>
    <CardComponent />
  </div>
);
