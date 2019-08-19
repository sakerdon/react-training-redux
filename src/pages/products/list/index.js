import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import CartButton from '~c/products/button';

import {connect} from 'react-redux';
import actions from '~s/actions';



class Products extends React.Component{
    
    inCart(id) {
        return this.props.cart.some((product) => product.id === id);
    }


    render(){
        const {products, onAdd, onRemove} = this.props;

        let productsCards = products.map((product) => {  
           
            return (<div className={'col col-6 ' + styles.col} key={product.id}>
                <Card>
                    <Card.Body className="row">

                        <Card.Img variant="top" className="col-5 p-0 pl-2" src={product.image} />
                        <div className="col-7 d-flex flex-column">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <strong>Price: {product.price}</strong>
                            </Card.Text>
                            <Link className="mb-3 " to={urlBuilder('product', {id: product.id})}>
                                Get more...
                            </Link>
                            {<CartButton inCart={this.inCart(product.id)} 
                                        onAdd={() => onAdd(product.id)} 
                                        onRemove={() => onRemove(product.id)}
                                        disabled={/*product.id in cart.processId*/ false}
                                        />}
                        </div>
                    </Card.Body>
                </Card>
            </div>)
        });

        return (
            <div>
                <h1>Products page</h1>
                <div className="row">
                    {productsCards}
                </div>
            </div>
        );
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


export default connect(mapStateToProps, mapDispatchToProps)(Products);
