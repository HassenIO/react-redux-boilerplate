import React from 'react';
import { Typography } from '@material-ui/core';
import './style.css';

export default ({ children }) => {
  return (
    <div className="Title">
      <Typography variant="h5" gutterBottom>
        {children}
      </Typography>
    </div>
  );
};
