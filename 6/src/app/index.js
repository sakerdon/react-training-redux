import React from 'react';
import styles from './app.module.css';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import routes, { routesMap } from '~/routes';

import stores from '~s';

@observer class App extends React.Component{
    render(){

        let cartModel = stores.cart;

        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });

        return (
            <Provider stores={stores}>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className="container d-flex">

                        <Link to="/" className="h4 font-weight-bold nav-link">
                        BESTSHOP
                        </Link>

                        <Link to="/cart" className="nav-link ml-auto text-body">
                        Cart-icon<span className="badge badge-danger">{cartModel.productCnt}</span>
                            <div className="text-right">${cartModel.total}</div>
                        </Link>
                    </div>
                    </nav>

                    <div className="container">
                        <div className="row">
                            <div className="col col-3">
                                <div className="list-group">
                                    <NavLink to={routesMap.home}className="list-group-item list-group-item-action" activeClassName="active"exact >Home</NavLink>
                                    <NavLink to={routesMap.cart}className="list-group-item list-group-item-action" activeClassName="active"exact >Cart</NavLink>
                                    <NavLink to={routesMap.order}className="list-group-item list-group-item-action" activeClassName="active"exact >Order now</NavLink>
                                </div>
                            </div>
                            <div className="col col-9">
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;


