import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function AddComment({ handleComments }: any) {
  const [text, setText] = useState('');
  return (
    <Box className='add-comment' sx={{ 'margin-left': '15%' }}>
      <TextField
        sx={{
          width: '82.3%',
          background: 'white',
        }}
        id='outlined-basic'
        label='Add Comment'
        multiline={true}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button
        sx={{ display: 'block' }}
        onClick={() => {
          const DATE = new Date();
          const TIME =
            +' ' +
            DATE.getDate() +
            '-' +
            (DATE.getMonth() + 1) +
            '-' +
            DATE.getFullYear() +
            '  ' +
            DATE.toLocaleTimeString('en-UK');
          handleComments(text, TIME);
          setText('');
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
