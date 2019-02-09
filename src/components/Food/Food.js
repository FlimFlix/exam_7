import React from 'react';

function Food(props) {
    const {label, price, name} = props.food;

    let icon;
    if (props.food.type === 'food'){
            icon = <i className="fas fa-utensils"></i>
        } else {
            icon = <i className="fas fa-coffee"></i>
        }

    return (
        <div className='food' onClick={() => props.changeFood(name, +1)}>
            <span className='food_type'>{icon}</span>
            <div className='info'>
                <p>{label}</p>
                <span>Цена: {price} сом</span>
            </div>
        </div>
    )
}

export default Food;