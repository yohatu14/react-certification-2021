import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import data from '../Files/youtube-videos-mock.json';

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage data={data} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
