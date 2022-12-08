import React from "react";
import MainNavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Typography from "@mui/material/Typography";
import { DUMMY_HEADER } from "../const/const";

function HeadArticlePage() {
  return (
    <div className="App">
      <MainNavBar />
      <Typography>{DUMMY_HEADER.description}</Typography>
      <Footer />
    </div>
  );
}

export default HeadArticlePage;
