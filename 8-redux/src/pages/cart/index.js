import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import withStore from '~/hocs/withStore';
import LinkButton from '~c/links/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';
import actions from '~s/actions';


class Cart extends React.Component{
    render(){
        
        const { cart, onChange, onRemove} = this.props;

        let total = cart.reduce((t, pr) => t + pr.price * pr.current, 0)


        let productsRows = cart.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax 
                            min={1} 
                            max={product.rest} 
                            cnt={product.current} 
                            onChange={(cnt) => onChange(i, cnt)}
                            disabled={/*product.id in cartModel.processId*/ false}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => onRemove(i)}
                                disabled={/*product.id in cartModel.processId*/ false}
                                className="btn btn-outline-danger btn-sm"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead className="bg-light">
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
                <h3>Total: ${total}</h3>
                <hr/>
                
                <LinkButton to={routesMap.order} className="btn btn-primary">
                    Send
                </LinkButton>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        cart: state.cart.cartProducts
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onRemove: (i) => dispatch(actions.cart.remove(i)),
        onChange: (i, cnt) => dispatch(actions.cart.changeCnt(i, cnt)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);