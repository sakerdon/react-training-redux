import React from 'react';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

import {observer} from 'mobx-react';
import productModel from '~s/products.js';
import cartModel from '~s/cart.js';
import { urlBuilder } from '~/routes';


@observer class Home extends React.Component{

    addToCart = (i) => {
        productModel.add(i)
    }
    removeFromCart = (i) => {
        cartModel.remove(i)
    }

    inCart = (idx) => cartModel.products.map((p, i) => i).includes(idx);

    renderButton = (i) => {

        if (!this.inCart(i)){
            return  (<button className="btn btn-primary" 
                        onClick={() => this.addToCart(i)}>
                        Add To cart
                     </button>)  
        } else {
            return (
                <button className="btn btn-warning" 
                        onClick={() => this.removeFromCart(i)}>
                    Remove
                </button>

            )
        }
    }


    render(){

        let productsRows = productModel.products.map((product, i) => {
            return (
                <div className="col-md-4 mb-4" key={product.id}>

                    <div className="card">
                        <div  className="jumbotron mb-1" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: ${product.price}</p>

                        </div>

                        <div className="card-footer d-flex">

                            {this.renderButton(i)}

                            <Link className="btn btn-secondary ml-auto" 
                                    to={urlBuilder('product', {index: i})}>
                                Read more
                            </Link>
                        </div>

                    </div>
                </div>
            );
        });


        return (
            <div>
                <h2>Cart</h2>
                    <div className="row">
                        {productsRows}
                    </div> 
            </div>
        );
    }
}

export default Home;




