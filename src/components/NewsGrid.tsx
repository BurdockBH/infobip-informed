import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Article from './Article';
import axios from 'axios';

export default function News({ category }: any) {
  const [headContent, setHeadContent] = useState<any>('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/head-article')
      .then((response) => setHeadContent(response.data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Article
            width={'50%'}
            title={headContent.title}
            description={headContent.description}
            position={'auto'}
            id={'head-article'}
            image={
              'https://thumbs.dreamstime.com/b/chalk-board-sketch-loudspeaker-phrase-important-news-144457132.jpg'
            }
          />
        </Grid>
        {category.map((report: any, index: any) => (
          <Grid item xs={3} key={index}>
            <Article
              articlePage={report}
              description={report.description}
              title={report.title}
              id={report.id}
              image={
                'https://c1.wallpaperflare.com/preview/554/370/505/bird-bluebird-bird-png-nature-perched-spring.jpg'
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
