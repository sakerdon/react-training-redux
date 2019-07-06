import React from 'react';
import styles from './app.module.css';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '~/routes';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';


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
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    <Link to={routesMap.home} className="">Home</Link>
                                </li>
                                <li>
                                    <Link to={routesMap.cart} className="">Cart</Link>
                                </li>
                                <li>
                                    <Link to={routesMap.order} className="">Order</Link>
                                </li>
                            </ul>
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