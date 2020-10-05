import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from "./page/Home";
import Favoritos from "./page/Favoritos";
import Landing from './page/Landing';
import NotFound from './page/NotFound';
import FooterA from './FooterA';
import PageRecipe from './page/PageRecipe';
import Configuration from './page/Configuration';
import PaymentPage from './page/PaymentPage';
import Category from './page/Category';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home/PaymentPage/:myId" component={PaymentPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/favoritos" component={Favoritos} />
        <Route exact path="/home/landing" component={Landing} />
        <Route exact path="/home/page-recipe/:myId" component={PageRecipe} />
        <Route exact path="/home/category/:myCategory" component={Category} />
        <Route exact path="/home/configuration" component={Configuration} />
        <Redirect from="/" to="home/landing" />
        <Route component={NotFound} />
      </Switch>
      <FooterA />
    </BrowserRouter>
  );
}
export default App;