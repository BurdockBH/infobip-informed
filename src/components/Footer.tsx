import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <div className='footer'>
      <Typography sx={{ 'text-align': 'center' }} variant='body1'>
        <Link href='/contact-form' color='inherit'>
          Contact us
        </Link>
      </Typography>
      <Typography sx={{ 'text-align': 'center' }} variant='body2' color='text.secondary'>
        {'Copyright © '}
        <Link color='inherit' href='https://www.infobip.com/'>
          Infobip
        </Link>
        {' ' + new Date().getFullYear()}
      </Typography>
    </div>
  );
}
