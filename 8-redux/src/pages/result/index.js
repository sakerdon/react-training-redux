import React from 'react';

import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

import {cartTotalPriceSelector} from '~s/selectors';

class Result extends React.Component{
    render(){
        const {totalPrice, name} = this.props.lastOrderCache

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {name}!</p>
                <p><strong>Total: ${totalPrice}</strong></p>
            </div>

        )
    }
}


let mapStateToProps = state => {
    return {
        formData: state.order.formData,
        lastOrderCache: state.order.lastOrderCache
    }
}

export default connect(mapStateToProps)(Result);



