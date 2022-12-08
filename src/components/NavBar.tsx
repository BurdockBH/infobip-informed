import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../logos/logo.png";
import { ThemeProvider } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { THEME } from "../const/const";

export default function MainNavBar() {
  const date = new Date();
  return (
    <ThemeProvider theme={THEME}>
      <AppBar
        position="sticky"
        sx={{ height: "50px", "justify-content": "center" }}
      >
        <Toolbar>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ margin: "auto", width: "50px" }}
            component={Link}
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img className="nav-img" src={logo} alt="infobip_logo"></img>
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
            component={Link}
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            &nbsp;Informed - Infobip News
          </Typography>
          <p>{date.toDateString()}</p>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
