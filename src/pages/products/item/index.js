import React from 'react';
import E404 from '~c/errors/404';
import { routesMap } from '~/routes';
import ProductItem from '~c/products/item';

import {connect} from 'react-redux';
import actions from '~s/actions';

class Product extends React.Component{

    inCart(id) {
        return this.props.cart.some((product) => product.id === id);
    }

    render(){
        const {products, onAdd, onRemove} = this.props;
        const id = this.props.match.params.id;

        const product = products.find( product => product.id.toString() === id.toString());

        
        if(!product){
            return <E404/>
        }
        else{
            return <ProductItem 
                        title={product.title} 
                        image={product.image} 
                        price={product.price} 
                        backUrl={routesMap.productList} 
                        inCart={this.inCart(product.id)}
                        onAdd={() => onAdd(product.id)}
                        onRemove={() => onRemove(product.id)}
                    />
        }
    }
}


let mapStateToProps = state => {
    return {
        products: state.products.products,
        cart: state.cart.cartProducts
    }
}


let mapDispatchToProps = dispatch => {
    return {
        onAdd: (i) => dispatch(actions.cart.add(i)),
        onRemove: (i, cnt) => dispatch(actions.cart.remove(i)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
