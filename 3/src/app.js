import React from 'react';
import Cart from './components/cart';
import OrderForm from './components/order-form';
import ResultScreen from './components/result-screen';

export default class extends React.Component{
	state = {
		page: 'Cart',
		total: null,
	    products: getProducts(),
	}

	changeCnt = (i, cnt) =>{
	    let products = [...this.state.products];
	    products[i] = {...products[i], current: cnt};
	    this.setState({products});
	}

	removeProduct = (i) => {
	    let products = [...this.state.products];
	    products.splice(i, 1);
	    this.setState({products});
	}

	showCart = () => {
		return <Cart 
			onSend={(total) => this.setState({page:'OrderForm', total})}
			remove={this.removeProduct}
			changeCnt={this.changeCnt}
			products={this.state.products}
		/>    
	}

	showResultScreen = () => {
	    return <ResultScreen 
	    	total = {this.state.total}
	    />
	}

	showOrderForm = () => {
		return <OrderForm 
			prevPage={ () => this.setState({page:'Cart'}) }
			onSend={ () => this.setState({page:'ResultScreen'}) }
		/>    
	}

    render(){

    	let page = null; 
		
		/*
    	со switch'ем, наверное, выглядит громоздко, но мне показалось так удобнее
    	особенно если экранов будет еще больше и нужна будет возможность возвращаться, например
    	*/

    	switch( this.state.page ) {
    		case 'Cart':
    		page = this.showCart();
    		break; 
    		
    		case 'ResultScreen':
    		page = this.showResultScreen();
    		break;

    		case 'OrderForm':
    		page = this.showOrderForm();
    		break; 
    	}

        return <div>{page}</div>;
    }
}





function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}