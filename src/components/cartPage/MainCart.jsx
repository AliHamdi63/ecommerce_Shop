import React from 'react'
import FillCart from './FillCart';
import EmtyCart from './EmtyCart';
import { useSelector } from 'react-redux';

function MainCart() {
    document.title = "Cart";
    let numOfItems = useSelector((state) => state.cart.numOfItems);


    return (
        <div>
            {numOfItems.length === 0 ? <EmtyCart /> : <FillCart />}
        </div>
    )
}
export default MainCart;