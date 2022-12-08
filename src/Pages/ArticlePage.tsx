import React from "react";
import MainNavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import { DUMMY } from "../const/const";

function ArticlePage() {
  const { id } = useParams();
  const content = DUMMY.find((item) => item.id.toString() == id); //It will be used
  return (
    <div className="App">
      <MainNavBar />
      <Box
        component="img"
        sx={{
          height: "50%",
          width: "100%",
        }}
        alt="News"
        src="https://c1.wallpaperflare.com/preview/554/370/505/bird-bluebird-bird-png-nature-perched-spring.jpg"
      />
      <Footer />
    </div>
  );
}

export default ArticlePage;
