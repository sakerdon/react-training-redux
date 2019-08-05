let initialState = {
	cartProducts: getProducts()
}

function productsDetailed(products){
    return products.map((pr) => {
        let product = this.rootStore.products.getById(pr.id);
        return {...product, cnt: pr.cnt};
    });
}

 
function change(state, id, current) {

	let cartProducts = [...state.cartProducts];
    let index = cartProducts.findIndex((pr) => pr.id === id);

	cartProducts[index] = {...cartProducts[index], current};

	return {...state, cartProducts}
}


 


function add(state, id) {
    console.log('1state', state);
    let cartProducts = [...state.cartProducts];
    cartProducts.push({id, cnt: 1});
    console.log('state', {...state, cartProducts});
    return {...state, cartProducts}
}



function remove(state, id) {
    let cartProducts = state.cartProducts.filter(p => p.id !== id);
    return {...state, cartProducts}
}



const reducer = function(state = initialState, action) {
	switch(action.type) {

		case 'CART_REMOVE':
			return remove(state, action.i);
			break;

        case 'CART_ADD':
            return add(state, action.i);
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
            // title: 'Ipnone 200',
            // price: 12000,
            // rest: 10,
            current: 1
        },
        {
            id: 101,
            // title: 'Samsung AAZ8',
            // price: 22000,
            // rest: 5,
            current: 1
        },
        {
            id: 103,
            // title: 'Nokia 3310',
            // price: 5000,
            // rest: 2,
            current: 1
        },
        {
            id: 105,
            // title: 'Huawei ZZ',
            // price: 15000,
            // rest: 8,
            current: 1
        }
    ];
}