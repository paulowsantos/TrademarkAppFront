import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import HoursManagement from '../pages/HoursManagement';
import Project from '../pages/Project';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/hoursmanagement" component={HoursManagement} isPrivate />
    <Route path="/project/:id" component={Project} isPrivate />
  </Switch>
);

export default Routes;
