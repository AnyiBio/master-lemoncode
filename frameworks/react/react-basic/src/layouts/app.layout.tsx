import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToPage = (pathName: string) => {
    navigate(pathName);
  }
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">
        {location.pathname.includes('/rick-and-morty') ?
        <Button variant="contained" size="medium" color="primary"
            onClick={() => navigateToPage('/')}
          >Go to Organization search
          </Button>
          :
          <Button variant="contained" size="medium" color="secondary"
            onClick={() => navigateToPage('rick-and-morty')}
          >Go to Rick and Morty
          </Button>
        }
      </div>
      {children}
    </div>
  );
};