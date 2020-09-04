import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./page/Home";
import Favoritos from "./page/Favoritos";
import Landing from './page/Landing';
import NotFound from './page/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/favoritos" component={Favoritos} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;