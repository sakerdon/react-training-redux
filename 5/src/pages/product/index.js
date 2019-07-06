import React from 'react';
import E404 from '~c/errors/404';
import productModel from '~s/products.js'

class Product extends React.Component{

    render(){
    	let index = this.props.match.params.index;
        let product = productModel.products[index];

        if (!product) return <E404 />;

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
                            <button className="btn btn-primary" 
                                    onClick={() => productModel.add(index)}>
                                Add To cart
                            </button>
                            
                        </div>
                    </div>
                </div>

                    
            </div>
        );
    }
}

export default Product;
