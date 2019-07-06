import React from 'react';
import styles from './app.module.css';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '~/routes';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';


@observer class App extends React.Component{
    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });


        return (
            <Router>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="list-group">
                                <NavLink to={routesMap.home}className="list-group-item list-group-item-action" activeClassName="active"exact >Home</NavLink>
                                <NavLink to={routesMap.cart}className="list-group-item list-group-item-action" activeClassName="active"exact >Cart</NavLink>
                                <NavLink to={routesMap.order}className="list-group-item list-group-item-action" activeClassName="active"exact >Order</NavLink>
                            </div>
                        </div>
                        <div className="col-md-10">
                        <Switch>
                            {routesComponents}
                        </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;