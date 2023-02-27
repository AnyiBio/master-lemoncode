import React from "react";
import classes from "./card-styles.scss";
import logo from "../content/logo.png";

export const CardComponent = () => {
  return (
    <div className="card" style={{ width: 180 }}>
      <img className="card-img-top" src={logo} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Anyi Jar</h5>
        <p className="card-text">
          Welcome to my page:
        </p>
        <a href="#" className="btn btn-secondary">
          Go!!
        </a>
      </div>
    </div>
  );
};
