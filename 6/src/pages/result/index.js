import React from 'react';

import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

import withStore from '~/hocs/withStore';

class Result extends React.Component{
    render(){
        let cartModel = this.props.stores.cart;
        let orderModel = this.props.stores.order;
        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {orderModel.data.name}!</p>
                <p><strong>Total: {cartModel.total}</strong></p>

            </div>
        )
    }
}

export default withStore(Result);