import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons'
import {Navbar} from 'react-bootstrap';

import {connect} from 'react-redux';
import actions from '~s/actions';
import './app.module.css';

import {cartTotalPriceSelector,
        cartTotalCntSelector,
    } from '~s/selectors';




class App extends React.Component{

    componentDidMount() {
      this.props.onLoad();      
      this.props.onCartLoad();      
    }

    render(){

        const { totalCnt, totalPrice, loading } = this.props; 

        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });

        if (loading) {
            return (<div className="align-items-center d-flex flex-column h-100 justify-content-center">
                <div className="spinner spinner-border"></div>
                <div>Loading...</div>
            </div>)


        }

        return (
        <Router>
            
            <header className="mb-5">
                <Navbar bg="light" expand="lg">
                    <div className="container">
                        <NavLink to={routesMap.home} className="navbar-brand text-primary">
                        <FontAwesomeIcon icon={faBook} /> BestBookShop
                        </NavLink>

                        <NavLink to="/cart" className="nav-link ml-auto text-body">
                          <div className="text-right">
                              <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                              <sup className="badge badge-danger d-inline-flex">
                              <small>{totalCnt}</small></sup>
                          </div>
                              <div className="text-right">${totalPrice}</div>
                        </NavLink>

                    </div>
                </Navbar>
            </header>


            <div className="container">
                <div className="row">
                    <div className="col col-3">
                        <div className="list-group">
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.home} exact activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.productList} exact activeClassName="active">
                                Catalog
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.cart} activeClassName="active">
                                Cart
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.order} activeClassName="active">
                                Order now
                            </NavLink>
                        </div>
                    </div>
                    <div className="col col-9">
                        <Switch>{routesComponents}</Switch>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}

let mapStateToProps = state => {
    return {
        products: state.products.products,
        totalPrice: cartTotalPriceSelector(state),
        totalCnt: cartTotalCntSelector(state),
        loading: state.products.loading,

    }
}

let mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(actions.products.fetchProducts),
        onCartLoad: () => dispatch(actions.cart.fetchCart),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

