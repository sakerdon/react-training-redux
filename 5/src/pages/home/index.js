import React from 'react';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

import {observer} from 'mobx-react';
import productModel from '~s/products.js';
import cartModel from '~s/cart.js';
import { urlBuilder } from '~/routes';


@observer class Home extends React.Component{

    addToCart = (id) => {
        cartModel.add(id);
    }

    removeFromCart = (id) => {
        cartModel.removeFromId(id);
    }

    isInCart = (id) => cartModel.products.map((p) => p.id).includes(id);

    renderButton = (id) => {

        if (!this.isInCart(id)){
            return  (<button className="btn btn-primary" 
                        onClick={() => this.addToCart(id)}>
                        Add To cart
                     </button>)  
        } else {
            return (<button className="btn btn-warning" 
                        onClick={() => this.removeFromCart(id)}>
                        Remove
                </button>
            )
        }
    }

    render(){

        let productsRows = productModel.products.map((product, i) => {

            let id = product.id;

            return (
                <div className="col-md-4 mb-4" key={product.id}>

                    <div className="card">
                        <div  className="jumbotron mb-1" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: ${product.price}</p>
                        </div>

                        <div className="card-footer d-flex">

                            {this.renderButton(id)}

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
                <h2>Home</h2>
                    <div className="row">
                        {productsRows}
                    </div> 
            </div>
        );
    }
}

export default Home;




