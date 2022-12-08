import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../logos/logo.png";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { IconButton } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
    },
  },
});

export default function MainNavBar() {
  const date = new Date();
  return (
    <ThemeProvider theme={theme}>
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
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              style={{ width: "100%", height: "100%" }}
              alt="infobip_logo"
            ></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            &nbsp;Informed - Infobip News
          </Typography>
          <p>{date.toDateString()}</p>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
