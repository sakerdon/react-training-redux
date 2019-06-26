import React from 'react';
import AppMinMax from './hw/5-norm.js';

export default class extends React.Component{
    state = {
        isDone: false,
        products: [
            {
                id: 100,
                title: 'Ipnone 200',
                price: 12000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Samsung AAZ8',
                price: 22000,
                rest: 5,
                current: 1
            },
            {
                id: 103,
                title: 'Nokia 3310',
                price: 5000,
                rest: 2,
                current: 1
            },
            {
                id: 105,
                title: 'Huawei ZZ',
                price: 15000,
                rest: 8,
                current: 1
            }
        ]
    }

    changeCnt(i, cnt){
        let newProducts = [...this.state.products];
        let newProduct = {...newProducts[i]};
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});
    }


    deleteItem(id){
      this.setState(({products}) =>{
        return{
          products: products.filter(item => item.id !== id) //новый массив
        }
      })
    }

    change = () => {
        this.setState({isDone: true});
    }




    render(){

        let globalTotal = 0;

        let productsRows = this.state.products.map((product, i) => {

            const {id, title, price, current, rest} = product;
            globalTotal += price * current;

            return (
                <tr key={id}>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={rest} 
                                   cnt={current} 
                                   onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{price * current}</td>
                    <td>
                        <button onClick = {() => this.deleteItem(id)}>Del</button>
                    </td>
                </tr>
            );
        });

        let orderScreen = (
            <div>
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                        {productsRows}
                        <tr>
                            <td colSpan="3"><strong>Global total</strong></td>
                            <td><strong>{globalTotal}</strong></td>
                        </tr>

                    </tbody> 
                </table>

                <button onClick = { this.change }>Submit</button>
                
            </div>
        );

        let doneScreen = (<div>Поздравляем! <br />Вы накупили на {globalTotal} руб.</div>);



        return !this.state.isDone ? orderScreen : doneScreen

            
        
    }
}