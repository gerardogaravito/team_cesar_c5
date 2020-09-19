import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from "./page/Home";
import Favoritos from "./page/Favoritos";
import Landing from './page/Landing';
import NotFound from './page/NotFound';
import FooterA from './FooterA';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/favoritos" component={Favoritos} />
        <Route exact path="/home/landing" component={Landing} />
        <Redirect from="/" to="home/landing" />
        <Route component={NotFound} />
      </Switch>
      <FooterA />
    </BrowserRouter>
  );
}
export default App;