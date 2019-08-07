
let initialState = {
    products: [],
    cartProducts: getProducts(),
    cartDetailed: [],
    totalCnt: 0,
    totalPrice: 0
}

function cartChangeCnt(state, id, cnt) {
    let cartProducts = [...state.cartProducts];
    let index = cartProducts.findIndex((pr) => pr.id === id);
    cartProducts[index] = {...cartProducts[index], cnt};
    return {...state, cartProducts}
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

const reducer = function(state = initialState, action) {
    switch(action.type) {

        case 'FETCH_PRODUCTS':
                return {
                    ...state,
                    products: action.payload,
                };
            break;

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
