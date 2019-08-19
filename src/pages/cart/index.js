import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import LinkButton from '~c/links/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';
import actions from '~s/actions';

import {cartDetailedSelector, 
        cartTotalPriceSelector,
        cartTotalCntSelector,
    } from '~s/selectors';

class Cart extends React.Component{
   
    render(){
        const { 
            products, 
            cart, 
            cartDetailed, 
            onChange, 
            onRemove, 
            totalPrice
        } = this.props;

        let productsRows = cartDetailed.map((product, i) => {
            
            if(!product.id) return null; 

            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax 
                            min={1} 
                            max={product.rest} 
                            cnt={product.cnt} 
                            onChange={(cnt) => onChange(product.id, cnt)}
                            disabled={/*product.id in cartModel.processId*/ false}
                        />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button onClick={() => onRemove(product.id,)}
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
                <h3>Total: ${totalPrice}</h3>
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
        cart: state.cart.cartProducts,
        cartDetailed: cartDetailedSelector(state),
        products: state.products.products,
        totalPrice: cartTotalPriceSelector(state),
        totalCnt: cartTotalCntSelector(state),
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onRemove: (i) => dispatch(actions.cart.remove(i)),
        onChange: (i, cnt) => dispatch(actions.cart.changeCnt(i, cnt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);