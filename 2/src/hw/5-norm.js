import React from 'react';
import PropTypes from 'prop-types';
import AppInput from '../app-input';

export default class extends React.Component{
    static defaultProps = {
        onChange: function(cnt){}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {
        cnt: this.props.cnt
    };

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt){

        let cnt = parseInt(newCnt);

        if (isNaN(newCnt)) {
            cnt = this.props.min;
        } else {
            cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);            
        }
        
        this.setState({cnt});
        this.props.onChange(cnt);
    }

    setValue(newStr){
        this.setState({cnt: newStr});
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>

                {/*
                    Для того, чтобы посмотреть onInput, надо заменить onChange 
                    на onInput={(e) => this.set(e.target.value)
                    т.к. в рамках нашего примера может отрабатывать только что-то одно, как я понимаю.
                    В отрыве от нашего примера работают оба события.
                    Глядя на мой key  - cкорее всего, все-таки я что-то не так сделал, 
                    но ничего умнее придумать не смог.
                */}
                <AppInput 
                        value={this.state.cnt}
                        onChange={(e) => this.set(e.target.value)}
                        key={Math.random()}
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}