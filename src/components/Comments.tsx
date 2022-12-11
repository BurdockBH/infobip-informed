import React from 'react';
import Grid from '@mui/material/Grid';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

export default function Comments({ handleComments, comments }: any) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AddComment handleComments={handleComments} />
      </Grid>

      <Grid item xs={12}>
        <CommentsList comments={comments} />
      </Grid>
    </Grid>
  );
}
