import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        py: 1,
        bottom: 0,
        width: '100%',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='sm'>
        <Typography variant='body1'>My Footer can be found here.</Typography>
        <Typography variant='body2' color='text.secondary'>
          {'Copyright © '}
          <Link color='inherit' href='https://www.infobip.com/'>
            Infobip
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
