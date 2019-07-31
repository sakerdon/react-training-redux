let initialState = {
	cartProducts: getProducts()
}
 
function change(state, i, current) {
	let cartProducts = [...state.cartProducts];
	cartProducts[i] = {...cartProducts[i], current};

	return {...state, cartProducts}
}


const reducer = function(state = initialState, action) {
	switch(action.type) {

		case 'CART_REMOVE':
			let cartProducts = state.cartProducts.filter((el, i) => i !== action.i)
			return {
				...state,
				cartProducts
			};
			break;

		case 'CART_CHANGE_CNT':
			return change(state, action.i, action.cnt);
			break;
	}

	return state;
		
}

export default reducer;


// server api
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