import React from "react";
import MainNavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import CardMedia from "@mui/material/CardMedia";
import { DUMMY, DUMMY_TEXT } from "../const/const";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function ArticlePage() {
  const { id } = useParams();
  const content = DUMMY.find((item) => item.id.toString() == id); //It will be used
  return (
    <div className="App">
      <MainNavBar />
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            height="350"
            component="img"
            image={
              "https://www.lighthouselabs.ca/uploads/post/open_graph_image/408/Person-Coding-On-Computer.jpg"
            }
            alt="News"
            sx={{
              "object-position": "top",
            }}
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 170,
              left: "35%",
              transform: "translateX(-50%)",
            }}
          >
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

export default ArticlePage;
