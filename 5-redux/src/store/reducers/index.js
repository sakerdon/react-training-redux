import { combineReducers } from 'redux';
import cart from './cart';
import order from './order';


export default combineReducers({
	cart, 
	order
})