import React from 'react';
import E404 from '~c/errors/404';
import productModel from '~s/products.js';
import cartModel from '~s/cart.js';

import {observer} from 'mobx-react';



@observer class Product extends React.Component{

    addToCart = (id) => {
        cartModel.add(id);
    }

    removeFromCart = (id) => {
        cartModel.removeFromId(id);
    }

    isInCart = (id) => cartModel.products.map((p) => p.id).includes(id);


     renderButton(id){

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
    	let index = this.props.match.params.index;
        let product = productModel.products[index];

        if (!product) return <E404 />;


        let id = product.id;

        return (
            <div>
                <div className="row mt-5">                    	
                	<div className="col-md-3" >
                	<div className="jumbotron mb-0" />

                	</div>
                	<div className="col-md-8" >
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p className="card-text">Price: ${product.price}</p>
                            
                            {this.renderButton(id)}
                            
                        </div>
                    </div>
                </div>

                    
            </div>
        );
    }
}

export default Product;
