import React from 'react';

import cartModel from '~s/cart.js';
import form from '~s/form.js';

export default class extends React.Component{
    render(){
    	let formData = form.formData;

    	let row = [];

    	for(let name in formData){
    	    const {value} = formData[name];
    	     row.push(<tr key={name}><td>{name}: </td><td>{value}</td></tr>);
    	}

        return (
            <div>
                <h2>Congratulations!</h2>
                <table><tbody>{row}</tbody></table>
                <p><strong>Total: {cartModel.total}</strong></p>
            </div>
        )
    }
}