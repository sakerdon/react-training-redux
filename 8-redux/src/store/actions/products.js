import {all} from '~a/products'


export const fetchProducts = (dispatch) => {

	all().then(res => {
		console.log('test', res);
		dispatch({type: 'FETCH_PRODUCTS', payload: res})
	})
	
}
