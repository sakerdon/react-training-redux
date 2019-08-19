import {all as fetchAllProducts}  from '~a/products'



export const fetchProducts = (dispatch) => {

	fetchAllProducts().then(res => {
		dispatch({type: 'FETCH_PRODUCTS', 
            payload: res, 
            loading: false
        });
	})
	.catch( err => {
		dispatch({type: 'FETCH_PRODUCTS', 
			payload: getProducts(),
            loading: false

        })

	})
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