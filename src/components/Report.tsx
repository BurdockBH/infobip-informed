import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ReportCard({
  image,
  title,
  description,
  width,
  position,
}: any) {
  return (
    <Card sx={{ width: `${width}`, margin: `${position}` }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="report image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
