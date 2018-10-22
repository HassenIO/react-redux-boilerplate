import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Layer } from '../../components';

export default () => {
  return (
    <div className="Header">
      <AppBar position="static" color="default">
        <Toolbar>
          <Layer>
            <Typography variant="h6" color="inherit">
              Autotag
            </Typography>
          </Layer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
