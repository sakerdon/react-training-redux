import React from 'react';
import PropTypes from 'prop-types';

export default class CounterClass extends React.Component{

    state = {
        current: this.props.min
    }

    onPlus = () => {

        const {max} = this.props;
        let current = this.state.current >= max ? max : this.state.current + 1;

        this.setState({
            current
        });
    }
    onMinus = () => {
        const {min} = this.props;
        let current = this.state.current <= min ? min : this.state.current - 1;

        this.setState({
            current
        });
    }

    onInput = (e) => {
        const {min, max} = this.props;

        let current = '';
        if (e.target.value) {
            current = Number(e.target.value);
            if (current <= min || isNaN(current)) current = min;
            if (current >= max) current = max;
        }


        this.setState({
            current
        });
    }
       

    render(){
        return (
            <div>
                <button onClick={this.onMinus}>-</button>
                <input 
                    value={this.state.current}
                    onChange={this.onInput} 

                    />
                <button onClick={this.onPlus}>+</button>
            </div>
        );
    }
}



CounterClass.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

