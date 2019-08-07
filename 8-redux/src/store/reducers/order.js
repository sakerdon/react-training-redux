let initialState = {
    formData: {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'От 7 до 15 цифр',
            valid: null
        },
        email: {
            value: '',
            label: 'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Собака',
            valid: null
        }
    },
    lastOrderCache: {
        name: '',
        totalPrice: ''
    }

}
 
function change(state, name, value) {
    let formData = {...state.formData}
    formData[name] = {...formData[name], value}
    formData[name].valid = formData[name].validator(value);
    return {...state, formData}
}


function changeCache(state, data) {
    let lastOrderCache = {...data};
    return {...state, lastOrderCache}
}

const reducer = function(state = initialState, action) {
    switch(action.type) {

        case 'ORDER_FORM_DATA_CHANGE':
            return change(state, action.name, action.value)
            break;

        case 'ORDER_CACHE_CHANGE':
            return changeCache(state, action.lastOrderCache)
            break;
        default : return state;
    }


    return state;

        
}

export default reducer;

