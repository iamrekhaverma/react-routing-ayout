import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import { AdminLayout,DefaultLayout } from './layout';
import Users from "./pages/users";
import Home from "./pages/home";
import Admin from "./pages/admin";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
            {/* <Route exact path="/admin" name="Admin" component={AdminLayout}/>
            <Route exact path="/users" name="Users" component={AdminLayout} />
            <Route exact path="/home" name="Users" component={DefaultLayout} /> */}
            <RouteWrapper path="/users" component={Users} layout={AdminLayout} />
            <RouteWrapper path="/home" component={Home} layout={DefaultLayout} />
            <RouteWrapper path="/admin" component={Admin} layout={AdminLayout} />
        </Router>
      </Fragment>
    );
  }
}

export default App;

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}