import {observable, computed, action} from 'mobx';
import productModel from '~s/products.js';


class Cart{

    getIndex(id) {
        return this.products.findIndex(obj => obj.id === id)
    }

    @observable products = [];

    @computed get total(){
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
    }


    @computed get changeOn(){
        return this.products.map((product, i) => {
            return (cnt) => this.change(i, cnt);
        });
    }

    @action add(id){
        let obj = productModel.products.filter(ob => ob.id === id)[0];
        this.products.push(obj);
    }

    @action change(i, cnt){
        this.products[i].current = cnt;
    }

    @action remove(i){
        this.products.splice(i, 1);  
    }
    @action removeFromId(id){ // Добавил, чтобы не ломать уже написанную логику minmax'a
        this.products.splice(this.getIndex(id), 1);
    }
}

export default new Cart();
