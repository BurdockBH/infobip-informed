import React, { useCallback, useEffect, useState } from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Comments from '../components/Comments';
import { getCommentData, postComment } from '../Services/Services';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

function HeadArticlePage({ headArticle }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [showComments, setShowComments] = useState({ status: 'Show Comments', display: 'none' });

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

  const handleShowComments = () => {
    const commentShow = showComments.status == 'Show Comments' ? 'Hide Comments' : 'Show Comments';
    const commentDisplay = showComments.display == 'flex' ? 'none' : 'flex';

    setShowComments({ status: commentShow, display: commentDisplay });
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
        </div>
      </Card>
      <div className='article-share-title'>
        <div className='article-title'>
          <Typography variant='h1'>{headArticle?.title}</Typography>
        </div>
        <div className='share-buttons'>
          <FacebookShareButton
            url={`http://localhost:3000/article/head-article`}
            title={headArticle?.title}
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>
          <EmailShareButton
            url={`http://localhost:3000/article/head-article`}
            title={headArticle?.title}
          >
            <EmailIcon size={50} round />
          </EmailShareButton>
          <TwitterShareButton
            url={`http://localhost:3000/article/$head-article`}
            title={headArticle?.title}
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>
        </div>
      </div>
      <br />
      <Typography width='75%' sx={{ margin: 'auto', 'font-size': '18px', 'text-align': 'justify' }}>
        {headArticle?.text}
      </Typography>
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
      <Footer />
    </div>
  );
}

export default HeadArticlePage;
