import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Article from './Article';

export default function News({ category, headContent }: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={9} md={12} xs={12} height={400}>
          <Article
            className='head-article-banner'
            width={'100%'}
            height={320}
            title={headContent?.title}
            description={headContent?.description}
            position={'auto'}
            id={'head-article'}
            image={headContent.img_url}
          />
        </Grid>
        {category.map((report: any, index: any) => (
          <Grid item lg={3} md={6} xs={12} key={index}>
            <Article
              articlePage={report}
              description={report.description}
              title={report.title}
              id={report.id}
              image={report.img_url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
