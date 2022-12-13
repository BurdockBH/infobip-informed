import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error({ code }: any) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>The page you’re looking for doesn’t exist.</Typography>
            <p>Error code: {code}</p>
          </Grid>
          <Grid xs={6}>
            <img
              src='https://download.logo.wine/logo/Infobip/Infobip-Logo.wine.png'
              alt=''
              width={500}
              height={300}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
