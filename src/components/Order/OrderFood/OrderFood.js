import React from 'react';

function OrderFood(props) {
    const {name, label, amount, total} = props.food;

    return <div className='order_food'>
        {amount ? <p>
            <span className='title'>{label} x{amount}</span>
            <span className='price'>{total} сом<i className="fas fa-times" onClick={() => props.changeFood(name, -1)}></i></span>

        </p> : null}
    </div>
}

export default OrderFood;