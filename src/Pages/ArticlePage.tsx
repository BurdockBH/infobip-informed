import React, { useState } from "react";
import MainNavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import CardMedia from "@mui/material/CardMedia";
import { DUMMY, DUMMY_TEXT } from "../const/const";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Comments from "../components/Comments";

function ArticlePage() {
  const { id } = useParams();
  const content = DUMMY.find((item) => item.id.toString() == id);

  const [comments, setComments] = useState<any>(content?.comments);

  const handleComments = (props: string) => {
    if (props != "") setComments([{ id: "0", content: props }, ...comments]);
  };

  return (
    <div className="App">
      <MainNavBar />
      <Card>
        <div>
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
      <Comments handleComments={handleComments} comments={comments} />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ArticlePage;
