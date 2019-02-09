import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Food/Menu.js";
import Food from "./components/Food/Food";
import OrderDetail from "./components/Order/OrderDetail/OrderDetail";
import Order from "./components/Order/Order.js";

const AVAILABLE_FOOD = [
    {name: 'Hamburger', price: 80, label: 'Гамбургер'},
    {name: 'Cheeseburger', price: 90, label: 'Чизбургер'},
    {name: 'Fries', price: 45, label: 'Картофель фри'},
    {name: 'Coffee', price: 70, label: 'Кофе'},
    {name: 'Tea', price: 25, label: 'Чай'},
    {name: 'Cola', price: 30, label: 'Кола'}
];

const ORDER = [
    {name: 'Hamburger', amount: 1},
    {name: 'Tea', amount: 1}
];

class App extends Component {

  constructor(props) {
        super(props);

        this.state = {};

        this.state.foods = AVAILABLE_FOOD.map(item => {
            let food = {...item};

            let order = ORDER.find(item => food.name === item.name);
            food.amount = order ? order.amount : 0;
            food.total = food.price * food.amount;

            return food;
        })};

   changeFood = (name, amount) => {
        let index = this.state.foods.findIndex(item => item.name === name);
        let food = {...this.state.foods[index]};

        food.amount += amount;
        if(food.amount < 0) food.amount = 0;
        food.total = food.amount * food.price;

        let foods = [...this.state.foods];
        foods[index] = food;

        let state = {...this.state, foods};

        this.setState(state);
    };

  render() {
    return (
      <div className="container">
        <Order>
            {this.state.foods.map(item => <OrderDetail food={item} key={item.name}
                                                       changeFood={this.changeFood}/>)}
        </Order>
        <Menu>
            {this.state.foods.map(item => <Food food={item} key={item.name} />)}
        </Menu>
      </div>
    );
  }
}

export default App;
