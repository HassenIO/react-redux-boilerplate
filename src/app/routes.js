import React from 'react';
import { Route, Switch } from 'react-router-dom';
import View from '../views';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={View.home} />
      <Route path="*" component={View.notFound} />
    </Switch>
  );
};
