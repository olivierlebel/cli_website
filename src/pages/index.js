import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import LandingPage from "./LandingPage/LandingPage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import BlogPage from "./BlogPage/BlogPage.jsx";
import ProductsPage from "./ProductsPage/ProductsPage.jsx";
import ServicesPage from "./ServicesPage/ServicesPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/about" component={BlogPage} />
      <Route path="/about" component={ProductsPage} />
      <Route path="/about" component={ServicesPage} />
    </Switch>
  </Router>
);
