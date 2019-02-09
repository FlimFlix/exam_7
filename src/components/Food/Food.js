import React from 'react';

function Food(props) {
    const {label, price} = props.food;
    return (
        <div className='food'>
            <div className='info'>
                <p>{label}</p>
                <span>Price: {price} сом</span>
            </div>
        </div>
    )
}

export default Food;