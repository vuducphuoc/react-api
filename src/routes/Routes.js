import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';

class Routes extends Component {
    showRoutes = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                )
            })
        }

        return result;
    }
    render() {
        return (
            <Switch>
                {this.showRoutes(routes)}
            </Switch>
        );
    }
}
export default Routes;