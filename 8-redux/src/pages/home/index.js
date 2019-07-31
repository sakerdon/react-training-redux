import React from 'react';
import { Carousel } from 'react-bootstrap';

import {connect} from 'react-redux';
import actions from '~s/actions';


class Products extends React.Component{


    render(){

        console.log('this.props', this.props);

        let productSlide = this.props.products.map( product => {
            return (
              <Carousel.Item key={product.id} className="mb-3">
                <img
                  className="d-block col-6 m-auto"
                  src={product.image}
                  alt="Slide"
                />
                <Carousel.Caption className="position-static">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )

        }) 

        return (
            <div>
                <Carousel className="bg-secondary">
                {productSlide}
                </Carousel>

            </div>
        );
    }
}



let mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products);

