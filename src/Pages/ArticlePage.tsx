import React, { useState } from 'react';
import MainNavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Comments from '../components/Comments';

function ArticlePage({ article }: any) {
  const { id } = useParams();
  const content = article.find((item: any) => item.id.toString() == id);

  const [comments, setComments] = useState(content?.comments);
  const handleComments = (props: string, time: string) => {
    if (props != '') setComments([{ id: '0', content: props, currentTime: time }, ...comments]);
  };

  if (!content) return null;
  return (
    <div className='App'>
      <MainNavBar />
      <Card>
        <div>
          <CardMedia
            height='350'
            component='img'
            image={content.img_url}
            alt='News'
            sx={{
              'object-position': 'center',
            }}
          />
          <div className='article-title'>
            <Typography variant='h1'>{content?.title}</Typography>
          </div>
        </div>
      </Card>
      <br />
      <Typography width='70%' sx={{ margin: 'auto' }}>
        {content?.text + content?.text}
        <br />
        <br />
        {content?.text + content?.text}
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
