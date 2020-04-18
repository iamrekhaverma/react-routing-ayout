import React from 'react';
import AdminHeader from './AdminHeader';
import {dashboardRoutes} from "../../routes";
import { Route, Switch } from "react-router-dom";


class AdminLayout extends React.Component {

  render( ) {
    console.log("222222222222",this.props)
    return (
      <div>
        <AdminHeader/>
        <div>
            This is admin layout
          {/* {React.cloneElement(this.props.children)})} */}
          <Switch>
            {dashboardRoutes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
              })}
            {/* {path ? <Redirect from="/" to={path} /> : null} */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminLayout;
