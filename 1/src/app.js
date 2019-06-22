import React from 'react';
import CounterClass from './counters/class.js';
import CounterFunction from './counters/function.js';

export default function(){
    return (
        <div>
            <h2>Class</h2>
            <CounterClass min={1} max={5}/>
            <br/><hr/>
            <h2>Function </h2>
            <CounterFunction min="1" max="5"/> 
            <small>Props is not valid!</small>
        </div>
    );
}