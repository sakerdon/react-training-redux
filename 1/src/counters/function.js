import React, {useState} from 'react';
import PropTypes from 'prop-types';

// На мой взгляд, компоненты-функции пока смотрятся изящнее

export default function CounterFunction(props){
    const {min, max} = props;
    const [current, setCurrent] = useState(min);

    const onPlus = () => {
        setCurrent(current >= max ? max : current + 1);
    }

    const onMinus = () => {
        setCurrent(current <= min ? min : current - 1);
    }

    const onInput = (e) => {

        let newCurrent = '';
        if (e.target.value) {
            newCurrent = Number(e.target.value);
            if (newCurrent <= min || isNaN(newCurrent)) newCurrent = min;
            if (newCurrent >= max) newCurrent = max;
        } 

        setCurrent(newCurrent)
    }

    return (
            <div>
                <button onClick={onMinus}>-</button>
                <input 
                    value={current}
                    onChange={onInput} 

                    />
                <button onClick={onPlus}>+</button>
            </div>
        );
}


CounterFunction.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};


