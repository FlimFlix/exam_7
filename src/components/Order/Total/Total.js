import React from 'react';

function Total(props) {
    let service = props.total * 0.10;
    return <div className='order_price'>

        <p>Обслуживание: <span className='price'> {service} сом</span></p>
        <p>Итого: <span className='price'>{props.total + service} сом</span></p>
    </div>
}

export default Total;