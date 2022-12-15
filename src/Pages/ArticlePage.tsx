import React, { useCallback, useEffect, useState } from 'react';
import MainNavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Comments from '../components/Comments';
import { getCommentData, postComment } from '../Services/Services';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
} from 'react-share';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function ArticlePage({ article }: any) {
  const { id } = useParams();
  const content = article.find((item: any) => item.id.toString() == id);
  const [comments, setComments] = useState<any[]>([]);
  const [showComments, setShowComments] = useState({ status: 'Show Comments', display: 'none' });

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

  const handleShowComments = () => {
    const commentShow = showComments.status == 'Show Comments' ? 'Hide Comments' : 'Show Comments';
    const commentDisplay = showComments.display == 'flex' ? 'none' : 'flex';

    setShowComments({ status: commentShow, display: commentDisplay });
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
      <div className='share-buttons'>
        <FacebookShareButton url={`http://localhost:3000/article/${id}`} title={'titles'}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <EmailShareButton url={`http://localhost:3000/article/${id}`} title={'titles'}>
          <EmailIcon size={50} round />
        </EmailShareButton>
        <TwitterShareButton url={`http://localhost:3000/article/${id}`} title={'titles'}>
          <TwitterIcon size={50} round />
        </TwitterShareButton>
      </div>
      <br />
      <Typography width='75%' sx={{ margin: 'auto', 'font-size': '18px', 'text-align': 'justify' }}>
        {content?.text}
      </Typography>
      <br />

      <br />
      <br />
      <Box textAlign='center' sx={{ 'margin-bottom': '5%' }}>
        <Button variant='contained' onClick={() => handleShowComments()}>
          {showComments.status}
        </Button>
      </Box>
      <Comments
        display={showComments.display}
        handleComments={handleComments}
        comments={comments}
      />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ArticlePage;
