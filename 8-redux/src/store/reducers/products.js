
let initialState = {
    products: [],
    cartProducts: getProducts(),
    cartDetailed: []
}

let map = {};


function productsMap(products) {
    products.forEach((pr, i) => {
        map[pr.id.toString()] = i;
    });
    console.log('map', map);
    return map;
}


function getById(products, id) {
    let index = map[id];

    if (index === undefined) {
        return null;
    }
    console.log('products[index]', products[index]);
    return products[index];
}


export const cartDetailed = (cart, products) =>{
    console.log('PRODUCTS', products);
    return cart.map((pr) => {
        let product = getById(products, pr.id);
        console.log('PRODUCTS1111111', products);
        return {...product, cnt: pr.cnt};
    });
}




function cartChangeCnt(state, id, cnt) {
    let cartProducts = [...state.cartProducts];
    let index = cartProducts.findIndex((pr) => pr.id === id);
    cartProducts[index] = {...cartProducts[index], cnt};
    return {...state, cartProducts}

}


function cartAdd(state, id) {
    console.log('1state', state);
    let cartProducts = [...state.cartProducts];
    cartProducts.push({id, cnt: 1});
    console.log('state', {...state, cartProducts});
    return {...state, cartProducts}
}


function cartRemove(state, id) {
    let cartProducts = state.cartProducts.filter(p => p.id !== id);
    return {...state, cartProducts}
}




const reducer = function(state = initialState, action) {
    switch(action.type) {

        case 'FETCH_PRODUCTS':
                productsMap(action.payload)
                getById(action.payload, 105)
                return {
                    ...state,
                    products: action.payload,
                    cartDetailed: cartDetailed(state.cartProducts, state.cartDetailed)
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





/*
export default class{
    @observable items = []

    constructor(rootStore){
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
    }

    @computed get productsMap(){
        let map = {};

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
        });

        return map;
    }

    @action load(){
        return new Promise((resolve, reject) => {
            this.api.all().then((data) => {
                this.items = data;
                resolve(true);
            });
        });
    }

    getById(id){
        let index = this.productsMap[id];

        if(index === undefined){
            return null;
        }

        return this.items[index];
    }
}*/





// server api
function getProducts(){
    return [
        {
            id: 100,
            // title: 'Ipnone 200',
            // price: 12000,
            // rest: 10,
            cnt: 1
        },
        {
            id: 101,
            // title: 'Samsung AAZ8',
            // price: 22000,
            // rest: 5,
            cnt: 1
        },
        {
            id: 103,
            // title: 'Nokia 3310',
            // price: 5000,
            // rest: 2,
            cnt: 1
        },
        {
            id: 105,
            // title: 'Huawei ZZ',
            // price: 15000,
            // rest: 8,
            cnt: 1
        }
    ];
}
