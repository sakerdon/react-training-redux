/*import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';

export default class extends React.Component{
    render(){
        return (
            <div>
                <h2>Order</h2>
            </div>
        )
    }
}

*/
import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';
import cartModel from '~s/cart.js';
import form from '~s/form.js';
import router from '~s/router.js';
import {observer} from 'mobx-react';

@observer class Order extends React.Component{

    state = {
        showModal: false
    }

    show = () => {

    	form.isFirstTime = true;
    	if (!form.isAllowSend) return;
    	
        this.setState({showModal: true});
    }

    hide = () => {
        this.setState({showModal: false});
    }

    confirm = () => {
        this.hide();
        router.moveTo('result')
        
    }

    render(){
        let formFields = [];
        const {formData, change, isValid, isFirstTime} = form;

        for(let name in formData){
            const {label, value, isChanged, errMessage} = formData[name];

            let validClass = '', error = null;

            if (isFirstTime) {
            	validClass = !isValid(name) ? 'is-invalid' : 'is-valid';

            	error = !isValid(name) 
            			? <div className="invalid-feedback">{errMessage}</div> 
            			: null 
            } 

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>

                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                    	className={validClass}
                        type="text" 
                        value={value}
                        onChange={(e) => change(name, e.target.value)} 
                    />

                    {error}
           

                </Form.Group>
            );
        }

        return (
            <div>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {formFields}
                </Form>
                <Button variant="warning" onClick={() => router.moveTo('cart')}>
                    Back to cart
                </Button>
                &nbsp;
                <Button variant="primary" onClick={this.show}>
                    Apply order
                </Button>


                <Modal show={this.state.showModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            No
                        </Button>
                        <Button variant="primary" onClick={this.confirm}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Order;