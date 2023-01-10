import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Page1 from './components/Page1/Page1';
import NewArticle from './components/NewArticle/NewArticle';
import DashBoard from './dashboard/DashBoardForm';
import ManagerUser from './dashboard/ManagerUser';
import ManagerPosts from './dashboard/ManagerPosts';
import ManagerReport from './dashboard/ManagerReport';
import Account from './user/Account';
import Profile from './user/Profile';

const App = () => (
  <BrowserRouter>
    <Container >
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/page1" exact component={Page1} />
        <Route path="/new-article" exact component={NewArticle} />

      </Switch>
    </Container>
    <Route path="/admin" exact component={DashBoard} />
    <Route path="/admin/manager-user" exact component={ManagerUser} />
    <Route path="/admin/manager-post" exact component={ManagerPosts} />
    <Route path="/admin/manager-report" exact component={ManagerReport} />
    <Route path="/user" exact component={Account} />
    <Route path="/profile" exact component={Profile} />
  </BrowserRouter>
);

export default App;
