import React from 'react';
import E404 from '~c/errors/404';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ProductItem from '~c/products/item';
import {observer, inject} from 'mobx-react';
import { Button } from 'react-bootstrap';
import CartButton from '~c/links/cart-button';


@inject('stores') @observer class Product extends React.Component{
    render(){
        let id = this.props.match.params.id;
        let product = this.props.stores.products.getById(id);
        let cart = this.props.stores.cart;

        if(product === null){
            return <E404/>
        }
        else{
            return (
                <div>
                    <ProductItem 
                            title={product.title} 
                            price={product.price} 
                            backUrl={routesMap.home} 
                            linkComponent={Link}
                        />
                    <hr/>

                    <CartButton product={product} cart={cart}  id={id}/>
                </div>    
            )
        }
    }
}

export default Product;