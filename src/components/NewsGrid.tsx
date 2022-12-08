import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import ReportCard from "./Report";

export default function News() {
  const [content, setContent] = useState([
    {
      title: "test",
      description: "asdf",
    },
    {
      title: "test2",
      description: "asdf",
    },
    {
      title: "test3",
      description: "asdf",
    },
    {
      title: "test4",
      description: "asdf",
    },
    {
      title: "test",
      description: "asdf",
    },
  ]);
  const [headContent, setHeadContent] = useState({
    title: "Head title",
    description: "Hihi hoho",
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ReportCard
            width={"50%"}
            title={headContent.title}
            description={headContent.description}
            position={"auto"}
            image={
              "https://thumbs.dreamstime.com/b/chalk-board-sketch-loudspeaker-phrase-important-news-144457132.jpg"
            }
          />
        </Grid>
        {content.map((report, index) => (
          <Grid item xs={3} key={index}>
            <ReportCard
              title={report.title}
              description={report.description}
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
