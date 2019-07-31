
let initialState = {
    products: []
}
 

// all().then(res => console.log('test', res));


const reducer = function(state = initialState, action) {
    switch(action.type) {

        case 'FETCH_PRODUCTS':
            // all().then(products => {
                // let products = [1,2,3]
                // console.log('test2', products)
                console.log('test3', state)
                return {
                    ...state,
                    products: action.payload
                };
            // });
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