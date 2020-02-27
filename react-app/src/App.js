import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Layout from './common/Layout';
import Index from './pages/Index/index';
import Shop from './pages/Shop/shop';
import Blog from './pages/Blog/index';
import './App.css';

function App() {
  return (
    <Fragment>
    <Router>
    <Layout>
    <Switch>
      <Route path="/blog" component={Blog}>
      </Route>
      <Route path="/shop" component={Shop}>
      </Route>
      <Route path="/" component={Index}>
      </Route>
    </Switch>
    </Layout>
    </Router>
    </Fragment>
  );
}

export default App;
