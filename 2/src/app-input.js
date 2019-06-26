import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static defaultProps = {
        onInput: function(e){console.log('onInput', e.target.value)},
        onChange: function(e){console.log('onChange', e.target.value)},
    }


    static propTypes = {
        onChange: PropTypes.func,
        onInput: PropTypes.func
    }


    // static getDerivedStateFromProps(props, state){
    //     console.log('props', props);
    //     console.log('state', state);
    //     // this.state.inputValue = 
    // }

    state = {
        inputValue: this.props.value
    };

    // setValue(e){
    //     const {onInput, onChange} = this.props;
    //     // this.setState({inputValue: newStr});
    //     onInput(e);
    // }

    changeValue = (e) => {
        const {value, onInput, onChange} = this.props;
        onInput(e);

    }





    render(){
        const {value, onInput, onChange} = this.props;
        return (
            <div>
                <input value={value} 
                       onChange={this.changeValue}
                       onBlur={onChange}
                       onKeyUp={ (e) => e.keyCode === 13 ? onChange(e) : false}
                />
            </div>
        );
    }
}
