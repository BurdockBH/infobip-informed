import React from 'react';
import Grid from '@mui/material/Grid';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

export default function Comments({ handleComments, comments, display }: any) {
  return (
    <Grid container spacing={2} sx={{ display: `${display}` }}>
      <Grid item xs={12}>
        <AddComment handleComments={handleComments} />
      </Grid>
      <Grid item xs={12}>
        <CommentsList comments={comments} />
      </Grid>
    </Grid>
  );
}
