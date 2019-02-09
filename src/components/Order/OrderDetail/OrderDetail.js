import React from 'react';

function OrderDetail(props) {
    const {name, label, amount, total} = props.food;


    return <div>{amount ? <p>
        <span>{label}</span>
        <span>x{amount} = {total}</span>
        <span><button onClick={() => props.changeFood(name, -1)}><b>x</b></button></span>
    </p>: null}</div>
}

export default OrderDetail;