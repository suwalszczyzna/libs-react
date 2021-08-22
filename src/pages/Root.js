import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AddLinkPage from 'pages/AddLinkPage';

const Root = () => (
  <MainTemplate>
    <Switch>
      <Route path="/add-link">
        <AddLinkPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </MainTemplate>
);

export default Root;
