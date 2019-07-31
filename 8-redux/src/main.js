import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from '~s/reducers';
import actions from '~s/actions';
import {Provider} from "react-redux";

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

/*stores.products.load().then(() => {*/
    ReactDom.render(<Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#app'));
/*});*/

// stores.cart.load();


