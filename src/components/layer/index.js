import React from 'react';
import { Grid } from '@material-ui/core';

export default ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        {children}
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};
