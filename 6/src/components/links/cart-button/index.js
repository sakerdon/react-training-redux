import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
    const {product, cart, id} = props;

    if (cart.inCart(product.id)) {
        return <Button variant="danger" onClick={() => cart.remove(product.id)}>
        Remove from cart
    </Button>
    } else {
        return <Button variant="success" onClick={() => cart.add(product.id)}>
        Add to cart
    </Button>
    }

}

 