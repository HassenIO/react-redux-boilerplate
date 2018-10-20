import React from 'react';
import { Route, Switch } from 'react-router-dom';
import View from '../views';

/**
 * Define routes and their components. Ordering is important!
 * Always keep "not found" view the latest.
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={View.home} />
      <Route path="*" component={View.notFound} />
    </Switch>
  );
};
