import {all} from '~a/products'



export const fetchProducts = (dispatch) => {

	all().then(res => {
		dispatch({type: 'FETCH_PRODUCTS', payload: res});
	})
	.catch( err => {
		dispatch({type: 'FETCH_PRODUCTS', 
			payload: getProducts()})

	})
}



// Cart

export const remove = (i) => {
    return {
        type: 'CART_REMOVE',
        i
    }
}

export const add = (i) => {
    return {
        type: 'CART_ADD',
        i
    }
}
export const changeCnt = (i, cnt) => {
    return {
        type: 'CART_CHANGE_CNT',
        i,
        cnt
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