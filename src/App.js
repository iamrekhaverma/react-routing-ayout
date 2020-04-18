import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import { AdminLayout,DefaultLayout } from './layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
            <Route exact path="/admin" name="Admin" component={AdminLayout}/>
            <Route exact path="/users" name="Users" component={AdminLayout} />
            <Route exact path="/home" name="Users" component={DefaultLayout} />
        </Router>
      </Fragment>
    );
  }
}

export default App;