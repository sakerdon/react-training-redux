import {observable, computed, action} from 'mobx';

export default class{
    @observable products = []

    constructor(rootStore){
        this.rootStore = rootStore;
        this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
    }

    @computed get productsDetailed(){
        return this.products.map((pr) => {
            let product = this.rootStore.products.getById(pr.id);
            return {...product, cnt: pr.cnt};
        });
    }

    @computed get inCart(){
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get cartCnt(){
        return this.products.length;
    }

    @computed get total(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0);
    }

    @action load(){
        this.api.load(this.token).then((data) => {
            this.products = data.cart;
            
            if(data.needUpdate){
                this.token = data.token;
                this.storage.setItem('cartToken', this.token);
            }
        });
    }

    @action add(id, ref){

        this.disableEl(ref);

        this.api.add(this.token, id)
            .then((res) => {
                if(res){
                    this.products.push({id, cnt: 1});
                }
            })
            .then( () => this.unDisableEl(ref) );
    }

    @action change(id, cnt, ref){

        this.disableEl(ref);

        let index = this.products.findIndex((pr) => pr.id === id);

        this.api.change(this.token, id, cnt).then((res) => {

            if(index !== -1){
                this.products[index].cnt = cnt;
            }
        })
        .then(() => this.unDisableEl(ref) )
    }


    @action remove(id, ref){
        this.disableEl(ref)

        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.api.remove(this.token, id).then((res) => {
                this.products.splice(index, 1);
            })
            .then(() => this.unDisableEl(ref) );
        }
    }


    @action clean(){
        this.api.clean(this.token).then((res) => {
            this.products = [];
        });
    }



/*
    Такое чувство, что этим двум методам не место на складе.  
    С одной стороны они работают с отображением элементов,
    хотя с другой стороны они блокируют повторную отправку данных.
    Не совсем понятно как правильно делать. В api наверное тоже не стоит?

    Да и вообще, нужны ли такие методы.Смотрится грязновато. 
    Не приумал, к сожалению как это сделать изящнее. 
*/
    disableEl(ref){
        ref.disabled = true;
        if(ref.children.length) {
            ref.querySelectorAll('input, button').forEach(el => el.disabled = true)
        }

    }

    unDisableEl(ref){
        ref.disabled = false;
        if(ref.children.length) {
            ref.querySelectorAll('input, button').forEach(el => el.disabled = false)
        }

    }
}











// server api
// function getProducts(){
//     return [
//         {
//             id: 100,
//             title: 'Ipnone 200',
//             price: 12000,
//             rest: 10,
//             current: 1
//         },
//         {
//             id: 101,
//             title: 'Samsung AAZ8',
//             price: 22000,
//             rest: 5,
//             current: 1
//         },
//         {
//             id: 103,
//             title: 'Nokia 3310',
//             price: 5000,
//             rest: 2,
//             current: 1
//         },
//         {
//             id: 105,
//             title: 'Huawei ZZ',
//             price: 15000,
//             rest: 8,
//             current: 1
//         }
//     ];
// }