import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';


import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';


import {connect} from 'react-redux';
import actions from '~s/actions';

class Order extends React.Component{
    state = {
        showModal: false
    }

    show = () => {
        this.setState({showModal: true});
    }

    hide = () => {
        this.setState({showModal: false});
    }

    confirm = () => {
        this.hide();
        this.props.history.push(routesMap.result);
    }

    render(){

        let formFields = [];
        let {formData, onChange} = this.props;

        for(let name in formData){
            let field = formData[name];
            
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={field.value}
                        onChange={(e) => onChange(name, e.target.value)}
                    />
                    {field.valid === null || field.valid ? '' : 
                        <Form.Text className="text-muted">
                            {field.errorText}
                        </Form.Text>
                    }
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
                <Link className="btn btn-warning" to={routesMap.home}>
                    Back to cart
                </Link>
                &nbsp;
                <Button variant="primary" 
                        onClick={this.show} 
                        disabled={false}>
                    Apply order
                </Button>
                <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Total: {0}</strong>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Ooops
                        </Button>
                        <Button variant="primary" onClick={this.confirm}>
                            All right
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        formData: state.order.formData
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onChange: (name, value) => dispatch(actions.order.change(name, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);




