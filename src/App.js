import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu";
import Food from "./components/Food/Food";

const AVAILABLE_FOOD = [
    {name: 'Hamburger', price: 80, label: 'Гамбургер'},
    {name: 'Cheeseburger', price: 90, label: 'Чизбургер'},
    {name: 'Fries', price: 45, label: 'Картофель фри'},
    {name: 'Coffee', price: 70, label: 'Кофе'},
    {name: 'Tea', price: 25, label: 'Чай'},
    {name: 'Cola', price: 30, label: 'Кола'}
];

const ORDER = [
    {name: '', amount: 1}
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

  render() {
    return (
      <div className="container">
        <Menu>
            {this.state.foods.map(item => <Food food={item} key={item.name}/>)}
        </Menu>
      </div>
    );
  }
}

export default App;
