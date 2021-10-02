import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AddLinkPage from 'pages/AddLinkPage';
import { NotFoundPage } from 'pages/NotFoundPage';

const Root = () => (
  <MainTemplate>
    <Switch>
      <Route exact path="/add-link">
        <AddLinkPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </MainTemplate>
);

export default Root;
