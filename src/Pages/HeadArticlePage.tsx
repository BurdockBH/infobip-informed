import React, { useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Comments from '../components/Comments';
import { postComment } from '../Services/Services';

function HeadArticlePage({ headArticle }: any) {
  const reversed = headArticle?.comments;

  const [comments, setComments] = useState(reversed);
  const handleComments = (props: string, ctime: string) => {
    if (props != '') {
      const newComment = {
        content: props,
        time: ctime,
        article_id: 0,
      };
      setComments([...comments, newComment]);
      postComment(newComment);
    }
  };

  return (
    <div className='App'>
      <MainNavBar />
      <Card>
        <div>
          <CardMedia
            height='350'
            component='img'
            image={headArticle.img_url}
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
