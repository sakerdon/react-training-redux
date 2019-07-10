import React from 'react';

// передача линка - перебор!!!

export default function(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>
                <strong>Price: {props.price}</strong> 
            </div>
            <props.linkComponent to={props.backUrl}>Back to list</props.linkComponent>
        </div>
    );
}