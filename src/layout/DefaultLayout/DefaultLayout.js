import React from 'react';
// import DefaultHeader from './DefaultHeader';
import {openRoutes} from "../../routes";
import { Route, Switch } from "react-router-dom";


class DefaultLayout extends React.Component {

  render( ) {
    return (
      <div>
        {/* <DefaultHeader/> */}
        <div>
            This is DefaultLayout.
            <a href="/admin">Link to admin page</a>
          <Switch>
            {openRoutes.map((route, idx) => {
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

export default DefaultLayout;
