import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static defaultProps = {
        type: 'text',
        value: '',
        onInput: (e) => {console.log('onInput', e.target.value)},
        onChange: (e) => {console.log('onChange', e.target.value)},
    }

    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func,
        onInput: PropTypes.func,
        value:  PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
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
        const {type, value, onInput, onChange} = this.props;
        return (
            <div>
                <input
                    type={type} 
                    value={this.state.inputValue} 
                    onChange={this.changeValue}
                    onBlur={onChange}
                    onKeyUp={ (e) => e.keyCode === 13 ? onChange(e) : false}
                />
            </div>
        );
    }
}
