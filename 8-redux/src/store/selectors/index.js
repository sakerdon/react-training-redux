import { createSelector } from 'reselect';

const getPproducts = state => state.products.products;
const getCartProducts = state => state.cart.cartProducts;
const getCartDetailed = state => cartDetailedSelector(state);
const getFormData = state => state.order.formData;

const productsMap = (products) => {
	let map = {};
    products.forEach((pr, i) => {
        map[pr.id.toString()] = i;
    });
    return map;
}


const getById = (map = {}, products, id) => {
    let index = map[id];

    if (index === undefined) {
        return null;
    }
    return products[index];
}


export const formValidSelector = createSelector(
    getFormData,
    (formData) => Object.values(formData).every(field => field.valid)
)


export const cartTotalPriceSelector = createSelector(
	getCartDetailed, 
    (cart) => cart.reduce((t, pr) => t + pr.price * pr.cnt, 0)
)


export const cartTotalCntSelector = createSelector(
	getCartDetailed, 
    (cart) => cart.reduce((t, pr) => t + pr.cnt, 0)
)


export const cartDetailedSelector = createSelector(
  getPproducts,
  getCartProducts,
  (products, cart) => cart.map((pr) => {
        let product = getById(productsMap(products), products, pr.id);
        return {...product, cnt: pr.cnt};
    }
))