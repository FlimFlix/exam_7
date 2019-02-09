import React from 'react';


function Order(props) {

    return <div className='order'>
        {props.children}
    </div>
}

export default Order;