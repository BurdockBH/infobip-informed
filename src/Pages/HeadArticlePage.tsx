import React, { useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Comments from '../components/Comments';

function HeadArticlePage({ headArticle }: any) {
  const [comments, setComments] = useState(headArticle?.comments);
  const handleComments = (props: string, time: string) => {
    if (props != '') setComments([{ id: '0', content: props, currentTime: time }, ...comments]);
  };

  return (
    <div className='App'>
      <MainNavBar />
      <Card>
        <div>
          <CardMedia
            height='350'
            component='img'
            image={
              'https://www.bug.hr/img/domaci-infobip-sada-vrijedi-vise-od-milijardu-dolara_hqrVf3.jpg'
            }
            alt='News'
            sx={{
              'object-position': 'top',
            }}
          />
          <div className='article-title'>
            <Typography sx={{ 'padding-bottom': '-5px' }} variant='h1'>
              {headArticle?.title}
            </Typography>
          </div>
        </div>
      </Card>
      <br />
      <Typography width='70%' sx={{ margin: 'auto' }}>
        {headArticle?.text + headArticle?.text}
        <br />
        <br />
        {headArticle?.text + headArticle?.text}
      </Typography>
      <br />
      <br />
      <Comments handleComments={handleComments} comments={comments} />
      <Footer />
    </div>
  );
}

export default HeadArticlePage;
