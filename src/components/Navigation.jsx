import React, { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowBack, MenuOutlined, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../App.css";
import AppContext from "./AppContext";

const Navigation = () => {
  const { isId } = useContext(AppContext);
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {isId ? (
            <Link to="/" className="link-style-white">
              <ArrowBack />
            </Link>
          ) : (
            <MenuOutlined />
          )}
        </IconButton>
        <Link to="/" className="nav-logo">
          <YouTube />
          <Typography variant="h6" color="inherit" component="div">
            Gallery
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
