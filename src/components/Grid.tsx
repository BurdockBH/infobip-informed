import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface report {
  title: string;
  description: number;
}

export default function BasicGrid() {
  const [content, setContent] = useState({});

  const handleContent = (props: report) => {
    setContent((content) => ({
      title: props.title,
      description: props.description,
    }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
