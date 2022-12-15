import React, { useCallback, useEffect, useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Comments from '../components/Comments';
import { getCommentData, postComment } from '../Services/Services';

function HeadArticlePage({ headArticle }: any) {
  const [comments, setComments] = useState<any[]>([]);

  const getComments = useCallback((controller: any) => {
    getCommentData(controller, 0).then((response) => setComments(response.data));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getComments(controller);
    return () => {
      controller.abort();
    };
  }, [getComments]);

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
      <Typography width='75%' sx={{ margin: 'auto', 'font-size': '18px', 'text-align': 'justify' }}>
        {headArticle?.text}
      </Typography>
      <br />
      <br />
      <Comments handleComments={handleComments} comments={comments} />
      <Footer />
    </div>
  );
}

export default HeadArticlePage;
