import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, SignUp } from '../Pages';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/archived" component={Home} />
      <Route path="/trash" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
