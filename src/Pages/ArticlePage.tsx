import React, { useCallback, useEffect, useState } from 'react';
import MainNavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Comments from '../components/Comments';
import { getCommentData, postComment } from '../Services/Services';

function ArticlePage({ article }: any) {
  const { id } = useParams();
  const content = article.find((item: any) => item.id.toString() == id);
  const [comments, setComments] = useState<any[]>([]);

  const getComments = useCallback((controller: any) => {
    getCommentData(controller, id).then((response) => setComments(response.data));
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
        article_id: parseInt(id!),
      };
      setComments([...comments, newComment]);
      postComment(newComment);
    }
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
      <Typography width='75%' sx={{ margin: 'auto', 'font-size': '18px', 'text-align': 'justify' }}>
        {content?.text}
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
