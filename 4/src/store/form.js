import {observable, computed, action} from 'mobx';

class UserForm{

    @observable isFirstTime = false; 

    @observable formData = {
        name: {
            label: 'Name',
            value: '',
            pattern: /.+/,
            errMessage: 'Enter your name'
        },
        email: {
            label: 'Email',
            value: '',
            pattern: /.+@.+/,
            errMessage: 'Enter correct email'
        },
        phone: {
            label: 'Phone',
            value: '',
            pattern: /\d+/,
            errMessage: 'Enter correct phone'
        },
        
    }

    @action change = (key, value) =>{
        this.formData[key].value = value;

        if(!this.formData[key].isChanged){
            this.formData[key].isChanged = true;
        }
    }

    @computed get isAllowSend() {
        return Object.keys(this.formData).every(key => this.isValid(key));
    }

    isValid = (key) => {
        const {pattern, value} = this.formData[key];
        return computed(() => pattern.test(value)).get();
    }

}

export default new UserForm();




