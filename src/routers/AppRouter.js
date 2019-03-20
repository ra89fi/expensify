import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Create from '../components/Create';
import Edit from '../components/Edit';
import FourOfour from '../components/FourOfour';
import Header from '../components/Header';
import Help from '../components/Help';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={FourOfour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
