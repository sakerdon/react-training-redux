import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import actions from '~s/actions';

class Cart extends React.Component{
    render(){
        console.log('test', this.props);

        let total = this.props.products.reduce((t, pr) => t + pr.price * pr.current, 0)
        let productsRows = this.props.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => this.props.onChange(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.props.onRemove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody> 
                </table>
                <h3>Total: {total}</h3>
                <hr/>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        products: state.cart.products
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onRemove: (i) => dispatch(actions.cart.remove(i)),
        onChange: (i, cnt) => dispatch(actions.cart.changeCnt(i, cnt)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);