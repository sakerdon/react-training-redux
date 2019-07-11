import {observable, computed, action} from 'mobx';

export default class{
    @observable products = []

    constructor(rootStore){
        this.rootStore = rootStore;
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

    @computed get productCnt(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.cnt;
        }, 0);
    }

    @computed get total(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0);
    }
/*
    Я совсем не понял задание с промисами.
    Зачем методам add, change, remove возвращать промис, 
    да и как это сделать совсем не понял.
    
    Мне казалось наоборот - они должны обрабатывать промис,
    вернувшийся после какого-то запроса. 
    Наверное, я не про то думаю.
*/


    @action add(id){
        fetch('#').then(res => {
            console.log(res.status);
            this.products.push({id, cnt: 1});
        })
    }

    @action change(id, cnt){
        fetch('#').then((res) =>  {
            console.log(res.status);
            let index = this.products.findIndex((pr) => pr.id === id);
            if(index !== -1){
                this.products[index].cnt = cnt;
            }
        })
    }

    @action remove(id){

        fetch('#').then((res) =>  {
            console.log(res.status);
            let index = this.products.findIndex((pr) => pr.id === id);
            if(index !== -1){
                this.products.splice(index, 1);
            }
        })
    }


}







