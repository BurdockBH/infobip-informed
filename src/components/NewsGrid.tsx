import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Article from "./Article";
import { DUMMY, DUMMY_HEADER } from "../const/const";

export default function News() {
  const [content, setContent] = useState(DUMMY);
  const [headContent, setHeadContent] = useState(DUMMY_HEADER);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Article
            width={"50%"}
            title={headContent.title}
            description={headContent.description}
            position={"auto"}
            id={"head-article"}
            image={
              "https://thumbs.dreamstime.com/b/chalk-board-sketch-loudspeaker-phrase-important-news-144457132.jpg"
            }
          />
        </Grid>
        {content.map((report, index) => (
          <Grid item xs={3} key={index}>
            <Article
              title={report.title}
              id={report.id}
              image={
                "https://c1.wallpaperflare.com/preview/554/370/505/bird-bluebird-bird-png-nature-perched-spring.jpg"
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}