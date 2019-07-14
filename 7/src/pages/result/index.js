import React from 'react';

import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

import withStore from '~/hocs/withStore';

class Result extends React.Component{
    render(){
        let orderModel = this.props.stores.order;

        if (orderModel.lastOrderCache && orderModel.lastOrderCache.total) {
            return (
                <div>
                    <h2>Congratulations!</h2>
                    <p>Hi, {orderModel.lastOrderCache.name}!</p>
                    <p><strong>Total: {orderModel.lastOrderCache.total}</strong></p>

                </div>
            )
        } else return <h4>This page must show result of your order, but your order is empty now.</h4>

    }
}

export default withStore(Result);