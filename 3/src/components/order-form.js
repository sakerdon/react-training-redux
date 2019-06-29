import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class extends React.Component{

    nameInput = React.createRef();
    emailInput = React.createRef();

    state = {
        showPopup: false
    }

    componentDidMount() {
        this.nameInput.current.focus()
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const inputs = [
            this.nameInput.current, 
            this.emailInput.current        
        ];

        inputs.forEach(input => this.checkError(input))
        if (!this.allowSend(inputs)) return 

        this.handleOpen();

    }
     
    checkError = (input) => {
        if(!input.value.length){
            input.classList.add('is-invalid');
        } else input.classList.remove('is-invalid');
    }   

    allowSend = (inputs) => {
        return inputs.every(input => input.value.length);   
    }

    handleClose = () => this.setState({showPopup: false});
    handleOpen = () => this.setState({showPopup: true});

    render(){

        return (
            <div className="container">
                <span className="btn btn-secondary" onClick={ this.props.prevPage }>Back</span>

                <form className="jumbotron col-md-6 mx-auto"
                    onSubmit={this.onFormSubmit}
                >
                  <h3> Send order</h3>
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        ref={this.nameInput}
                        onChange={(e) => this.checkError(e.target) }/>
                  </div>
                  <div className="form-group">
                    <label >Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        ref={this.emailInput}
                        onChange={(e) => this.checkError(e.target) }
                        />
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>

                <Modal show={this.state.showPopup} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you realy want to buy this?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => this.props.onSend()}>
                      Buy Now!
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
