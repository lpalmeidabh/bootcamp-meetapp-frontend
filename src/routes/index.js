import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import AddEdit from '../pages/AddEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/addedit/:id?" component={AddEdit} isPrivate />
    </Switch>
  );
}
