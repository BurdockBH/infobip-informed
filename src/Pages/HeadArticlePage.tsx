import React from "react";
import MainNavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Typography from "@mui/material/Typography";
import { DUMMY_TEXT } from "../const/const";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function HeadArticlePage() {
  return (
    <div className="App">
      <MainNavBar />
      <Card>
        <div>
          <CardMedia
            height="350"
            component="img"
            image={
              "https://www.bug.hr/img/domaci-infobip-sada-vrijedi-vise-od-milijardu-dolara_hqrVf3.jpg"
            }
            alt="News"
            sx={{
              "object-position": "top",
            }}
          />
          <div className="article-title">
            <Typography variant="h1">This just in</Typography>
          </div>
        </div>
      </Card>
      <br />
      <Typography width="70%" sx={{ margin: "auto" }}>
        {DUMMY_TEXT + DUMMY_TEXT}
        <br />
        <br />
        {DUMMY_TEXT + DUMMY_TEXT}
      </Typography>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default HeadArticlePage;
