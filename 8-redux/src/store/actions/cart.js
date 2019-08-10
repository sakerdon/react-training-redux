// import {load, add as addItem, remove as removeItem }  from '~a/cart'
import * as api  from '~a/cart'

let token = localStorage.getItem('cartToken');

export const add = (i) => (dispatch) => {
	api.add(token, i).then(res => {
		dispatch({
				type: 'CART_ADD',
				i
			});
	})
	.catch( err => console.log(err))
}


export const remove = (i) => (dispatch) => {
	api.remove(token, i).then(res => {
		console.log('res', res);
		dispatch({
				type: 'CART_REMOVE',
				i
			});
	})
	.catch( err => console.log(err))
}

export const changeCnt = (i, cnt) => (dispatch) => {
	api.changeCnt(token, i, cnt).then((res) => {
		console.log('res', res);
		dispatch({
				type: 'CART_CHANGE_CNT',
				i,
				cnt
			});
	})
	.catch( err => console.log(err))
}

export const deleteCart = (i, cnt) => (dispatch) => {
	api.clean(token).then((res) => {
		console.log('res', res);
		dispatch({
				type: 'CART_DELETE'
			});
	})
	.catch( err => console.log(err))
}

	
export const fetchCart = (dispatch) => {

	api.load(token).then(res => {
		console.log('RES', res);
		dispatch({type: 'CART_FETCH', 
            payload: res.cart 
        });

		if(res.needUpdate){
		    token = res.token;
		    localStorage.setItem('cartToken', token);
		}
	})
	.catch( err => {
		dispatch({type: 'CART_FETCH', 
			payload: []

        })

	})
}