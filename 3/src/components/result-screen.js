import React from 'react';

export default class extends React.Component{

    render(){

      let total = null;
      if (this.props.total) {
        total = <div>Order total price is ${this.props.total} </div>
      } 

        return (
            <div className="container d-flex">
                <div className="jumbotron col-md-6 m-auto text-center">
                    <h3>Thank you!</h3>

                    <h4>{total}</h4>

                </div>
            </div>
        );
    }
}
