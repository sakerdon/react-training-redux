import cartStore from './cart';
import productsStore from './products';
import orderStore from './order';

class RootStore{
    constructor(){
        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
    }    
}

export default new RootStore();