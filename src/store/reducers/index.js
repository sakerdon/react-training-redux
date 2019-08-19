import { combineReducers } from 'redux';
import cart from './cart';
import order from './order';
import products from './products';


export default combineReducers({
	products,
	cart, 
	order
})