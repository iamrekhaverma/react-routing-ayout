import React from 'react';
import AdminHeader from './AdminHeader';
import {dashboardRoutes} from "../../routes";
import { Route, Switch } from "react-router-dom";


class AdminLayout extends React.Component {

  render( ) {
    return (
      <div>
        <AdminHeader/>
        <div>
            This is admin layout<br/>
            <a href="/users">Go to users page</a><br/>
            <a href="/home">Go to Home page</a>
          <Switch>
            {dashboardRoutes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
              })}
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminLayout;
