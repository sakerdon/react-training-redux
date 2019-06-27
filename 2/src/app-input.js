import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static defaultProps = {
        value: '',
        onInput: (e) => {console.log('onInput', e.target.value)},
        onChange: (e) => {console.log('onChange', e.target.value)},
        type: 'text',
    }

    static propTypes = {
        onChange: PropTypes.func,
        onInput: PropTypes.func,
        value:  PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        type: PropTypes.string,
        placeholder: PropTypes.string,
    }

    state = {
        inputValue: this.props.value
    };

    changeValue = (e) => {
        const {onInput} = this.props;
        this.setState({
            inputValue: e.target.value
        });
        onInput(e);
    }

    render(){
        const {type, value, onInput, onChange, placeholder} = this.props;
        return (
                <input
                    value={this.state.inputValue} 
                    onChange={this.changeValue}
                    onBlur={onChange}
                    onKeyUp={ (e) => e.keyCode === 13 ? onChange(e) : false}
                    type={type} 
                    placeholder={placeholder}
                />
        );
    }
}
