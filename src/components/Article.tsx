import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Article({
  image,
  title,
  description,
  width,
  position,
  id,
  height = 200,
}: any) {
  return (
    <Card sx={{ width: `${width}`, margin: `${position}`, height: 1 }}>
      <CardActionArea component={Link} to={{ pathname: '/article/' + id }}>
        <CardMedia component='img' height={height} image={image} alt='report image' />
        <div className='article-text'>
          <h2>{title}</h2>
        </div>
        <CardContent>
          <Typography className='article-description' gutterBottom variant='h6' component='div'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
