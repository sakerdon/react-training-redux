let initialState = {
	cartProducts: getProducts(),
}


function cartAdd(state, id) {
    let cartProducts = [...state.cartProducts];
    cartProducts.push({id, cnt: 1});
    return {...state, cartProducts}
}


function cartRemove(state, id) {
    let cartProducts = state.cartProducts.filter(p => p.id !== id);
    return {...state, cartProducts}
}



function cartChangeCnt(state, id, cnt) {
    let cartProducts = [...state.cartProducts];
    let index = cartProducts.findIndex((pr) => pr.id === id);
    cartProducts[index] = {...cartProducts[index], cnt};
    return {...state, cartProducts}
}


const reducer = function(state = initialState, action) {
	switch(action.type) {

		case 'CART_REMOVE':
            return cartRemove(state, action.i);
            break;

        case 'CART_ADD':
            return cartAdd(state, action.i);
            break;

        case 'CART_CHANGE_CNT':
            return cartChangeCnt(state, action.i, action.cnt);
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
            cnt: 1
        },
        {
            id: 101,
            cnt: 1
        }
    ];
}
